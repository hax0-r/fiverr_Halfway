import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5vwjacJURfn0rGdFmAJtKVcECYcfKsSU",
  authDomain: "meet-me-halfway-2.firebaseapp.com",
  projectId: "meet-me-halfway-2",
  storageBucket: "meet-me-halfway-2.firebasestorage.app",
  messagingSenderId: "785595350947",
  appId: "1:785595350947:web:4e556f0d0599da7ec9e416"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;