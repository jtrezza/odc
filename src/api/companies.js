
export function createCompany(firebase, company) {
  var ref = firebase.database().ref('companies');
  var newRef = ref.push();
  var id = newRef.key;
  return newRef.set(
    Object.assign({}, company, {
      id,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    })
  )
  .then(() => id);
}
