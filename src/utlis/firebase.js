// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6aLIyUmF8QxZC3WSR5GUfDUSTa7n1lIg",
  authDomain: "quiz-app-137c1.firebaseapp.com",
  projectId: "quiz-app-137c1",
  storageBucket: "quiz-app-137c1.appspot.com",
  messagingSenderId: "183584574725",
  appId: "1:183584574725:web:7c813cc0892ad825ffbb6c",
  measurementId: "G-H2J4V2QKR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);