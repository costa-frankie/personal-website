import foto from './assets/fc-headshot.png'
import Typed from 'typed.js'

export function displayAboutContent() {
    const contentContainer = document.querySelector('#content');
    const content = `
        <div class="flex-column flex-align-self-center gap-3xl">
            <section class="flex-column flex-align-start gap-xl">
                <h1 class="content-title pin-left">About me</h1>
                <div class="flex-row flex-align-start gap-3xl flex-wrap" id="hero-container">
                        <div id="flex-column gap-md">
                            <h1 class="text-hero upper font-special">Frankie Costa</h1>
                            <div class="note text-h3 flex-column gap-md text-h3 pretty-wrap">
                                <p class="bold">Experienced <span id="what-am-i" class="info"></span> who <span id="typed-text"></span></p>
                                <p>I've spent 10+ years shipping desktop, cloud and AI-powered product solutions. </p>
                                <p>I'm currently expanding my full-stack web development skills and seeking my next opportunity.</p>
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
            <section id="my-story-container" class="flex-column flex-align-center flex-align-self-center gap-sm padding-horizon-md padding-vert-2xl">
                <div id="my-story-content" class="readable flex-column gap-lg padding-xl theme-nav">
                    <h1 class="text-h1 full-width centered font-mono">My story</h1>
                    <p class="text-h5 full-width font-mono">I've spent most of my career trying to truly understand why people do what they do and whether the thing I'm building actually improves their lives. I've learned that falling in love with the problem is the only way to arrive at a solution worth shipping.</p>
                    <p class="text-h5 full-width font-mono">At <a href="https://www.mitchell.com/" target="_blank">Mitchell International</a>, I helped launch <a href="https://www.mitchell.com/solutions/collision-repairers/estimating" target="_blank">Mitchell Cloud Estimating</a> and led the release of an industry-first <a href="https://www.mitchell.com/solutions/auto-insurers/estimating/automated-estimating" target="_blank">automated estimating tool</a> built on Google's machine learning technology. I also launched the organization's first Voice-of-the-Customer program, creating feedback loops that surfaced real user data and drove meaningful process changes across the organization.</p>
                    <p class="text-h5 full-width font-mono">At <a href="https://www.axure.com/" target="_blank">Axure Software</a>, I worked on prototyping software loved by UX designers and product teams across the globe. I led two new collaboration products - <a href="https://www.axure.com/blog/axure-documents-and-whiteboards-beta" target="_blank">Axure Docs and Axure Whiteboards</a> - from concept to public beta, shipped dozens of improvements across the desktop (Axure RP) and cloud (Axure Cloud) products, and overhauled internal tooling to support the company's transition to SaaS.</p>
                    <p class="text-h5 full-width font-mono">Today, I'm learning full-stack web development through <a href="https://www.theodinproject.com/" target="_blank"> The Odin Project</a> while searching for my next role. There's something I genuinely love about being close to the details of how something is built and web development currently scratches that itch.</p>
                    <p class="text-h5 full-width font-mono">When I'm not building products, I'm in the garden growing food that the local squirrels are convinced is theirs, playing Stardew Valley, expanding my record collection, or tinkering with a personal home automation project. I'm based in Vancouver, WA with my wife. Find us at a local brewery's trivia night training for Jeopardy or seeking out our next great slice of pizza.</p>
                    <p class="signature pin-right padding-right-md bold font-mono text-h3 ">-FC</p>
                </div>
            </section>
        </div>
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