import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCV2woAn0DD43LeMpV0Oa8SSZMakxVQRpU",
    authDomain: "crwn-db-e4c08.firebaseapp.com",
    projectId: "crwn-db-e4c08",
    storageBucket: "crwn-db-e4c08.appspot.com",
    messagingSenderId: "191400428316",
    appId: "1:191400428316:web:a22aac77f4dddd618d30d9",
    measurementId: "G-GJZ6RM240H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;