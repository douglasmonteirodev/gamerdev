import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhBNVdIWxSg4h6MC0CzOiqfRVc2AD3aJ8",
  authDomain: "gamerdev-43d5f.firebaseapp.com",
  projectId: "gamerdev-43d5f",
  storageBucket: "gamerdev-43d5f.appspot.com",
  messagingSenderId: "399163702619",
  appId: "1:399163702619:web:4bbf5106ace3a7cd27ae7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
