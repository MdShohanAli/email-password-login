// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSCMM12rC2dLYWFNH51OYM3ul0L0v0HIw",
    authDomain: "email-password-login-8ec1a.firebaseapp.com",
    projectId: "email-password-login-8ec1a",
    storageBucket: "email-password-login-8ec1a.appspot.com",
    messagingSenderId: "748323153892",
    appId: "1:748323153892:web:df345ba29b7287859049f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;