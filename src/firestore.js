import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const apiKeyf = process.env.REACT_APP_API_KEY_F;

const firebaseConfig = {
    apiKey: apiKeyf,
    authDomain: "gowashe-dd0b5.firebaseapp.com",
    projectId: "gowashe-dd0b5",
    storageBucket: "gowashe-dd0b5.appspot.com",
    messagingSenderId: "755476383725",
    appId: "1:755476383725:web:a6c0cdb8f35b320f1209e4",
    measurementId: "G-T8NYSK49P4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);