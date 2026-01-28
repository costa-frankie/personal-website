import './styles.css';
import { loadInterfaceElements } from './initialize.js';
import { displayHomeContent }from './home.js';
import { displayMenuContent } from './menu.js';
import { displayAboutContent } from './about.js';

console.log("Init...");

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded...");
    loadInterfaceElements();
})

const homeButton = document.querySelector('#home-btn');
homeButton.addEventListener('click', (event) => {
    displayHomeContent();
});

const menuButton = document.querySelector('#menu-btn');
menuButton.addEventListener('click', (event) => {
    displayMenuContent();
});

const aboutButton = document.querySelector('#about-btn');
aboutButton.addEventListener('click', (event) => {
    displayAboutContent();
});


