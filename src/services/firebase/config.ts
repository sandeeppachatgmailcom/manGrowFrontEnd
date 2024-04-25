
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyB871xTk4TsvTSBFltmhvSiYtKy1kNxBeI",
//   authDomain: "evento-a980a.firebaseapp.com",
//   projectId:"evento-a980a",
//   storageBucket: "evento-a980a.appspot.com",
//   messagingSenderId:"183376073234",
//   appId:"1:183376073234:web:6b5b61dc83fdc2aceb3ecb",
//   measurementId:"G-T3G9JN3YBQ"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBjsSYkHkhOzxuIeg1Ckrh9irjslXcYBkU",
    authDomain: "mangrow-316f3.firebaseapp.com",
    projectId: "mangrow-316f3",
    storageBucket: "mangrow-316f3.appspot.com",
    messagingSenderId: "42827561595",
    appId: "1:42827561595:web:547ec2cef231c22f7940de",
    measurementId: "G-T9DV10MH34"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getStorage(app)