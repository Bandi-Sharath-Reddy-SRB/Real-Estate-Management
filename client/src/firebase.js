// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-web-application.firebaseapp.com",
  projectId: "real-estate-web-application",
  storageBucket: "real-estate-web-application.appspot.com",
  messagingSenderId: "268156317577",
  appId: "1:268156317577:web:1914a74c8ec0af74283b58",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
