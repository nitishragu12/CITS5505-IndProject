// Get the button:
const backToTopBtn = document.getElementById('backToTopBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('loadJokeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default hyperlink behavior
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

window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}