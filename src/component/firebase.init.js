// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjZqpdmPSimcxKiKW1nz4P_fltBR7-Qf8",
  authDomain: "worldwisescholars-6fb05.firebaseapp.com",
  projectId: "worldwisescholars-6fb05",
  storageBucket: "worldwisescholars-6fb05.firebasestorage.app",
  messagingSenderId: "421634539395",
  appId: "1:421634539395:web:d5b8e89b7bf2eb611340b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth