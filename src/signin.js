/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable no-var */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBPdw2KAu7DXNgm1X4YRDVD-G1q3wvwkzk",
    authDomain: "tunmise-4c983.firebaseapp.com",
    projectId: "tunmise-4c983",
    storageBucket: "tunmise-4c983.appspot.com",
    messagingSenderId: "993816695111",
    appId: "1:993816695111:web:9cd0e83bf77f55a5a23c62",
    measurementId: "G-371QJJHFKS"
};

// init firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const signinForm = document.querySelector('.signin');
var isClicked = false;
const icon = document.querySelector('i');

icon.addEventListener('click', function() {
  const password = document.getElementById("pass");
  isClicked ? password.type = 'text' : password.type = 'password';
  isClicked ? icon.className = 'fa-solid fa-eye-slash' : icon.className = 'fa-solid fa-eye';
  isClicked = !isClicked;
});

signinForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  const signInEmail = signinForm.email.value;
  const signInPassword = signinForm.password.value;

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((cred) => {
      signinForm.reset();
      console.log('user Logged in:', cred.user);
      window.location.href = '/dashboard';
    })
    .catch(err => {
      alert(err.message);
    });
});

module.exports = { auth };

