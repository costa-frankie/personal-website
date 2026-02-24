import foto from './assets/fc-headshot.png'
import Typed from 'typed.js'

export function displayAboutContent() {
    const contentContainer = document.querySelector('#content');
    const content = `
        <section class="flex-column flex-align-start gap-xl">
            <h1 class="content-title pin-left">About me</h1>
            <div class="hero-container flex-row flex-align-start gap-3xl flex-wrap" id="hero-container">
                    <div id="flex-column gap-md">
                        <h1 class="text-hero upper font-special">Frankie Costa</h1>
                        <div class="note text-h3 flex-column gap-md text-h3 pretty-wrap">
                            <p class="bold">Experienced <span id="what-am-i" class="info"></span> who <span id="typed-text"></span></p>
                            <p>I've spent 10+ years shipping desktop, cloud and AI-powered product solutions. </p>
                            <p>I'm currently expanding my full-stack web development skills and seeking my next opportunity to bridge my product experience with hands-on technical execution.</p>
                        </div>
                    </div>
                    <div class="flex-column gap-sm centered">
                        <div class="img-container open-border border-4 circular flex-column flex-align-center justify-center">
                            <img src="${foto}" class="hero-photo circular shadow-md trans-all-200" alt="Personal photo" />
                        </div>
                       <div class="open-border border-1 radius-2 open-to-work">
                            <p><span class="bullet">●</span> Open to work</p>
                        </div>
                    </div>
            </div>
        </section>
                    `;
    contentContainer.innerHTML = content;

    new Typed('#what-am-i', {
        strings: ['product manager', 'product owner', 'product leader'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 3000,
        loop: true,
        showCursor: false
    });

    new Typed('#typed-text', {
        strings: ['codes...', 'prototypes.', 'designs.', 'ships.', 'researches..', 'tests.', 'listens...', 'creates.', 'analyzes.'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: false
    });
}