// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes,
} from "firebase/storage"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECTID,
    storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export const userExist = async (uid) => {
    const docRef = doc(db, "users", uid)
    const res = await getDoc(docRef)
    console.log(res)

    return res.exists()
}


export default app