document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate-element');

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animation
                entry.target.classList.add('visible');
                // Stop observing after the animation starts 
                observer.unobserve(entry.target); 
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});