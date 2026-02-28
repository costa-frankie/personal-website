import inImage from './assets/In-White.png';
import avatar from './assets/avatar-fc.png';

export function displayContactContent() {
    const contentContainer = document.querySelector('#content');
    
    const content = `
    <section class="flex-column gap-md flex-align-center width-80">
        <h1 class="content-title pin-left">Contact</h1>
        <div class="contact-card-stack relative">
            <article class="contact-card card card--surface flex-column flex-align-center gap-lg padding-xl ">
                <div class="flex-row gap-lg flex-wrap justify-center">
                    <img src="${avatar}" class="avatar shadow-sm circular" alt="Personal photo" />
                    <div class="flex-column justify-center gap-sm">
                        <div class="flex-column">
                            <h4 class="text-h4">Frankie Costa</h4>
                            <span class="text-p muted">Product Manager</span>
                        </div>
                        <a href="https://www.linkedin.com/in/frankie-j-costa/" target="_blank" class="connect-btn gap-sm">
                            <p>Connect on LinkedIn</p>
                        </a>
                    </div>                    

                </div>
                <div class="flex-column flex-align-start gap-sm">
                    <div class="muted">
                        <p class="text-p flex-row flex-align-center gap-sm"><span class="material-symbols-outlined text-info">location_on</span>Based in Vancouver, WA</p>
                    </div>
                    <div class="muted">
                        <p class="text-p flex-row flex-align-center gap-sm"><span class="material-symbols-outlined text-info">trip</span>Currently seeking opportunities</p>
                    </div>
                    <div class="muted">
                        <p class="text-p flex-row flex-align-center gap-sm"><span class="material-symbols-outlined text-info">home_work</span>Open to remote or hybrid roles</p>
                    </div>
                </div>
                <div class="cluster justify-center readable border-top-subtle padding-vert-lg">
                    <span class="lozenge default-lozenge">Product strategy</span> 
                    <span class="lozenge default-lozenge">Agile</span>  
                    <span class="lozenge default-lozenge">Scrum</span> 
                    <span class="lozenge default-lozenge">Roadmap planning</span>
                    <span class="lozenge default-lozenge">UX prototyping</span> 
                    <span class="lozenge default-lozenge">B2B SaaS</span>  
                    <span class="lozenge default-lozenge">Enterprise software</span>
                    <span class="lozenge default-lozenge">User research</span> 
                    <span class="lozenge default-lozenge">APIs</span> 
                    <span class="lozenge default-lozenge">Data visualization</span> 
                </div>
            </article>
            <div class="paper absolute" data-paper="1"></div>
            <div class="paper absolute" data-paper="2"></div>
            <div class="paper absolute" data-paper="3"></div>
            <div class="paper absolute" data-paper="4"></div>
            <div class="paper absolute" data-paper="5"></div>
            <div class="paper absolute" data-paper="6"></div>
            <div class="paper absolute" data-paper="7"></div>
            <div class="paper absolute" data-paper="8"></div>
            <div class="paper absolute" data-paper="9"></div>
            <div class="paper absolute" data-paper="10"></div>
        </div> 
    </section>`;
    contentContainer.innerHTML = content;
}

