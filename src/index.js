import './styles.css';
import { loadInterfaceElements } from './initialize.js';
import { displayResumeContent }from './resume.js';
import { displayContactContent } from './contact.js';
import { displayAboutContent } from './about.js';

console.log("Init...");

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded...");
    loadInterfaceElements();
})

const resumeButton = document.querySelector('#resume-btn');
resumeButton.addEventListener('click', (event) => {
    displayResumeContent();
});

const contactButton = document.querySelector('#contact-btn');
contactButton.addEventListener('click', (event) => {
    displayContactContent();
});

const aboutButton = document.querySelector('#about-btn');
aboutButton.addEventListener('click', (event) => {
    displayAboutContent();
});


