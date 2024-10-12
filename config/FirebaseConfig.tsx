// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA99mezRjqzl5KrQXhAKQXYrPLsVDUqFmA",
  authDomain: "tourix-7bffc.firebaseapp.com",
  projectId: "tourix-7bffc",
  storageBucket: "tourix-7bffc.appspot.com",
  messagingSenderId: "630750464887",
  appId: "1:630750464887:web:f0b754beac8f2a8ce1ef72",
  measurementId: "G-WY9VC5FJJ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
