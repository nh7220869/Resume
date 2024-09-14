// Get the "Skills" section and button
var skillsSection = document.getElementById('skills');
var toggleButton = document.getElementById('toggle-skills');
// Add a click event to the button
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block'; // Show the skills section
    }
    else {
        skillsSection.style.display = 'none'; // Hide the skills section
    }
});
