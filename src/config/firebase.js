// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE4p62bncCONLh3s5g0qvL_9iQWrECYa4",
  authDomain: "authentication-8f35b.firebaseapp.com",
  projectId: "authentication-8f35b",
  storageBucket: "authentication-8f35b.appspot.com",
  messagingSenderId: "406050108112",
  appId: "1:406050108112:web:4fb60d2251ec955b8aa4d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app