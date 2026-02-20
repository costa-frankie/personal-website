import './styles.css';
import { loadInterfaceElements } from './initialize.js';
import { displayHomeContent } from './home.js';
import { displayResumeContent }from './resume.js';
import { displayContactContent } from './contact.js';
import { displayAboutContent } from './about.js';
import { displayChangelogContent } from './changelog.js';
import { displayBookshelfContent } from './bookshelf.js';
import { displayProjectsContent } from './projects.js';

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded...");
    loadInterfaceElements();
});

const navButtons = document.querySelectorAll('#nav-button-container .nav-button');

function setActiveButton(clickedBtn) {
    navButtons.forEach(btn => btn.classList.remove('selected'));
    clickedBtn.classList.add('selected');
}

[
    { selector: '#home-btn', handler: displayHomeContent },
    { selector: '#changelog-btn', handler: displayChangelogContent },
    { selector: '#contact-btn', handler: displayContactContent },
    { selector: '#about-btn', handler: displayAboutContent },
    { selector: '#bookshelf-btn', handler: displayBookshelfContent },
    { selector: '#projects-btn', handler: displayProjectsContent },
].forEach(({ selector, handler }) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.addEventListener('click', (e) => {
        handler(e);
        setActiveButton(el);
    });
});

document.querySelector('.nav-logo').addEventListener('click', () => {
    displayAboutContent();
    navButtons.forEach(btn => btn.classList.remove('selected'));
    document.querySelector('#about-btn').classList.add('selected');
});


