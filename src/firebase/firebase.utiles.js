import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBQUXCNLMbAkib07LNK43kRampt4AjNYGU",
    authDomain: "crwn-db-393e2.firebaseapp.com",
    databaseURL: "https://crwn-db-393e2.firebaseio.com",
    projectId: "crwn-db-393e2",
    storageBucket: "crwn-db-393e2.appspot.com",
    messagingSenderId: "660868989418",
    appId: "1:660868989418:web:8cc32a5ec39227223cb293",
    measurementId: "G-ZW4JEK55LD"
  };
  firebase.initializeApp(config);
export const createUserProfileDocument = async ( userAuth , additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`)
  const snapshot = await userRef.get();
  if (!snapshot.exist) {
    const { displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(' error creatin user', error.message)
    }
  }
  return userRef;
};


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup( provider );
export default firebase ;