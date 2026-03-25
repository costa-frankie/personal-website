import data from './resume.json';

export function displayResumeContent() {
    const container = document.querySelector('#content');

    const jobsHtml = data.jobs.map(job => {
        const dateRange = job.ended
            ? `${job.started} – ${job.ended}`
            : `${job.started} – Present`;

        const companyHtml = job.company
            ? `<h4 class="text-h4 font-sans muted">${job.company}</h4>`
            : '';

        const detailsHtml = job.details.map(bullet =>
            `<li class="padding-left-xl relative">${bullet}</li>`
        ).join('');

        return `
            <div class="flex-column flex-align-start gap-md theme-nav rounded padding-xl">
                <div class="resume-header flex-column gap-md">
                    <div>
                        <h3 class="text-h3 font-sans bold">${job.title}</h3>
                        ${companyHtml}
                    </div>
                    <div class="flex-row gap-md flex-align-center">
                        <span class="released">${dateRange}</span>
                        ${job.location ? `<span class="muted">${job.location}</span>` : ''}
                    </div>
                </div>
                <ul class="changelog-items readable">
                    ${detailsHtml}
                </ul>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section class="flex-column flex-align-center page-max-width flex-align-self-center" id="resume-container">
            <h1 class="content-title pin-left">Résumé</h1>
            <div class="flex-column flex-align-center gap-3xl" id="resume-list">
                ${jobsHtml}
            </div>
        </section>
    `;
}
