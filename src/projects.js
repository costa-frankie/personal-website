import data from './projects.json';

export function displayProjectsContent() {
    const container = document.querySelector('#content');

    const projectsHtml = data.projects.map(project => {
        const summaryHtml = project.summary.map(section => `
            <div class="project-section">
                <span class="section-heading">${section.heading}</span>
                <p>${section.content}</p>
            </div>
        `).join('');

        return `
            <div class="project-card">
                <div class="project-card-collapsed-view">
                    <div class="project-card-header">
                        <div class="project-icon-container">
                            <span class="material-symbols-outlined project-icon">${project.icon}</span>
                        </div>
                        <h2 class="project-title">${project.title}</h2>
                        <span class="material-symbols-outlined project-expand-icon project-expand-icon--more pin-right">unfold_more</span>
                        <span class="material-symbols-outlined project-expand-icon project-expand-icon--less pin-right">unfold_less</span>
                    </div>
                    <div class="project-tags">
                            ${project.tags.filter(t => t).map(tag => `<span class="lozenge default-lozenge">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="project-content readable">
                    <div class="project-summary ">
                        ${summaryHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section class="projects-container">
            <h1 class="content-title">Projects</h1>
            <div class="summary-banner flex-column gap-md highlight">
                <h3>FEATURED PROJECTS</h3>
                <p>I work on several personal projects as a way to sharpen my web development skills. Below are some of the projects I've designed and built that showcase some of my interests, ideas and technical accomplishments.</p>
            </div>
            <div class="projects-list">
                ${projectsHtml}
            </div>
        </section>
    `;

    container.querySelectorAll('.project-card-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.project-card');
            const isExpanded = card.classList.contains('expanded');
            container.querySelectorAll('.project-card').forEach(c => c.classList.remove('expanded'));
            if (!isExpanded) {
                card.classList.add('expanded');
            }
        });
    });
}
