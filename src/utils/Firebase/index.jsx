// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTHDOMAIN,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  appId: import.meta.env.APPID,
  measurementId: import.meta.env.MEASUREMENTID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyB24fBSzNVyiPXK0Py5qj_IEhwW8BGUZng",
//   authDomain: "todojs-96223.firebaseapp.com",
//   projectId: "todojs-96223",
//   storageBucket: "todojs-96223.appspot.com",
//   messagingSenderId: "664858168518",
//   appId: "1:664858168518:web:92b6606b61817559455bc7",
//   measurementId: "G-P9J0LMQ7VC"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);