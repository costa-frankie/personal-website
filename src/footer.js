export function displayFooterContent() {
    const footer = document.createElement('footer');
    footer.className = "flex-column justify-end flex-align-center padding-top-xl padding-bottom-md pin-bottom full-width";
    footer.id = "the-footer";
    footer.innerHTML = `
        <div class="footer-copyright inline-flex gap-xs">
            <p class="balance-wrap color-on-brand pin-bottom">Created in 2026 by Frankie Costa in the Pacific Northwest </p><span class="material-symbols-outlined inline color-on-brand">forest</span>
        </div>
    `;

    document.body.appendChild(footer);
}
