document.addEventListener('DOMContentLoaded', () => {
    // Selects the element with the class 'soundboard' where buttons will be added
    const soundboard = document.querySelector('.soundboard');
    // Array containing objects that hold the name and file path of each sound
    const audioFiles = [
        { name: 'Cat', file: "cat.mp3" },
        { name: 'Door', file: 'door.mp3' },
        { name: 'Laugh', file: 'haha.mp3' },
        { name: 'Rizz', file: 'rizz.mp3' },
        { name: 'Scream', file: 'scream.mp3' },
        { name: 'Sad', file: 'cry.mp3' },
        { name: 'Boom', file: 'boom.mp3' },
        { name: 'Brazil', file: 'brazil.mp3' },
        { name: 'France', file: 'france.mp3' },
        { name: 'Philippines', file: 'ph.mp3' },
    ];

    let currentSound = null; // Variable to store the currently playing audio

    // Loop through each audio file object in the array
    audioFiles.forEach(audio => {

         // Create a button element for each sound
        const button = document.createElement('button');
        button.classList.add('sample-button');// A CSS class for styling
        button.textContent = audio.name;// Set the button text to the sound name

        // Create a new Audio object with the file path, basically the actual directory of the audio files
        const sound = new Audio(`/Users/macbook/HTML NEW/Day 1/Chapter5/${audio.file}`);

        // Add a click event listener to play the corresponding sound
        button.addEventListener('click', () => {
            // If there is already a sound playing, pause and reset it
            if (currentSound) {
                currentSound.pause(); // Pause the current sound
                currentSound.currentTime = 0; // Reset it to the beginning
            }
            // Reset and play the new sound
            sound.currentTime = 0;
            sound.play();
            currentSound = sound; // Update the currently playing sound
        });
        // Append the buttons to the soundboard container in the HTML
        soundboard.appendChild(button);
    });
});