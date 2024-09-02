import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyASrFEPtCrlwXRbWfGh3X23gXsDYvgzxA0",
    authDomain: "pantry-app-76206.firebaseapp.com",
    projectId: "pantry-app-76206",
    storageBucket: "pantry-app-76206.appspot.com",
    messagingSenderId: "258991395328",
    appId: "1:258991395328:web:0a7e56d912c2a3a7d03ee5",
    measurementId: "G-MN4SY3C3R0"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);


export { auth, app };