import foto from './assets/fc-headshot.png';
import Typed from 'typed.js';
import { displayValuesContent } from './values.js';

function calculateExperienceMonths() {
    const startDate = new Date ("2015-08");
    const today = new Date();
    let months = (today.getFullYear() - startDate.getFullYear()) * 12;
    months+= today.getMonth() - startDate.getMonth();

    return months;
}


export function displayAboutContent() {
    const contentContainer = document.querySelector('#content');
    const content = `
        <div class="flex-column flex-align-center width-80 gap-xl">
            <h1 class="content-title full-width">About me</h1>
            <section class="flex-row justify-center flex-align-start gap-md flex-wrap flex-wrap-reverse" id="hero-container">
                        <div class="flex-column gap-md">
                            <h1 class="text-hero upper ibm-plex-serif-semibold">Frankie Costa</h1>
                            <div class="text-hero-body">
                                <div class="grid grid-cols-2-hero gap-sm text-h3 flex-align-center">
                                    <p class="col-span-1 text-right muted">Experienced</p>
                                    <div class="col-span-2">
                                        <span class=" bold" id="what-am-i"></span></>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2-hero-2 gap-sm text-h3 flex-align-center">
                                    <p class="col-span-1 text-right"><span class="muted"> who</span></p>
                                    <p class="col-span-2 padding-horizon-sm tag--default rounded-sm" id="typed-text"></p>
                                </div>
                                <br>
                                <p class="text-h3">I help teams solve the right problems and build user-focused solutions.</p>
                            </div>
                        </div>
                        <div class="flex-column gap-sm centered">
                            <div class="img-container open-border border-4 circular flex-column flex-align-center justify-center">
                                <img src="${foto}" class="hero-photo circular shadow-md trans-all-200 margin-md" alt="Personal photo" />
                            </div>
                           <div class="open-border border-1 radius-2 open-to-work">
                                <p><span class="bullet">●</span> Open to work</p>
                            </div>
                        </div>
               
            </section>
        </div>
        <section class="full-width flex-column flex-align-center gap-md padding-vert-2xl" id="values-section">
            <div class="flex-column flex-align-center gap-lg width-80">
                <h1 class="text-h1 full-width centered font-mono">My values</h1>
                <p class="text-h4 centered font-mono muted">These are a few principles that shape how I think and approach my work.</p>
                <div class="flex-row gap-md flex-align-stretch justify-center flex-wrap" id="values-container">
                    ${displayValuesContent()}
                </div>
            </div>
        </section>
        <section class="flex-column flex-align-center gap-sm padding-horizon-md padding-vert-2xl" id="my-story-container" >
            <h1 class="text-h1 full-width centered font-mono">My story</h1>
            <div class="readable flex-column gap-lg padding-horizon-3xl padding-vert-2xl theme-nav" id="my-story-content">
                <p class="text-h5 full-width font-mono">I started in product management because I had a desire to be part of a team 
                    building innovative things. I wanted to understand the details of how people come together to make lovable software. 
                    Over the last ${calculateExperienceMonths()} months, I've developed into a product manager who 
                    <span class="tag--design">designs</span>, 
                    <span class="tag--technical">codes</span> and 
                    <span class="tag--product">strategizes</span>, 
                    and I'm always looking to add to that list.
                </p>
                <p class="text-h5 full-width font-mono">At <a href="https://www.mitchell.com/" target="_blank">Mitchell International</a>, 
                I helped launch <a href="https://www.mitchell.com/solutions/collision-repairers/estimating" target="_blank">Mitchell Cloud Estimating</a> 
                and led the release of an industry-first <a href="https://www.mitchell.com/solutions/auto-insurers/estimating/automated-estimating" target="_blank">automated estimating tool</a> 
                built on Google's machine learning technology. I also launched the organization's first Voice-of-the-Customer program, creating feedback loops that surfaced real user data and drove meaningful process changes across the organization.</p>
                <p class="text-h5 full-width font-mono">At <a href="https://www.axure.com/" target="_blank">Axure Software</a>, I worked on prototyping software loved by UX designers and product teams across the globe. I led two new collaboration products, <a href="https://www.axure.com/blog/axure-documents-and-whiteboards-beta" target="_blank">Axure Docs and Axure Whiteboards</a>, from concept to public beta, shipped dozens of improvements for Axure RP and Axure Cloud, and overhauled internal tooling to support the company's transition to SaaS. I even co-designed a multi-state editing system that streamlines complex user interface design workflows and earned <a href="https://ppubs.uspto.gov/api/patents/html/11762531?source=USPAT&requestToken=eyJzdWIiOiI2ZmVhNmI5MS0xOTYzLTQ5ZmQtYmFkNy02MDJhOTEwZmM4MGIiLCJ2ZXIiOiI2M2E4ZWRiMi02ODU5LTRmYTItYWU4MC03MjE4ZWZjZGY5OWQiLCJleHAiOjB9" target="_blank">U.S. Patent #11762531B2</a>.</p>
                <p class="text-h5 full-width font-mono">Today, I'm learning full-stack web development through <a href="https://www.theodinproject.com/" target="_blank"> The Odin Project</a> while building this site and searching for my next role.</p>
                <p class="text-h5 full-width font-mono">When I'm not building products, I'm in the garden growing food that the local squirrels are convinced is theirs , tending to my farm in Stardew Valley, expanding my record collection, or tinkering with a home automation project. I'm based in <a href="https://en.wikipedia.org/wiki/Vancouver,_Washington" target="_blank">Vancouver, Washington</a> with my wife. Find us at a local trivia night training for Jeopardy, or searching for our next great slice of pizza.</p>
                <p class="text-h5 full-width font-mono">You can find me on <a href="https://www.linkedin.com/in/frankie-j-costa/" target="_blank">LinkedIn</a>.</p>
                <p class="signature centered font-mono text-h3 ">-FC</p>
            </div>
        </section>
                    `;
    contentContainer.innerHTML = content;

    new Typed('#what-am-i', {
        strings: ['product manager','product owner', 'product leader', 'product builder'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 3000,
        loop: true,
        showCursor: false
    });

    const typedStrings = [
        { text: 'codes',      cls: 'tag--technical' },
        { text: 'designs',    cls: 'tag--design' },
        { text: 'ships',      cls: 'tag--product' },
        { text: 'prototypes', cls: 'tag--technical' },
        { text: 'researches', cls: 'tag--default' },
        { text: 'creates',    cls: 'tag--design' },
        { text: 'tests',      cls: 'tag--technical' },
        { text: 'analyzes',     cls: 'tag--product' },
        { text: 'listens',    cls: 'tag--default' },
        { text: 'wireframes',    cls: 'tag--design' },
    ];
    const tagClasses = ['tag--default', 'tag--design', 'tag--technical', 'tag--product'];

    new Typed('#typed-text', {
        strings: typedStrings.map(s => s.text),
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: false,
        preStringTyped(arrayPos, self) {
            self.el.classList.remove(...tagClasses);
            self.el.classList.add(typedStrings[arrayPos].cls);
        }
    });
}