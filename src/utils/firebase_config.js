import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDoc, setDoc, collection, deleteDoc, addDoc, updateDoc, doc, where, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpsIp4nED2E7c4Pfe0HnSf7XyhzHxxelU",
  authDomain: "todo-s-1802e.firebaseapp.com",
  projectId: "todo-s-1802e",
  storageBucket: "todo-s-1802e.appspot.com",
  messagingSenderId: "498597625103",
  appId: "1:498597625103:web:67d3c1100a711e496fd27a",
  measurementId: "G-HEPSY6N258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default {
  auth: {
    auth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
  },
  firestore: {
    firestore,
    getDoc,
    setDoc,
    deleteDoc,
    addDoc,
    updateDoc,
    collection,
    doc,
    where,
    query,
    orderBy,
    onSnapshot
  },
  analytics
}