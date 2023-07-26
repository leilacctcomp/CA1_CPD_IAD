// Add event listeners to play buttons
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const gameTitle = button.parentElement.querySelector('h3').textContent;
    // Add game logic here, based on the selected game
    console.log(`Starting ${gameTitle}...`);
  });
});


// Sample data for the progress
let currentPoints = 0;
const maxPoints = 1000;

// Update the game progress indicator
function updateProgress(points) {
  const progressBar = document.getElementById('progressBar');
  const levelElement = document.getElementById('level');
  const pointsElement = document.getElementById('points');

  const percentage = (points / maxPoints) * 100;
  progressBar.style.width = percentage + '%';

  // Update the level and points
  levelElement.textContent = `Level 1`; // You can dynamically calculate the level based on points
  pointsElement.textContent = `Points: ${points}`;
}

// Simulate game progress
function simulateGameProgress() {
  setInterval(() => {
    // Increment points (or calculate based on user actions)
    currentPoints += 50;
    if (currentPoints >= maxPoints) {
      currentPoints = maxPoints;
    }
    //This is gonna updates the progress bar
    /**When the game is implemented, the update of the progress is gonna occur on the user gameplay.
     * The game implementation will require more complex game logic and interactions with users to update the progress
     *  dynamically, not sure will have time to implement it now */
    updateProgress(currentPoints);
  }, 1000); // Update the progress every second (for demonstration purposes)
}

simulateGameProgress();
