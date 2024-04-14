

// Show or hide the back to top button based on scroll position
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20) {
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var apiKey = 'KLE1WjD3kxGD8pMu5ZAfGSGUdcdbykA0ShNLxARf'; // Use your actual API key
    var url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var imageElement = document.getElementById('nasaImage');
            var descriptionElement = document.getElementById('imageDescription');

            // Modify source based on your new dimensions or criteria
            imageElement.src = data.url;
            imageElement.alt = 'NASA Image of the Day';
            imageElement.style.width = '100px'; // Control size directly if needed
            imageElement.style.height = '100px';
            descriptionElement.textContent = data.explanation;
        })
        .catch(error => console.error('Error fetching the NASA Image of the Day:', error));
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('jumpButton').addEventListener('click', function() {
        document.getElementById('startLearning').scrollIntoView({ behavior: 'smooth' });
    });
});

