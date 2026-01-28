export function displayMenuContent() {
    const contentContainer = document.querySelector('#content');
    const today = new Date().toLocaleDateString();
    const content = `<section class="hero">
                        <h1>Today's Menu</h1>
                        <h2>${today}</h2>
                    </section>
                    <section class="menu">
                        <h1>Today's menu</h1>
                        <div class="menu-container">
                            <h2>Pastries</h2>
                            <ul>
                                <li>App 1</li>
                                <li>App 2</li>
                                <li>App 3</li>
                            </ul>
                            <h2>Bread</h2>
                            <ul>
                                <li>Bread 1</li>
                                <li>Bread 2</li>
                                <li>Bread 3</li>
                            </ul>
                            <h2>Pasta</h2>
                            <ul>
                                <li>Pasta 1</li>
                                <li>Pasta 2</li>
                                <li>Pasta 3</li>
                            </ul>
                            <h2>Coffee</h2>
                            <ul>
                                <li>Coffee (drip)</li>
                                <li>Espresso</li>
                                <li>Doppio</li>
                                <li>Americano</li>
                            </ul>
                        </div>
                    </section>`
        
    contentContainer.innerHTML = content;
}