// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMDweEXpuDhyRlL7twLyailUsPmTseTdU",
  authDomain: "matrix-ccd6c.firebaseapp.com",
  projectId: "matrix-ccd6c",
  storageBucket: "matrix-ccd6c.appspot.com",
  messagingSenderId: "687978128289",
  appId: "1:687978128289:web:e69d7db6521a1374ec21e0",
  measurementId: "G-S4T0RLGSFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
