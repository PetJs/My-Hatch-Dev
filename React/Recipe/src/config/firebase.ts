// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKoB-zjXAKktgvKy09vWa28bD2dglExI4",
  authDomain: "dogify-d9651.firebaseapp.com",
  projectId: "dogify-d9651",
  storageBucket: "dogify-d9651.appspot.com",
  messagingSenderId: "384416981545",
  appId: "1:384416981545:web:868e5c913285234a2c3238"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()