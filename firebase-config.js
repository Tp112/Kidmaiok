// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADZ8JnuKB1qYM1uixXrsChp5sx690CO7M",
  authDomain: "kidmaiok-7f4ec.firebaseapp.com",
  projectId: "kidmaiok-7f4ec",
  storageBucket: "kidmaiok-7f4ec.appspot.com",
  messagingSenderId: "918313274954",
  appId: "1:918313274954:web:64be591107ba65ed70a0b3",
  measurementId: "G-3F5615SSB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);