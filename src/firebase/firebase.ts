import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBiJl_Vdbm2s1OpFHvsK7YUJgO2_p6meaw",
    authDomain: "bandage-d1201.firebaseapp.com",
    projectId: "bandage-d1201",
    storageBucket: "bandage-d1201.firebasestorage.app",
    messagingSenderId: "376478922603",
    appId: "1:376478922603:web:e341b5d7b1fc56cb96be2e",
    measurementId: "G-RZG09B50YT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

