import { initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNQf9gz82Ih1pLJLwxWZ5pQUyihiZzbtA",
  authDomain: "prepwisej.firebaseapp.com",
  projectId: "prepwisej",
  storageBucket: "prepwisej.firebasestorage.app",
  messagingSenderId: "785456237982",
  appId: "1:785456237982:web:a701cff45c4c4d237bda8f",
  measurementId: "G-FM9P2CRPD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);