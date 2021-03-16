import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_zHBl55hkC-NjfqI5HOdeh3xmeltPA8g",
  authDomain: "funny-chat-cffc9.firebaseapp.com",
  projectId: "funny-chat-cffc9",
  storageBucket: "funny-chat-cffc9.appspot.com",
  messagingSenderId: "97830764091",
  appId: "1:97830764091:web:9900a015c6915b9138a61e",
  measurementId: "G-MGMJNT7Q8Q"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
