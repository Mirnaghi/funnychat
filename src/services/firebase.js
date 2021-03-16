import firebase from 'firebase';

// your app config from firebase
const firebaseConfig = {

}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
