// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK23XwRQYhpXVgulHfqtKf_MEnuezNdSs",
  authDomain: "movieverse-1e3e2.firebaseapp.com",
  projectId: "movieverse-1e3e2",
  storageBucket: "movieverse-1e3e2.firebasestorage.app",
  messagingSenderId: "147130112464",
  appId: "1:147130112464:web:1e96e1e4e6e42accb481d5",
  measurementId: "G-YEPNW9G58Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();