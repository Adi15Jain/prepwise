import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXz_ocv7jfNb9ax3RzxtbVumsBYXDn6YM",
    authDomain: "prepwise2-91944.firebaseapp.com",
    projectId: "prepwise2-91944",
    storageBucket: "prepwise2-91944.firebasestorage.app",
    messagingSenderId: "1017172475017",
    appId: "1:1017172475017:web:2a71072694e2c992df1a58",
    measurementId: "G-SLK352SRV3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
