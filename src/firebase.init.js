// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnGNFwyxtXQH8h4fZjDGkzIgN7eKOw9dA",
  authDomain: "social-community-519c6.firebaseapp.com",
  projectId: "social-community-519c6",
  storageBucket: "social-community-519c6.appspot.com",
  messagingSenderId: "880907838722",
  appId: "1:880907838722:web:fedd3016eaf88ec51dce1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;