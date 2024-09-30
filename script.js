window.addEventListener("load", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`;
        el.classList.add('fade-in-active');
    });
});
