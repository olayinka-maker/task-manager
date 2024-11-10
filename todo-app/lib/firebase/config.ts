import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhcgTvsQHv-WEjOF_F4y9px3YWizpt31U",
  authDomain: "task-manager-acb19.firebaseapp.com",
  projectId: "task-manager-acb19",
  storageBucket: "task-manager-acb19.firebasestorage.app",
  messagingSenderId: "50933364594",
  appId: "1:50933364594:web:96868492dc6d385a624feb",
  measurementId: "G-N78DP83ZFT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
