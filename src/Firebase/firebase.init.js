// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2fufYfcVLbUQTzUmohP_yrGchyKprgA",
  authDomain: "dragon-news-fireauth.firebaseapp.com",
  projectId: "dragon-news-fireauth",
  storageBucket: "dragon-news-fireauth.firebasestorage.app",
  messagingSenderId: "473443436598",
  appId: "1:473443436598:web:0ec9f61633d169e773f097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);