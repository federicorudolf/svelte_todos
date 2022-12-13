import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDoc, setDoc, collection, deleteDoc, addDoc, updateDoc, doc, where, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2bRecpOnx2nO2ZjSjVac332tA-hE5jGE",
  authDomain: "sveltetodo-94674.firebaseapp.com",
  projectId: "sveltetodo-94674",
  storageBucket: "sveltetodo-94674.appspot.com",
  messagingSenderId: "745618779304",
  appId: "1:745618779304:web:194fd08824ffea2de4269d"
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