import foto from './assets/fc-headshot.png';
import Typed from 'typed.js';
import { displayValuesContent } from './values.js';
import { displayProjectsContent } from './projects.js';

function calculateExperienceMonths() {
    const startDate = new Date ("2015-08");
    const today = new Date();
    let months = (today.getFullYear() - startDate.getFullYear()) * 12;
    months+= today.getMonth() - startDate.getMonth();

    return months;
}

let typedInstances = [];

export function displayAboutContent() {
    const contentContainer = document.querySelector('#content');
    const content = `
        <div class="flex-column page-max-width gap-xl">
            <h1 class="content-title">About</h1>
            <section class="flex-row justify-center flex-align-center gap-md flex-wrap" id="hero-container">
                <div class="flex-column gap-md flex-align-start">
                    <p class="text-h4 muted">Hello, my name is</p>
                    <h1 class="text-hero upper font-mono">Frankie Costa</h1>
                    <div class="flex-column gap-md text-hero-body">
                        <div class="flex-column gap-xs">
                            <div class="flex-row gap-sm flex-align-center">
                                <p class="text-h3 text-right muted">Experienced</p>
                                <span class="text-h2 written" id="what-am-i"></span>
                            </div>
                            <div class="flex-row gap-sm flex-align-center">
                                <p class="text-h3 text-right muted">who</p>
                                <div class="flex-row gap-xs flex-align-end">
                                    <p class="padding-horizon-sm tag--default rounded-sm text-h2 written" id="typed-text"></p>
                                </div>
                            </div>
                        </div>
                        <p class="text-h3 muted">I help teams solve the right problems and build user-focused solutions.</p>
                    </div>
                </div>
                <div class="flex-column gap-sm centered">
                    <div class="img-container open-border border-4 circular flex-column flex-align-center justify-center">
                        <img src="${foto}" class="hero-photo circular shadow-md trans-all-200 margin-md" width="192px" height="192px" alt="Personal photo" />
                    </div>
                    <div class="open-border border-1 radius-2 open-to-work">
                        <p><span class="bullet">●</span> Open to work</p>
                    </div>
                </div>
            </section>
        </div>
        <section class="flex-column flex-align-center gap-lg padding-horizon-md padding-vert-4xl full-width section--surface-alt" id="my-story-container" >
            <h1 class="text-h1 full-width centered font-mono color-on-brand">My story</h1>
            <p class="text-h4 centered font-mono color-on-brand padding-horizon-3xl">A little bit about me and my career</p>
            <div class="readable flex-column gap-lg padding-horizon-3xl padding-vert-4xl theme-nav" id="my-story-content">
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
                <p class="text-h5 full-width font-mono">When I'm not building products, I'm in the garden growing food that the local squirrels are convinced is theirs, tending to my farm in Stardew Valley, expanding my vinyl record collection, or tinkering with a home automation project. I'm based in <a href="https://en.wikipedia.org/wiki/Vancouver,_Washington" target="_blank">Vancouver, Washington</a> with my wife. Find us at a local trivia night training for Jeopardy, or searching for our next great slice of pizza.</p>
                <p class="text-h5 full-width font-mono">Today, I'm learning full-stack web development through <a href="https://www.theodinproject.com/" target="_blank"> The Odin Project</a> while building this site, working on some <button class="text-h5 text-link" id="open-projects-view">personal projects</button> and searching for my next role.</p>
                <p class="text-h5 full-width font-mono">Connect with me on <a href="https://www.linkedin.com/in/frankie-j-costa/" target="_blank">LinkedIn</a>.</p>
                <p class="signature font-mono text-h5">-Frankie</p>
            </div>
        </section>
        <section class="full-width flex-column flex-align-center gap-md" id="values-section">
            <div class="flex-column flex-align-center gap-lg page-max-width">
                <h1 class="text-h1 full-width centered font-mono">My values</h1>
                <p class="text-h4 centered font-mono">These are a few principles that shape how I think and approach my work.</p>
                <div class="flex-row gap-xl flex-align-stretch justify-center flex-wrap" id="values-container">
                    ${displayValuesContent()}
                </div>
            </div>
        </section>
                    `;
    typedInstances.forEach(t => t.destroy());
    typedInstances = [];
    contentContainer.innerHTML = content;

    typedInstances.push(new Typed('#what-am-i', {
        strings: ['product manager','product owner', 'product leader', 'product builder'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 3000,
        loop: true,
        showCursor: false
    }));

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

    typedInstances.push(new Typed('#typed-text', {
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
    }));

    const projectsLink = document.querySelector('#open-projects-view');
    projectsLink.addEventListener('click', (e) => {
        displayProjectsContent();
        window.scrollTo(0,0);
        document.querySelectorAll('.nav-button-container button').forEach(btn => btn.classList.remove('selected'));
        document.querySelector('#projects-btn').classList.add('selected');
    })
}