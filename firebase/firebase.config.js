// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABlIPeIfcmILOinyeaJy22mmkzOkKkFV8",
  authDomain: "pollock-3a8c7.firebaseapp.com",
  projectId: "pollock-3a8c7",
  storageBucket: "pollock-3a8c7.firebasestorage.app",
  messagingSenderId: "1023217149891",
  appId: "1:1023217149891:web:d4369c4f3e8ce7a4833f76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
