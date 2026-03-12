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
            <div class="flex-column gap-sm theme-nav overflow-hidden" data-bookId="${book.index}">
                <img src="${resolveImage(book.image)}" class="book-image full-width aspect-2-3 object-cover vertical-align-middle flex-align-self-center" alt="Cover of ${book.title}" />
                <div class="flex-column gap-sm padding-sm">
                    <p class="bold">${book.title}</p>
                    <p class="muted text-slightly-smaller">by ${book.author}</p>
                </div>
            </div>
        `).join('');

    container.innerHTML = `
        <section class="flex-column page-max-width">
            <h1 class="content-title full-width">My Bookshelf</h1>
            <div class="banner banner--info padding-md full-width margin-bottom-xl border-2">
                <p class="text-p">Reading helps me understand the world and its complex systems. Below are some books I've read. They range from permaculture to neuroscience to fantasy and beyond. They all taught me how to think differently and view things from a different perspective.</p>
            </div>
            <div class="grid gap-md" id="bookshelf-container">
                ${bookshelfHTML}
            </div>
        </section>
    `;

    container.querySelectorAll('[data-bookId]').forEach((el, i) => {
        const url = data.books[i].url;
        if (url) {
            el.style.cursor = 'pointer';
            el.addEventListener('click', () => window.open(url, '_blank'));
        }
    });
}
