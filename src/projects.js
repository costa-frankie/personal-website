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
            <div class="project-card collapsed card flex-align-center padding-xl card--surface card--interactive">
                <div class="full-width">
                    <div class="project-card-header flex-row gap-lg flex-align-center justify-start full-width margin-bottom-md cursor-pointer">
                        <div>
                            <span class="material-symbols-outlined project-icon padding-sm rounded flex-row flex-align-center justify-center">${project.icon}</span>
                        </div>
                        <h2 class="project-title pretty-wrap">${project.title}</h2>
                        <span class="material-symbols-outlined project-expand-icon muted project-expand-icon--more pin-right">unfold_more</span>
                        <span class="material-symbols-outlined project-expand-icon muted project-expand-icon--less pin-right">close</span>
                    </div>
                    <div class="cluster">
                            ${project.tags.filter(t => t).map(tag => `<span class="lozenge default-lozenge">${tag}</span>`).join('')}
                    </div>
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
        <section class="projects-container width-80">
            <h1 class="content-title pin-left">Projects</h1>
            <div class="summary-banner flex-column gap-md highlight">
                <h3>FEATURED PROJECTS</h3>
                <p>I work on several personal projects as a way to sharpen my web development skills. Below are some of the projects I've designed and built that showcase some of my interests, ideas and technical accomplishments. This collection will continue to expand as my web development journey continues.</p>
            </div>
            <div class="flex-row flex-wrap gap-xl margin-top-xl full-width flex-align-start" id="projects-list">
                ${projectsHtml}
            </div>
        </section>
    `;

    container.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('collapsed')) {
                container.querySelectorAll('.project-card.expanded').forEach(expandedCard => {
                    expandedCard.classList.remove('expanded');
                    expandedCard.classList.add('collapsed');
                });
                card.classList.add('expanded');
                card.classList.remove('collapsed');
                
            }
        });
    });

    container.querySelectorAll('.project-expand-icon--less').forEach(closeBtn => {
        closeBtn.addEventListener('click', (event) => {
            event.stopPropagation();

            const card = closeBtn.closest('.project-card');
            card.classList.remove('expanded');
            card.classList.add('collapsed');
        })
    });
}
