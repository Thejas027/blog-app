// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-281bb.firebaseapp.com",
  projectId: "blog-app-281bb",
  storageBucket: "blog-app-281bb.appspot.com",
  messagingSenderId: "364299922084",
  appId: "1:364299922084:web:e9d5789f8a11280e835431",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
