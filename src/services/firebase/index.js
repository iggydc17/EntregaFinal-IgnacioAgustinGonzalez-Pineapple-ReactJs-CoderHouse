import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAWoaeNSWXh9x_MaUUk1SR9ZE_M2EzDDM",
    authDomain: "pineapple-67f51.firebaseapp.com",
    projectId: "pineapple-67f51",
    storageBucket: "pineapple-67f51.appspot.com",
    messagingSenderId: "660381166991",
    appId: "1:660381166991:web:89a33406ae62a754b0affa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
