import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK8wpVujsWFZdspLlxGsDbsc5oGx9QaOo",
    authDomain: "project-daily-mail.firebaseapp.com",
    projectId: "project-daily-mail",
    storageBucket: "project-daily-mail.appspot.com",
    messagingSenderId: "237369022280",
    appId: "1:237369022280:web:c972fbae177cad3ef3057d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;