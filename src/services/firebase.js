import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD6L8I8IOanpPUvv3t8kgpBfnFGUzsAGPY",
  authDomain: "testing-2b7e7.firebaseapp.com",
  projectId: "testing-2b7e7",
  storageBucket: "testing-2b7e7.appspot.com",
  messagingSenderId: "968169198106",
  appId: "1:968169198106:web:868538a59031ce6f94b7a3",
  measurementId: "G-HGVRCKNTJ6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
