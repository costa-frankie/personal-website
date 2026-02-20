import inImage from './assets/In-White.png';
import avatar from './assets/avatar-fc.png';

export function displayContactContent() {
    const contentContainer = document.querySelector('#content');
    
    const content = `
    <section class="contact-container">
        <h1 class="content-title">Contact</h1>
        <div class="contact-card-stack">
            <div class="contact-card">
                <img src="${avatar}" class="avatar col-1 shadow-small" alt="Personal photo" />
                <div class="contact-info col-2">
                    <h1 class="card-header">Frankie Costa</h1>
                    <h2 class="secondary">Product Manager</h2>
                </div>
                <div class="contact-details-list">
                    <div class="contact-detail">
                        <p><span class="material-symbols-outlined info-text">location_on</span>Based in Vancouver, WA</p>
                    </div>
                    <div class="contact-detail">
                        <p><span class="material-symbols-outlined info-text">trip</span>Currently seeking opportunities</p>
                    </div>
                    <div class="contact-detail">
                        <p><span class="material-symbols-outlined info-text">home_work</span>Open to remote or hybrid roles</p>
                    </div>
                </div>
                <div class="tag-list-container col-1-span-2">
                    <span class="lozenge default-lozenge">Product strategy</span> 
                    <span class="lozenge default-lozenge">Agile</span>  
                    <span class="lozenge default-lozenge">Scrum</span> 
                    <span class="lozenge default-lozenge">Product requirements</span>
                    <span class="lozenge default-lozenge">UX Prototyping</span> 
                    <span class="lozenge default-lozenge">Collaboration</span> 
                    <span class="lozenge default-lozenge">B2B SaaS</span>  
                    <span class="lozenge default-lozenge">Enterprise software</span>
                    <span class="lozenge default-lozenge">User research</span> 
                    <span class="lozenge default-lozenge">Roadmap planning</span>
                     
                </div>
                <div class="cta-container col-1-span-2">
                    <p class="col-1-span-2 text-centered secondary">Interested in getting in touch?</p>
                    <a href="https://www.linkedin.com/in/frankie-j-costa/" target="_blank" class="connect-btn">
                        <img src="${inImage}" width="32px" height="32px" alt="LinkedIn" />
                        <p>Connect on LinkedIn</p>
                    </a>
                </div>
            </div>
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

