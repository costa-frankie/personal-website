// Mobile hamburger menu toggle for the main site nav (partials/nav.html).
// Extracted from the old SPA's src/index.js DOMContentLoaded handler.
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#nav-menu-btn');
    const navButtonContainer = document.querySelector('#nav-button-container');

    if (!menuBtn || !navButtonContainer) return;

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navButtonContainer.classList.toggle('open');
    });

    navButtonContainer.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a')) {
            navButtonContainer.classList.remove('open');
        }
    });

    document.addEventListener('click', () => {
        navButtonContainer.classList.remove('open');
    });
});
