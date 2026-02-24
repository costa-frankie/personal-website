import data from './changelog.json';

export function displayChangelogContent() {
    const container = document.querySelector('#content');

    const releasesHtml = data.releases.map(release => {
        const companyText = release.company ? ` @ ${release.company}` : '';

        const detailsHtml = release.details.map(section => `
            <div class="flex-column flex-align-start gap-sm">
                <h5 class="upper bold">${section.heading}</h5>
                <ul class="changelog-items readable">
                    ${section.items.map(item => `<li class="padding-left-xl relative">${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');

        let status = release.status;
        if ( release.status === "Live" ) {
            status = `<span class="lozenge success">${release.status}</span>`;
        }
        else if (release.status !== undefined) {
            status = `<span class="lozenge error">${release.status}</span>`; 
        }

        else status = "";
        return `
            <div class="flex-column flex-align-start gap-md border-l-accent padding-left-xl">
                <div class="changelog-header flex-column gap-md">
                    <div>
                        <span class="text-h1 text-accent font-mono bold">v${release.version}</span>
                        <h3 class="text-h4">${release.title}${companyText}</h3>
                    </div>
                    <div class="flex-row gap-md flex-align-center">
                        <span class="released">${release.released}</span>${status}
                    </div>
                </div>
                ${detailsHtml}
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section class="flex-column flex-align-center" id="changelog-container">
            <h1 class="content-title pin-left">Changelog</h1>
            <div class="summary-banner info">
                    <p>I originally planned this as a traditional web-based resume, but pivoted to instead reflect on myself as a "product". This changelog frames my career journey as software releases: what I achieved, improvements I made, bugs I fixed along the way, and known issues I'm still working on.</p>
                </div>
            <div class="flex-column flex-align-center gap-3xl" id="changelog-list">
                ${releasesHtml}
            </div>    
            
        </section>
    `;
}
