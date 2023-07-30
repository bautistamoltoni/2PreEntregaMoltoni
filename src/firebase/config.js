// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjCEe6H50asvEksX1SVXGhwZT5EvCByvM",
  authDomain: "mi-comercio-fa629.firebaseapp.com",
  projectId: "mi-comercio-fa629",
  storageBucket: "mi-comercio-fa629.appspot.com",
  messagingSenderId: "560553604032",
  appId: "1:560553604032:web:db81824157f928310e0e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);