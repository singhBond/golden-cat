// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMTM1Ca4F6NvDEyyuFwl0LcwkWXF9ewws",
  authDomain: "golden-kitchen-70763.firebaseapp.com",
  projectId: "golden-kitchen-70763",
  storageBucket: "golden-kitchen-70763.firebasestorage.app",
  messagingSenderId: "444179316422",
  appId: "1:444179316422:web:68fd9fd6dd0475678de1c7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Storage
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: Export app if needed elsewhere
export default app;