// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Scroll to top function
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
};
