window.addEventListener("load", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.4}s`;
        el.classList.add('fade-in-active');
    });

    const serviceItems = document.querySelectorAll('.service-item');
    const projectItems = document.querySelectorAll('.project-item');

    serviceItems.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.3}s`;
        el.classList.add('slide-in');
    });

    projectItems.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.3}s`;
        el.classList.add('slide-in');
    });
});
