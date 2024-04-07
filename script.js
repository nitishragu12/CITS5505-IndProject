// Function to scroll back to top smoothly
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the back to top button based on scroll position
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20) {
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
});
