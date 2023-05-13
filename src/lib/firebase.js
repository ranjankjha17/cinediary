import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "trading-43898.firebaseapp.com",
  projectId: "trading-43898",
  storageBucket: "trading-43898.appspot.com",
  messagingSenderId: "660356103241",
  appId: "1:660356103241:web:3021aaae484474bace1398",
  measurementId: "G-XZNENV08KG"
};

const firebase = Firebase.initializeApp(config);
const provider = new Firebase.auth.GoogleAuthProvider();
const { FieldValue } = Firebase.firestore;

export { firebase, provider, FieldValue };
