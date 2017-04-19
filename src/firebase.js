import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCeY_qC8nAm-_9VCOW4cxA918DXN0UPyhg',
  authDomain: 'soundcheck-20121.firebaseapp.com',
  databaseURL: 'https://soundcheck-20121.firebaseio.com',
  projectId: 'soundcheck-20121',
  storageBucket: 'soundcheck-20121.appspot.com',
  messagingSenderId: '880367166801'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider
