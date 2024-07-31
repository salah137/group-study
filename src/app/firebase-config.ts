// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSh_S8EFR4qCUbqLSlcnaMYvBXuIgJNvs",
  authDomain: "prepare-91cd7.firebaseapp.com",
  projectId: "prepare-91cd7",
  storageBucket: "prepare-91cd7.appspot.com",
  messagingSenderId: "665824056878",
  appId: "1:665824056878:web:46b9d5a2b50446bd75f1bf",
  measurementId: "G-QBY65CPC6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app