import data from './projects.json';

export function displayProjectsContent() {
    const container = document.querySelector('#content');

    const projectsHtml = data.projects.map(project => {
        const summaryHtml = project.summary.map(section => `
            <div class="project-section flex-column gap-xs padding-left-md border-l-default">
                <span class="upper bold">${section.heading}</span>
                <p class="text-p">${section.content}</p>
            </div>
        `).join('');

        return `
            <div class="project-card collapsed card flex-align-center padding-lg card--surface card--interactive">
                <div class="full-width">
                    <div class="project-card-header flex-column flex-align-start gap-md margin-bottom-md cursor-pointer">
                        <div class="flex-row gap-md space-between full-width">
                            <div class="icon-container shadow-sm">
                                <span class="material-symbols-outlined project-icon padding-sm rounded flex-row flex-align-center justify-center">${project.icon}</span>
                            </div>
                            <div class="grouped">
                                <div class="icon-container icon--interactive">
                                    <span class="material-symbols-outlined project-expand-icon muted project-expand-icon--more icon--interactive">unfold_more</span>
                                </div>
                                <div class="icon-container icon--interactive">
                                    <span class="material-symbols-outlined project-expand-icon muted project-expand-icon--less icon--interactive">close</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-column flex-align-start gap-sm">
                            <h3 class="project-title pretty-wrap text-h4 font-special">${project.title}</h3>
                            <span class="text-h5 muted readable pretty-wrap">${project.description}</span>
                        </div>
                    </div>
                    <div class="cluster">${project.tags.filter(t => t).map(tag => `<span class="tag tag--technical border-1">${tag}</span>`).join('')}</div>
                </div>
                <div class="project-content flex-column collapsed readable">
                    <div class="project-summary flex-column gap-xl">
                        ${summaryHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section class="projects-container page-max-width">
            <h1 class="content-title pin-left">Projects</h1>
            <div class="banner banner--warning flex-column gap-md full-width padding-md margin-bottom-xl" id="projects-banner">
                <h3>Featured Projects <span class="weight-normal muted">🚧 <i>Under Construction</i> 🚧</span></h3>
                <p class="text-p">I work on several personal projects as a way to sharpen my web development skills. Below are some of the projects I've designed and built that showcase some of my interests, ideas and technical accomplishments. This collection will continue to expand as my web development journey continues.</p>
            </div>
            <div class="gap-md margin-top-xl full-width" id="projects-list">
                ${projectsHtml}
            </div>
        </section>
    `;

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        const closeBtn = e.target.closest('.project-expand-icon--less');
        
        if (closeBtn) {
            e.stopPropagation();
            closeBtn.closest('.project-card').classList.replace('expanded', 'collapsed');
            return;
        }

        if (card?.classList.contains('collapsed')) {
            container.querySelectorAll('.project-card.expanded')
                .forEach(c => c.classList.replace('expanded', 'collapsed'));
            card.classList.replace('collapsed', 'expanded');
            document.querySelector('#projects-list').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            return;
        }

        if (!card) {
            container.querySelectorAll('.project-card.expanded')
                .forEach(c => c.classList.replace('expanded', 'collapsed'));
        }
    });
}
