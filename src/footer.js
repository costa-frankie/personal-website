export function displayFooterContent() {

    const footerContainer = document.querySelector('#the-footer');
    
    footerContainer.innerHTML = `
        <div class="footer-copyright inline-flex gap-xs">
            <p class="balance-wrap color-on-brand pin-bottom">Created in 2026 by Frankie Costa in the Pacific Northwest </p><span class="material-symbols-outlined inline color-on-brand">forest</span>
        </div>`
}
