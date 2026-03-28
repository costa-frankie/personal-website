export function displayFooterContent() {
    const footer = document.createElement('footer');
    footer.id = "the-footer";
    footer.classList.add("full-width");
    footer.innerHTML = `
        <div class="flex-column justify-end flex-align-center padding-top-xl padding-bottom-md pin-bottom full-width footer-bg">
        </div>
        <div class="flex-row flex-align-center justify-center gap-xs full-width footer-content-bg">
            <p class="balance-wrap color-on-brand padding-vert-lg pin-bottom">Created in 2026 by Frankie Costa in the Pacific Northwest </p><span class="material-symbols-outlined inline color-on-brand">forest</span>
        </div>
    `;

    document.body.appendChild(footer);
}
