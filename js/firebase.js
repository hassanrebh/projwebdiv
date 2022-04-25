
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { addDoc, collection, getFirestore ,query,where,getDocs, doc,updateDoc} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp4gkkvNI-EIiZb6rKtOLIpAjfx6oFGBQ",
  authDomain: "webdivfinal.firebaseapp.com",
  projectId: "webdivfinal",
  storageBucket: "webdivfinal.appspot.com",
  messagingSenderId: "44701618540",
  appId: "1:44701618540:web:4bb0026542c7eed9c42349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth section
const auth = getAuth();
const db = getFirestore(app);

export { auth, signInWithEmailAndPassword,doc,updateDoc, createUserWithEmailAndPassword, addDoc, collection ,db,query,where,getDocs}