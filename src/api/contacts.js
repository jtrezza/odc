
export function createContact(firebase, values, companyId) {
  var ref = firebase.database().ref(`companies/${companyId}/contacts`);
  var newRef = ref.push();
  var id = newRef.key;
  return newRef.set(
    Object.assign({}, values, {
      id,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    })
  )
  .then(() => console.info('The ID is ', id));
}
