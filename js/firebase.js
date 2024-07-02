// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {  getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmMmrVU8IG_PPr6Wz3vhBiD3Tc62OnBYA",
  authDomain: "olx-uploading-products-ffef5.firebaseapp.com",
  projectId: "olx-uploading-products-ffef5",
  storageBucket: "olx-uploading-products-ffef5.appspot.com",
  messagingSenderId: "929435343586",
  appId: "1:929435343586:web:dcf80bc49c16db720edcbb",
  measurementId: "G-Z4F2RK5MJ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export auth
export const auth = getAuth(app);

export const db = getDatabase();
