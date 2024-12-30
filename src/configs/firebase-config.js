import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAnuSvrXfDZZEIFAATj9SoZ5c7ZeVe5J60",
    authDomain: "tunstorez.firebaseapp.com",
    projectId: "tunstorez",
    storageBucket: "tunstorez.firebasestorage.app",
    messagingSenderId: "150795791509",
    appId: "1:150795791509:web:6da488a4d90a8a0bc43f9c",
    measurementId: "G-WXDDNC0KE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;