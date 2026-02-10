import data from './changelog.json';

export function displayChangelogContent() {
    const container = document.querySelector('#content');

    const releasesHtml = data.releases.map(release => {
        const companyText = release.company ? ` @ ${release.company}` : '';

        const detailsHtml = release.details.map(section => `
            <div class="changelog-section">
                <h4 class="section-heading">${section.heading}</h4>
                <ul class="changelog-items">
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
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
            <div class="changelog-entry">
                <div class="changelog-header">
                    <div>
                        <span class="version">v${release.version}</span>
                        <h3 class="changelog-version-name">${release.title}${companyText}</h3>
                    </div>
                    <div class="metadata">
                        <span class="released">${release.released}</span>${status}
                    </div>
                </div>
                ${detailsHtml}
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section class="changelog-container">
            <h1 class="content-title">Changelog</h1>
            <div class="summary-banner">
                    <p>I originally planned this as a traditional web-based resume, but pivoted to instead reflect on myself as a "product". This changelog frames my career journey as software releases: what I achieved, improvements I made, bugs I fixed along the way, and known issues I'm still working on.</p>
                </div>
            ${releasesHtml}
        </section>
    `;
}
