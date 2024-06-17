// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvxDXdU8wDi7sMmYTY_ITIaX8BKI9plqs",
  authDomain: "techwithjo-26552.firebaseapp.com",
  projectId: "techwithjo-26552",
  storageBucket: "techwithjo-26552.appspot.com",
  messagingSenderId: "635336784502",
  appId: "1:635336784502:web:722be76d5d0b2aae0fbd57",
  measurementId: "G-HV8T3R9NN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const storage = getStorage(app)