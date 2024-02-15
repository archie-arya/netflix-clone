// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAANA_0Fc4Ddkg3SfBHq87RJcEiWFE8JAk",
  authDomain: "netflixgpt-62b28.firebaseapp.com",
  projectId: "netflixgpt-62b28",
  storageBucket: "netflixgpt-62b28.appspot.com",
  messagingSenderId: "637576648054",
  appId: "1:637576648054:web:ee075e7470979b66581657",
  measurementId: "G-ZSR7BXTT03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
