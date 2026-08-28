// About page hero: two Typed.js rotators. Loaded only on the About page,
// after /scripts/typed.umd.js. Extracted from the old src/views/about.js.
document.addEventListener('DOMContentLoaded', () => {
    if (!window.Typed) return;

    const typedStrings = [
        { text: 'codes',       cls: 'tag--technical' },
        { text: 'designs',     cls: 'tag--design' },
        { text: 'ships',       cls: 'tag--product' },
        { text: 'prototypes',  cls: 'tag--technical' },
        { text: 'researches',  cls: 'tag--default' },
        { text: 'creates',     cls: 'tag--design' },
        { text: 'tests',       cls: 'tag--technical' },
        { text: 'analyzes',    cls: 'tag--product' },
        { text: 'listens',     cls: 'tag--default' },
        { text: 'wireframes',  cls: 'tag--design' },
    ];
    const tagClasses = ['tag--default', 'tag--design', 'tag--technical', 'tag--product'];

    new Typed('#what-am-i', {
        strings: ['product manager', 'product owner', 'product leader', 'product builder'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 3000,
        loop: true,
        showCursor: false
    });

    new Typed('#typed-text', {
        strings: typedStrings.map(s => s.text),
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: false,
        preStringTyped(arrayPos, self) {
            self.el.classList.remove(...tagClasses);
            self.el.classList.add(typedStrings[arrayPos].cls);
        }
    });
});
