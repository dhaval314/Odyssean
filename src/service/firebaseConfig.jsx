// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQhBixSusslTJpfObTMiZvLS8gFxWmjww",
  authDomain: "odyssean-f57a1.firebaseapp.com",
  projectId: "odyssean-f57a1",
  storageBucket: "odyssean-f57a1.firebasestorage.app",
  messagingSenderId: "546072254993",
  appId: "1:546072254993:web:47058b700804ff1f74efb0",
  measurementId: "G-VFL8Y6F8TH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);