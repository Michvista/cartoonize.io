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
/* eslint-disable no-empty */
/* eslint-disable no-useless-escape */
/* eslint-disable no-async-promise-executor */
/* eslint-disable object-curly-spacing */

const hammenu = document.getElementById("hammenu") 
const navlinks = document.getElementsByClassName('navlinks')[0] 
const ul = document.querySelector('.nav_links'); 
let menuOpen = false;  
hammenu.addEventListener('click', () => { 
  if (!menuOpen) { 
       ul.style.left = '0%';
        hammenu.classList.add('open'); 
         menuOpen = true;
        }  else {
              ul.style.left = '-100%'; 
        hammenu.classList.remove('open'); 
         menuOpen = false; 
       }
});  
ul.addEventListener('click', () => {
    ul.style.left = '-100%'; 
    hammenu.classList.remove('open'); 
})