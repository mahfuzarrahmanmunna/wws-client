// firebase config files:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiMSWYn2wjga_r7WKD9o577dpRB6lvdAE",
    authDomain: "wws-WWS.firebaseapp.com",
    projectId: "wws-WWS",
    storageBucket: "wws-WWS.firebasestorage.app",
    messagingSenderId: "199440018791",
    appId: "1:199440018791:web:f2fba928099091b4a953c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth