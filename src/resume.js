export function displayResumeContent() {
    const contentContainer = document.querySelector('#content');
    const content = `<section class="hero">
                        <h1>Resume</h1>
                    </section>
                    `;
        
    contentContainer.innerHTML = content;
}