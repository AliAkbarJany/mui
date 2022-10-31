// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq7ilooSP0qGo3sNz551gvbWGewkPHb-c",
  authDomain: "maui-3e553.firebaseapp.com",
  projectId: "maui-3e553",
  storageBucket: "maui-3e553.appspot.com",
  messagingSenderId: "253148390887",
  appId: "1:253148390887:web:1b999f5d56f9e2b2444942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;