/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const {initializeApp} = require("firebase/app");
// eslint-disable-next-line linebreak-style
const dotenv = require("dotenv");
dotenv.config();
const {getStorage} = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyB5__-4mD0aTZVMww52OAtB3JQY2OgiM8s",
  authDomain: "cartoonizeai.firebaseapp.com",
  projectId: "cartoonizeai",
  storageBucket: "cartoonizeai.appspot.com",
  messagingSenderId: "820912683571",
  appId: "1:820912683571:web:f574473a8fdcf1cd528146",
  measurementId: "G-192GGH8GC0",
};

const fireApp = initializeApp(firebaseConfig);
const fireStorage = getStorage(fireApp);

module.exports = {fireApp, fireStorage};
