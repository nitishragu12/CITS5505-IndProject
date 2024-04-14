// Show or hide the back to top button based on scroll position
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // If scroll position is greater than 20 pixels from the top
    if (scrollPosition > 20) {
        // Show the back to top button
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        // Hide the back to top button
        document.getElementById('backToTopBtn').style.display = 'none';
    }
});

// Smooth scroll to a section on button click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('jumpButton').addEventListener('click', function() {
        // Scroll smoothly to the 'startLearning' section
        document.getElementById('startLearning').scrollIntoView({ behavior: 'smooth' });
    });
});
