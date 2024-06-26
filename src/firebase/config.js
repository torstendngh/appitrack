import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyC5jhy9TToHYjHBpmpxZua0Z7i4CFMTh_w",
    authDomain: "appitrack-efd63.firebaseapp.com",
    projectId: "appitrack-efd63",
    storageBucket: "appitrack-efd63.appspot.com",
    messagingSenderId: "893845310695",
    appId: "1:893845310695:web:020b4ea2dff72e2e0a6642"
});

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google auth provider
export const googleAuthProvider = new GoogleAuthProvider();
