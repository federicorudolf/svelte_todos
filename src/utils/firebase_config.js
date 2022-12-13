import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDoc, setDoc, collection, deleteDoc, addDoc, updateDoc, doc, where, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZUVJbDbUdVUwvbo4-kNPAZcJYSHuAnrk",
  authDomain: "sveltetodos-38ca8.firebaseapp.com",
  projectId: "sveltetodos-38ca8",
  storageBucket: "sveltetodos-38ca8.appspot.com",
  messagingSenderId: "529551031111",
  appId: "1:529551031111:web:b2ce18f29bee9b1300aa62",
  measurementId: "G-TJCLJ1F2W1"
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