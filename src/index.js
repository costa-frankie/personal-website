import './styles.css';
import { loadInterfaceElements } from './initialize.js';
import { displayHomeContent } from './home.js';
import { displayResumeContent }from './resume.js';
import { displayContactContent } from './contact.js';
import { displayAboutContent } from './about.js';
import { displayChangelogContent } from './changelog.js';
import { displayBookshelfContent } from './bookshelf.js';

console.log("Init...");

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded...");
    loadInterfaceElements();
});

[
    { selector: '#nav-home-btn', handler: displayHomeContent },
    { selector: '#home-btn', handler: displayHomeContent },
    { selector: '#changelog-btn', handler: displayChangelogContent },
    { selector: '#contact-btn', handler: displayContactContent },
    { selector: '#about-btn', handler: displayAboutContent },
    { selector: '#bookshelf-btn', handler: displayBookshelfContent },
].forEach(({ selector, handler }) => {
    document.querySelector(selector).addEventListener('click', handler);
});


