const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyBPdw2KAu7DXNgm1X4YRDVD-G1q3wvwkzk",
  authDomain: "tunmise-4c983.firebaseapp.com",
  projectId: "tunmise-4c983",
  storageBucket: "tunmise-4c983.appspot.com",
  messagingSenderId: "993816695111",
  appId: "1:993816695111:web:9cd0e83bf77f55a5a23c62",
  measurementId: "G-371QJJHFKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const createUserWithEmailAndPasswordVar = createUserWithEmailAndPassword();

module.exports = { auth, createUserWithEmailAndPasswordVar };
