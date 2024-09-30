window.addEventListener("load", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        gsap.to(el, { duration: 1, opacity: 1, delay: index * 0.3 });
    });

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((el, index) => {
        gsap.from(el, { duration: 0.7, opacity: 0, y: 20, delay: index * 0.3 });
    });

    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((el, index) => {
        gsap.from(el, { duration: 0.7, opacity: 0, y: 20, delay: index * 0.3 });
    });
});
