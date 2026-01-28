export function displayContactContent() {
    const contentContainer = document.querySelector('#content');
    const content = `<section class="hero">
                        <h1>Contact</h1>
                        <h2>Email: costa.frankie@gmail.com</h2>
                    </section>
                    `;
    contentContainer.innerHTML = content;
}