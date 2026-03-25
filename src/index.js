import './styles.css';
import { loadInterfaceElements } from './initialize.js';
import { displayContactContent } from './contact.js';
import { displayAboutContent } from './about.js';
import { displayResumeContent } from './resume.js';
import { displayBookshelfContent } from './bookshelf.js';
import { displayProjectsContent } from './projects.js';


document.addEventListener('DOMContentLoaded', (event) => {
    loadInterfaceElements();
});

const navButtons = document.querySelectorAll('.nav-button-container button');

function setActiveButton(clickedBtn) {
    navButtons.forEach(btn => btn.classList.remove('selected'));
    clickedBtn.classList.add('selected');
}

[
    { selector: '#about-btn', handler: displayAboutContent },
    { selector: '#resume-btn', handler: displayResumeContent },
    { selector: '#projects-btn', handler: displayProjectsContent },
    { selector: '#bookshelf-btn', handler: displayBookshelfContent },
    { selector: '#contact-btn', handler: displayContactContent },
    
    
].forEach(({ selector, handler }) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.addEventListener('click', (e) => {
        window.scrollTo(0,0);
        handler(e);
        setActiveButton(el);
    });
});

document.querySelector('#nav-logo-container').addEventListener('click', () => {
    displayAboutContent();
    navButtons.forEach(btn => btn.classList.remove('selected'));
    document.querySelector('#about-btn').classList.add('selected');
});

// Mobile hamburger menu
const menuBtn = document.querySelector('#nav-menu-btn');
const navButtonContainer = document.querySelector('#nav-button-container');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navButtonContainer.classList.toggle('open');
});

// Close popup when any button or link inside is clicked
// (selected class is already managed by the per-button listeners above)
navButtonContainer.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('a')) {
        navButtonContainer.classList.remove('open');
    }
});

// Close popup when clicking outside
document.addEventListener('click', () => {
    navButtonContainer.classList.remove('open');
});


