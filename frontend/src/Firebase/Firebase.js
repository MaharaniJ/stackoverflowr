// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDKwe-cBg56b8ovuUCzEYcRZPf0B8S_xHQ",
    authDomain: "static-shine-386809.firebaseapp.com",
    projectId: "static-shine-386809",
    storageBucket: "static-shine-386809.appspot.com",
    messagingSenderId: "45652153902",
    appId: "1:45652153902:web:a63ba6c5aaf4c60f4f31bf",
    measurementId: "G-RZN9QJ8GG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};