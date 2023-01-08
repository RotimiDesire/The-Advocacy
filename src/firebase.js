// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqrGYKm2cI_3uavFRWNET1XqpoRxW1zJg",
  authDomain: "holiday-challenge-c03ba.firebaseapp.com",
  projectId: "holiday-challenge-c03ba",
  storageBucket: "holiday-challenge-c03ba.appspot.com",
  messagingSenderId: "165643119475",
  appId: "1:165643119475:web:f0a4e56262fd0fa9bdb306",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
