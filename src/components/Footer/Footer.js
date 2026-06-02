// Group member names
const memberNames = ['Abdulkareem', 'Amirat', 'Ayomide', 'Gbeminiyi', 'Gift',
 'John', 'Mariam', 'Rehoboth', 'Uchechi', 'Victor'];

// Function to display names
function displayNames() {
  const nameContainer = document.getElementById('memberNames');
  
  nameContainer.innerHTML = memberNames
    .map(name => `<span class="popup-name">${name}</span>`)
    .join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.getElementById('aboutBtn');
  const aboutPopup = document.getElementById('aboutPopup');

  // Display initial names
  displayNames();

  // Toggle popup on click
  aboutBtn.addEventListener('click', () => {
    aboutPopup.classList.toggle('active');
  });
});
