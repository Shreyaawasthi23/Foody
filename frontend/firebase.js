import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "fooders-stop.firebaseapp.com",
    projectId: "fooders-stop",
    storageBucket: "fooders-stop.firebasestorage.app",
    messagingSenderId: "500374987577",
    appId: "1:500374987577:web:29095d05e6a4730087fee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth } 
