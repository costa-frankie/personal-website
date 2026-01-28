export function displayAboutContent() {
    const contentContainer = document.querySelector('#content');
    const content = `<section class="hero">
                        <h1>Dobleman's Bageri & Pastificio</h1>
                        <h2>About Us</h2>
                    </section>
                    <section class="menu">
                        <h1>How it started</h1>
                        <div class="menu-container">
                            <p>Way back in 1989...</p>
                        </div>
                        <h1>How its going</h1>
                        <div class="menu-container">
                            <p>In January 2026, the idea began to gain strength in the mind of our young hero...</p>
                        </div>
                    </section>`
        
    contentContainer.innerHTML = content;
}