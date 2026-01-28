export function displayHomeContent() {
    const contentContainer = document.querySelector('#content');
    const content = `<section class="hero">
                        <h1>Dobleman's Bageri & Pastificio</h1>
                        <h2>We make fresh bread and pasta daily</h2>
                        <button>Order Online</button>
                    </section>
                    <section class="menu">
                        <h1>Today's menu</h1>
                        <div class="menu-container">
                            <button>View menu</button>
                        </div>
                    </section>`
        
    contentContainer.innerHTML = content;
}