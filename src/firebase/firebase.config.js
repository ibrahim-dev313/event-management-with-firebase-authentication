// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpf25eMrn2v1UrPzlfFwg07AN5_NBt5Uk",
    authDomain: "fir-practice-64df2.firebaseapp.com",
    projectId: "fir-practice-64df2",
    storageBucket: "fir-practice-64df2.appspot.com",
    messagingSenderId: "925804122288",
    appId: "1:925804122288:web:6c29d4f321fead5a1f2b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;