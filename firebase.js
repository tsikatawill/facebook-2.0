import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHWGjKcUrzdiYtJ4XLZbCe6uIY8tiBxE0",
  authDomain: "social-blue-ee931.firebaseapp.com",
  projectId: "social-blue-ee931",
  storageBucket: "social-blue-ee931.appspot.com",
  messagingSenderId: "674477184930",
  appId: "1:674477184930:web:028d452f2bc0f0fa0b84fb",
  measurementId: "G-LR6TDFX2PS",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
