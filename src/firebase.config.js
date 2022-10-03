import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5Z5cdfBgXp9IbERdrCMB5Oq0QPSAaNI",
  authDomain: "gamerdev-ca0d1.firebaseapp.com",
  projectId: "gamerdev-ca0d1",
  storageBucket: "gamerdev-ca0d1.appspot.com",
  messagingSenderId: "298748988501",
  appId: "1:298748988501:web:13ea2a6493c5261b5158dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
