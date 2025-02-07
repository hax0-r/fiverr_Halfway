// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5vwjacJURfn0rGdFmAJtKVcECYcfKsSU",
  authDomain: "meet-me-halfway-2.firebaseapp.com",
  projectId: "meet-me-halfway-2",
  storageBucket: "meet-me-halfway-2.firebasestorage.app",
  messagingSenderId: "785595350947",
  appId: "1:785595350947:web:4e556f0d0599da7ec9e416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;