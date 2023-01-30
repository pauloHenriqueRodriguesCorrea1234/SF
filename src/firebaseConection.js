import firebase from "firebase/app";
import "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJbwTYcLqEfWYyHzvIHkFiZJXfgfjXIkA",
  authDomain: "solofertil-ce829.firebaseapp.com",
  projectId: "solofertil-ce829",
  storageBucket: "solofertil-ce829.appspot.com",
  messagingSenderId: "976169254672",
  appId: "1:976169254672:web:d0261531cc28d2ae02ef95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
