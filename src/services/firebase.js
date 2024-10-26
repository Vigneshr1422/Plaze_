// // // src/services/firebase.js
// // import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyClz3L9sVdzrkEQW9ZT5ibqOtW09Ydmbaw",
// //   authDomain: "sample-firebase-project-609cd.firebaseapp.com",
// //   databaseURL: "https://sample-firebase-project-609cd-default-rtdb.firebaseio.com",
// //   projectId: "sample-firebase-project-609cd",
// //   storageBucket: "sample-firebase-project-609cd.appspot.com",
// //   messagingSenderId: "998619724774",
// //   appId: "1:998619724774:web:b31dfb513d925419f73427",
// //   measurementId: "G-XXLFRCM6GK"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
// // const auth = getAuth(app);

// // export { auth, db };

// // Import the functions you need from the SDKs you need
// // Import the functions you need from the SDKs you need
// // src/services/firebase.js
// // src/services/firebase.js
// // src/services/firebase.js// src/services/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth"; // Import authentication

// const firebaseConfig = {
//   apiKey: "AIzaSyClz3L9sVdzrkEQW9ZT5ibqOtW09Ydmbaw",
//   authDomain: "sample-firebase-project-609cd.firebaseapp.com",
//   databaseURL: "https://sample-firebase-project-609cd-default-rtdb.firebaseio.com",
//   projectId: "sample-firebase-project-609cd",
//   storageBucket: "sample-firebase-project-609cd.appspot.com",
//   messagingSenderId: "998619724774",
//   appId: "1:998619724774:web:b31dfb513d925419f73427",
//   measurementId: "G-XXLFRCM6GK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);

// // Initialize Firebase Auth
// const auth = getAuth(app);

// export { db, auth }; // Export auth for use in other files
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClz3L9sVdzrkEQW9ZT5ibqOtW09Ydmbaw",
  authDomain: "sample-firebase-project-609cd.firebaseapp.com",
  databaseURL: "https://sample-firebase-project-609cd-default-rtdb.firebaseio.com",
  projectId: "sample-firebase-project-609cd",
  storageBucket: "sample-firebase-project-609cd.appspot.com",
  messagingSenderId: "998619724774",
  appId: "1:998619724774:web:b31dfb513d925419f73427",
  measurementId: "G-XXLFRCM6GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { db, auth };
