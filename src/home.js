import foto from './assets/avatar-fc.png'
import Typed from 'typed.js'

export function displayHomeContent() {
    const contentContainer = document.querySelector('#content');
    const content = `
                    <h1 class="content-title">Home</h1>
                    <div class="about-container">
                        <img src="${foto}" class="foto" alt="Personal photo" />
                        <div id="about-text">
                            <div class="neon-sign">
                                <span class="neon-text">#OpenToWork</span>
                            </div>
                            <h1 id="name-hero">Frankie Costa</h1>
                            <p class="bold">Strategic product manager who <span id="typed-text"></span></p>
                            <p>I've spent 10+ years shipping desktop, cloud and AI-powered solutions.</p>
                            <p>Currently, I'm expanding my full-stack web development skills and seeking my next opportunity to bridge product strategy with hands-on technical execution.</p> 
                        </div>
                    </div>
                    `;
    contentContainer.innerHTML = content;

    new Typed('#typed-text', {
        strings: ['codes...', 'prototypes.', 'designs.', 'ships.', 'builds.', 'researches.', 'tests.', 'listens.', 'creates.'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: false
    });
}