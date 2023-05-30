/* eslint-disable linebreak-style */
/* eslint-disable no-var */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
const { initializeApp } = require('firebase/app');
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

// init firebase
initializeApp(firebaseConfig);

// init services
const auth = getAuth();
const signupForm = document.querySelector('.signup');
const userName = document.querySelector('.left.three');

// signup
var isClicked = false;

const iconFirst = document.getElementById('firstPass');
const iconSecond = document.getElementById('sec');

iconFirst.addEventListener('click', function() {
  const password = document.getElementById("pass");
  isClicked ? password.type = 'text' : password.type = 'password';
  isClicked ? iconFirst.className = 'fa-solid fa-eye-slash' : iconFirst.className = 'fa-solid fa-eye';
  isClicked = !isClicked;
});

iconSecond.addEventListener('click', function() {
  const passwordSec = document.getElementById("passwordSec");
  isClicked ? passwordSec.type = 'text' : passwordSec.type = 'password';
  isClicked ? iconSecond.className = 'fa-solid fa-eye-slash' : iconSecond.className = 'fa-solid fa-eye';
  isClicked = !isClicked;
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userNameValue = userName.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('user created:', cred.user);
      signupForm.reset();
      window.location.href = '/dashboard';
    })
    .catch((err) => {
      alert(err.message);
    });

  console.log(userNameValue);
});

module.exports = { auth };
