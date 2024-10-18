// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuJOQYmmzk0T5zSN79Bmb6xYfLSimAG18",
  authDomain: "to-do-10917.firebaseapp.com",
  projectId: "to-do-10917",
  storageBucket: "to-do-10917.appspot.com",
  messagingSenderId: "389456417769",
  appId: "1:389456417769:web:c922c8631aeac89c383178" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider() 
export const db = getFirestore(app);