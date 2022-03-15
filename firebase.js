// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBFuFZE66yuFR_f-prqKW4g6oBtBB0Mww",
  authDomain: "clone-8d0cc.firebaseapp.com",
  projectId: "clone-8d0cc",
  storageBucket: "clone-8d0cc.appspot.com",
  messagingSenderId: "260755666695",
  appId: "1:260755666695:web:c9abaadfe580139c4537a2"
};

// Initialize Firebase
const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore(app);

export default db;