// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apikey: import.meta.env.VITE_APP_FIREBASE_API_KEY,  
  authDomain: "taskmanager-57678.firebaseapp.com",
  projectId: "taskmanager-57678",
  storageBucket: "taskmanager-57678.appspot.com",
  messagingSenderId: "1032722504807",
  appId: "1:1032722504807:web:7c747fb02525d9f4ffc8c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);