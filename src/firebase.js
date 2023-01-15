// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoBhsU8u0_HmaGrFbSlWAcb-BmY8abO5Y",
    authDomain: "todo-app-8a82a.firebaseapp.com",
    projectId: "todo-app-8a82a",
    storageBucket: "todo-app-8a82a.appspot.com",
    messagingSenderId: "134793917300",
    appId: "1:134793917300:web:ce00758da19e10fd6ab221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);