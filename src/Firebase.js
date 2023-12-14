// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6FrcoHqty8utyPLM8u-4iVwb8WZsFJE4",
  authDomain: "fir-e3e04.firebaseapp.com",
  projectId: "fir-e3e04",
  storageBucket: "fir-e3e04.appspot.com",
  messagingSenderId: "717057588316",
  appId: "1:717057588316:web:db15807ac631019d527a99",
  measurementId: "G-LCFM4QGK8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
