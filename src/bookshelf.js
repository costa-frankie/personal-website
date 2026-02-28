import data from './bookshelf.json';

// Import all images from book-images folder
const bookImages = require.context('./assets/book-images', false, /\.(png|jpe?g|gif|svg)$/);

// Helper to resolve image path - returns bundled asset for local paths, original URL otherwise
function resolveImage(imagePath) {
    if (imagePath.startsWith('./assets/book-images/')) {
        const filename = './' + imagePath.replace('./assets/book-images/', '');
        try {
            return bookImages(filename);
        } catch (e) {
            console.warn(`Image not found: ${imagePath}`);
            return imagePath;
        }
    }
    return imagePath;
}

export function displayBookshelfContent() {
    const container = document.querySelector('#content');

    const bookshelfHTML = data.books.map(book => /*html*/ `
            <div class="book-entry flex-column gap-sm">
                <img src="${resolveImage(book.image)}" class="book-image" alt="Cover of ${book.title}" />
                <div class="book-meta flex-column gap-sm">
                    <p class="title-label">${book.title}</p>
                    <p class="author-label">by ${book.author}</p>
                </div>
            </div>
        `).join('');

    container.innerHTML = `
        <section class="flex-column width-80">
            <h1 class="content-title full-width">My Bookshelf</h1>
            <div class="summary-banner info">
                <p>Reading allows me to more clearly understand the world and the systems that comprise it. These books range from permaculture to neuroscience to fantasy and beyond. They all taught me how to think differently and view things from a different perspective.</p>
            </div>
            <div class="bookshelf-grid">
                ${bookshelfHTML}
            </div>
        </section>
    `;

    container.querySelectorAll('.book-entry').forEach((el, i) => {
        const url = data.books[i].url;
        if (url) {
            el.style.cursor = 'pointer';
            el.addEventListener('click', () => window.open(url, '_blank'));
        }
    });
}
