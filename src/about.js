import foto from './assets/fc-headshot.png'
import Typed from 'typed.js'

export function displayAboutContent() {
    const contentContainer = document.querySelector('#content');
    const content = `<h1 class="content-title">About me</h1>
                    <div class="about-container">
                        <div id="about-text">
                            <h1 class="hero-text special-elite-regular">Frankie Costa</h1>
                            <div class="note">
                                <p class="bold">Experienced product builder who <span id="typed-text"></span></p>
                                <p>I've spent 10+ years shipping desktop, cloud and AI-powered product solutions. </p>
                                <p>I'm currently expanding my full-stack web development skills and seeking my next opportunity to bridge my product experience with hands-on technical execution.</p>
                            </div> 
                        </div>
                        <div class="hero-image-container tilted-right-2">
                            <img src="${foto}" class="foto" alt="Personal photo" />
                            <div class="placeholder absolute tilted-left-2"></div>
                            <div class="placeholder-2 absolute tilted-right-4"></div>
                            <div class="neon-sign overlay">
                                <span class="neon-text">#OpenToWork</span>
                            </div>
                        </div>
                    </div>
                    `;
    contentContainer.innerHTML = content;

    new Typed('#typed-text', {
        strings: ['codes...', 'prototypes...', 'designs.', 'ships..', 'researches..', 'tests.', 'listens...', 'creates.', 'analyzes'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: false
    });
}