
export function createUser(firebase, user) {
  return firebase.database().ref(`users/${user.id}`)
  .set(
    Object.assign({}, user, {
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    })
  )
  .then(() => user);
}

export function getUser(firebase, userId) {
  return firebase.database().ref(`users/${userId}`)
  .once('value')
  .then(snapshot => snapshot.val());
}

export default {
  createUser,
  getUser
};
