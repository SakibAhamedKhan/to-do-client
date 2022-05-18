// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlM3KaHFCoQG3JtSB_8BNNumlAuDHjZcE",
  authDomain: "to-do-app-1766b.firebaseapp.com",
  projectId: "to-do-app-1766b",
  storageBucket: "to-do-app-1766b.appspot.com",
  messagingSenderId: "479404964816",
  appId: "1:479404964816:web:0a9e71b9dab93b2d7f57d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;