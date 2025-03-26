//Make sure that all contents are loaded, hence the 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {
    const rgbDisplay = document.getElementById('rgb');// Displays the target RGB color
    const colorsDisplay = document.getElementById('colors');// Contains the color options
    const resultDisplay = document.getElementById('result');// Displays game messages (correct/wrong)
    const livesDisplay = document.getElementById('lives');// Displays the remaining lives
    const scoreDisplay = document.getElementById('score');// Displays the current score
    const replayButton = document.getElementById('replay');// Replay button (will only show when necessary)

    // Variables to store game state
    let correctRgb; // Holds the correct RGB color for the round
    let lives = 3;// Number of lives
    let score = 0;// Starting score

    // Function to get a random RGB color 
    function randomRgb() {
        const r = Math.floor(Math.random() * 256);// Random value for Red (0-255)
        const g = Math.floor(Math.random() * 256);// Random value for Green (0-255)
        const b = Math.floor(Math.random() * 256);// Random value for Blue (0-255)
        return `RGB(${r}, ${g}, ${b})`;// Return formatted RGB string
    }
    // Function to start a new round
    function newRound() {
        colorsDisplay.innerHTML = '';// Clear previous color choices
        correctRgb = randomRgb();// Call the function and generate a new correct RGB color
        rgbDisplay.textContent = correctRgb;// Display the correct RGB color for the round

        // Generate an array of three color options (one correct, two random)
        const options = [correctRgb, randomRgb(), randomRgb()];
        options.sort(() => Math.random() - 0.5);// Shuffle the color options randomly

         // Create a color selection button for each option
        options.forEach(color => {  
            const colorDiv = document.createElement('div');// Create a new div element
            colorDiv.classList.add('color');// Add a CSS class for styling
            colorDiv.style.backgroundColor = color;// Set the background color
            colorDiv.addEventListener('click', () => check(color)); // Add click event to check the selection
            colorsDisplay.appendChild(colorDiv);// Append the color div to the color container
        });
    }
     // Check if the selected color is correct
    function check(selected) {
        if (selected === correctRgb) {// If the player selects the correct color
            resultDisplay.textContent = 'Correct!';// Display "Correct!" message
            score++;// Increase the score
            scoreDisplay.textContent = `Score: ${score}`;// Update the score display
            newRound();// Start a new round
        } else {// If the selected color is incorrect
            resultDisplay.textContent = 'Wrong!';// Display "Wrong!" message
            lives--;// Decrease the number of lives
            livesDisplay.textContent = `Lives: ${lives}`;// Update the lives display
            if (lives === 0) endGame();// If no more lives, end the game
        }
    }
    // Function to handle game over
    function endGame() {
        resultDisplay.textContent = `Game Over! Score: ${score}`;// Show final score
        colorsDisplay.innerHTML = '';// Remove all color choices
        replayButton.style.display = 'block';// Show the replay button
    }
    // Function to restart the game
    function restart() {
        lives = 3;// Reset lives to 3
        score = 0;// Reset score to 0
        livesDisplay.textContent = 'Lives: 3';// Update lives display
        scoreDisplay.textContent = 'Score: 0';// Update score display
        resultDisplay.textContent = '';// Clear result message
        replayButton.style.display = 'none';// Hide replay button
        newRound();// Start a new game round
    }
    // Add click event listener to the replay button to restart the game
    replayButton.addEventListener('click', restart);
    newRound();
});