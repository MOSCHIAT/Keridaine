// js/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC5J0pPP1nqzL1rTqY-vLTVaevWSwDQwdc",
  authDomain: "keridaine-4c0e5.firebaseapp.com",
  projectId: "keridaine-4c0e5",
  storageBucket: "keridaine-4c0e5.firebasestorage.app",
  messagingSenderId: "914860118360",
  appId: "1:914860118360:web:8778db5b547519d236152d",
  measurementId: "G-2E8E9GPTRW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };