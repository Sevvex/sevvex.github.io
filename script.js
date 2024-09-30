window.addEventListener("load", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((el, index) => {
        gsap.to(el, { duration: 1, opacity: 1, delay: index * 0.3 });
    });

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((el, index) => {
        gsap.from(el, { duration: 0.5, opacity: 0, y: 20, delay: index * 0.2 });
    });

    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((el, index) => {
        gsap.from(el, { duration: 0.5, opacity: 0, y: 20, delay: index * 0.2 });
    });

    const buttons = document.querySelectorAll('.animate-button');
    buttons.forEach((btn) => {
        gsap.from(btn, { duration: 0.5, scale: 0.85, opacity: 0, y: 10 });
    });

    const textElements = document.querySelectorAll('.animate-text');
    textElements.forEach((text, index) => {
        gsap.from(text, { duration: 0.5, opacity: 0, y: 20, delay: index * 0.2 });
    });
});
