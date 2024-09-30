window.addEventListener("load", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((el, index) => {
        gsap.to(el, { duration: 1, opacity: 1, delay: index * 0.3 });
    });

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((el, index) => {
        gsap.from(el, { duration: 0.6, opacity: 0, y: 40, delay: index * 0.3, ease: "power3.out" });
    });

    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((el, index) => {
        gsap.from(el, { duration: 0.6, opacity: 0, y: 40, delay: index * 0.3, ease: "power3.out" });
    });

    const buttons = document.querySelectorAll('.animate-button');
    buttons.forEach((btn) => {
        gsap.from(btn, { duration: 0.5, scale: 0.9, opacity: 0, ease: "elastic.out(1, 0.5)", delay: 0.3 });
    });

    const textElements = document.querySelectorAll('.animate-text');
    textElements.forEach((text, index) => {
        gsap.from(text, { duration: 0.6, opacity: 0, y: 30, delay: index * 0.4, ease: "power3.out" });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});
