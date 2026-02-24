import './styles.css';
import './styles-experiment.css';
import { loadInterfaceElements } from './initialize.js';
import { displayContactContent } from './contact.js';
import { displayAboutContent } from './about.js';
import { displayChangelogContent } from './changelog.js';
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
    { selector: '#changelog-btn', handler: displayChangelogContent },
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


