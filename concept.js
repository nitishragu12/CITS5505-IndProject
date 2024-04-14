// Retrieve the 'back to top' button by its ID
const backToTopBtn = document.getElementById('backToTopBtn');

// Function to show/hide the 'back to top' button based on scroll position
window.onscroll = function() {
    // Show button if the user has scrolled down 20px from the top of the document
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll smoothly to the top of the document when the user clicks the 'back to top' button
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Load a random Chuck Norris joke via AJAX when the 'load joke' link is clicked
document.getElementById('loadJokeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var joke = JSON.parse(xhr.responseText);
            document.getElementById('joke').innerText = joke.value;
        }
    };
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    xhr.send();
});

// Update the width of the progress bar based on the scroll position
window.onscroll = function() {
    updateProgressBar();
};

// Calculate and update the progress bar's width as the user scrolls
function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
