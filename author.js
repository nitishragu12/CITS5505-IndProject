// Retrieve the back button element by its ID
const backButton = document.getElementById('backButton');

// Listen for click events on the back button to navigate to the home page
backButton.addEventListener('click', function() {
    window.location.href = 'index.html'; // Navigate back to the home page
});

// Wait until the entire HTML document has been fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve all elements with the class "skill"
    var skills = document.querySelectorAll(".skill");

    // Add mouseover and mouseout event listeners to each skill element
    skills.forEach(function(skill) {
        skill.addEventListener("mouseover", function() {
            var skillId = this.getAttribute("id"); // Get the ID of the hovered skill
            showSkillInfo(skillId); // Show information for the hovered skill
        });

        skill.addEventListener("mouseout", function() {
            hideSkillInfo(); // Hide skill information when mouse is out
        });
    });

    // Display skill information based on the provided skill ID
    function showSkillInfo(skillId) {
        var skillInfo = document.getElementById("skill-info"); // Get the skill-info element
        // Update the text content of skill-info based on skill ID
        switch(skillId) {
            case "html":
                skillInfo.textContent = "Started learning HTML this year so I am a beginner in this language";
                break;
            case "css":
                skillInfo.textContent = "I love CSS because it involves designing the webpage...";
                break;
            case "javascript":
                skillInfo.textContent = "Fairly new to learning JavaScript so I'm still getting the hang of it";
                break;
            case "python":
                skillInfo.textContent = "Having done a fair amount of Python projects...";
                break;
            default:
                skillInfo.textContent = "Skill information not available.";
        }
        skillInfo.style.display = "block"; // Make the skill-info element visible
    }

    // Hide the skill information display
    function hideSkillInfo() {
        var skillInfo = document.getElementById("skill-info");
        skillInfo.style.display = "none"; // Hide the skill-info element
    }
});
