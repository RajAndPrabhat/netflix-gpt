// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNS6uI8QWYgfRaJwE1x_eBRuGnmNwthdg",
  authDomain: "netflixgpt-51636.firebaseapp.com",
  projectId: "netflixgpt-51636",
  storageBucket: "netflixgpt-51636.appspot.com",
  messagingSenderId: "403975313551",
  appId: "1:403975313551:web:5d27ca9273a46acc4938fa",
  measurementId: "G-NXJY5L1GW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();