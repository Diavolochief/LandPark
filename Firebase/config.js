// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAaTSZexVFyVOQg0LR63_AS9LWqCn22e4Q",

  authDomain: "medi-62e27.firebaseapp.com",

  projectId: "medi-62e27",

  storageBucket: "medi-62e27.appspot.com",

  messagingSenderId: "364635719961",

  appId: "1:364635719961:web:067d7deca2ad835e161d88"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db;