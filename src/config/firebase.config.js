
// import { initializeApp } from "firebase/app";
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDy_Z2sad2KM-zdQlwufumjgn4WOXyWFo0",
  authDomain: "daily-mail-f0806.firebaseapp.com",
  projectId: "daily-mail-f0806",
  storageBucket: "daily-mail-f0806.appspot.com",
  messagingSenderId: "159724129960",
  appId: "1:159724129960:web:57d15751653f59baecbc9d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }