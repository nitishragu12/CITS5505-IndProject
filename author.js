// Get the button element
const backButton = document.getElementById('backButton');

// Add a click event listener to the button
backButton.addEventListener('click', function() {
    // Navigate back to the home page
    window.location.href = 'index.html'; // Replace 'index.html' with the actual file name of your home page
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all skill elements
    var skills = document.querySelectorAll(".skill");

    // Loop through each skill element
    skills.forEach(function(skill) {
        // Add mouseover event listener
        skill.addEventListener("mouseover", function() {
            // Get the skill id
            var skillId = this.getAttribute("id");
            // Display skill information based on id
            showSkillInfo(skillId);
        });

        // Add mouseout event listener
        skill.addEventListener("mouseout", function() {
            // Hide skill information
            hideSkillInfo();
        });
    });

    // Function to display skill information
    function showSkillInfo(skillId) {
        // Get the skill-info element
        var skillInfo = document.getElementById("skill-info");
        // Update skill information based on skill id
        switch(skillId) {
            case "html":
                skillInfo.textContent = "Started learning HTML this year so I am a beginner in this language ";
                break;
            case "css":
                skillInfo.textContent = "I love CSS because it involves designing the webpage and making it more beautiful hence making front-end my favorite part of the full-stack process";
                break;
            case "javascript":
                skillInfo.textContent = "Fairly new to learning JavaScript so I'm still getting the hang of it";
                break;
            case "python":
                skillInfo.textContent = "Having done a fair amount of Python projects, I believe I'm fairly proficient in this language";
                break;
            default:
                skillInfo.textContent = "Skill information not available.";
        }
        // Show the skill-info element
        skillInfo.style.display = "block";
    }

    // Function to hide skill information
    function hideSkillInfo() {
        // Hide the skill-info element
        var skillInfo = document.getElementById("skill-info");
        skillInfo.style.display = "none";
    }
});
