// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmsQ82Z3wZ61acOqf9iNSVbkRRNA6TuMI",
  authDomain: "car-doctor-clint-side.firebaseapp.com",
  projectId: "car-doctor-clint-side",
  storageBucket: "car-doctor-clint-side.appspot.com",
  messagingSenderId: "537407892849",
  appId: "1:537407892849:web:2a23127376f3dc8e915ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app