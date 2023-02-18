// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlDhCAizjbzu9CtSLMFT4NuINTThaNH_4",
  authDomain: "blogpageproject-50dca.firebaseapp.com",
  projectId: "blogpageproject-50dca",
  storageBucket: "blogpageproject-50dca.appspot.com",
  messagingSenderId: "171988770595",
  appId: "1:171988770595:web:36b2e6fa80fc89112d3696",
  measurementId: "G-5FYENGXF5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
