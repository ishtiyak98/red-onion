// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH7JKR0eS3LORdUmzw_CNy5yiyHjffakE",
  authDomain: "red-onion-828e9.firebaseapp.com",
  projectId: "red-onion-828e9",
  storageBucket: "red-onion-828e9.appspot.com",
  messagingSenderId: "538150808176",
  appId: "1:538150808176:web:75d8985be3032dbfd762b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
