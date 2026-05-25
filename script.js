document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation usando IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    // Seleciona todos os elementos com a class 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});