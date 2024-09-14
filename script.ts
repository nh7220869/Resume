// Get the "Skills" section and button
const skillsSection = document.getElementById('skills');
const toggleButton = document.getElementById('toggle-skills');

// Add a click event to the button
toggleButton?.addEventListener('click', () => {
  if (skillsSection?.style.display === 'none') {
    skillsSection.style.display = 'block';  // Show the skills section
  } else {
    skillsSection!.style.display = 'none';  // Hide the skills section
  }
});
