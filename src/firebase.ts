import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
let firebaseApp;

if(!getApps().length){
    firebaseApp = initializeApp(firebaseConfig);
}
else{
    firebaseApp = getApp();
    deleteApp(firebaseApp);
    firebaseApp = initializeApp(firebaseConfig);
}

console.log(firebaseApp);

export const auth = getAuth(firebaseApp);


export const provider = new GoogleAuthProvider();
export const db = getFirestore(firebaseApp);