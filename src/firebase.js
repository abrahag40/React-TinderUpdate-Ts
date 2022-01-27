// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW9p7OoH0AFzSAvvJqTP3esJYQf_6GfpI",
  authDomain: "tinder-clone-72338.firebaseapp.com",
  projectId: "tinder-clone-72338",
  storageBucket: "tinder-clone-72338.appspot.com",
  messagingSenderId: "275484048243",
  appId: "1:275484048243:web:572ad45fa07b92bc79e306"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = firebaseApp.fireStore();

export default database