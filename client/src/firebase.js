// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c80c.firebaseapp.com",
  projectId: "mern-estate-6c80c",
  storageBucket: "mern-estate-6c80c.appspot.com",
  messagingSenderId: "816331903218",
  appId: "1:816331903218:web:dbd3d670de9e093b15c06b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);