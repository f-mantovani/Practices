// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB50r9xhb0X01NSkQB_yh5YyYOtDgnHeTo",
  authDomain: "clone-e9c9b.firebaseapp.com",
  projectId: "clone-e9c9b",
  storageBucket: "clone-e9c9b.appspot.com",
  messagingSenderId: "605533816443",
  appId: "1:605533816443:web:51976b0ac0bf4bdcc684de",
  measurementId: "G-RC2YS5732C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };