import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDDMfBCHXSylJ_rTYIwslJYCd6KZiv8Yfk",
  authDomain: "proyectofinal-a3ee4.firebaseapp.com",
  projectId: "proyectofinal-a3ee4",
  storageBucket: "proyectofinal-a3ee4.appspot.com",
  messagingSenderId: "645379024728",
  appId: "1:645379024728:web:547049980bbc54be0aa72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;