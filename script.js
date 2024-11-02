const board = document.getElementById('board');
const planchette = document.querySelector('.planchette');
const jumpscare = document.getElementById('jumpscare');
const historyList = document.getElementById('history-list');
const backgroundMusic = document.getElementById('background-music');
const interactionSound = document.getElementById('interaction-sound');

const responses = ["Yes", "No", "Maybe", "Ask again later"];
const questions = [];

backgroundMusic.play();

function movePlanchette(x, y) {
    planchette.style.transform = `translate(${x}px, ${y}px)`;
}

function showJumpscare() {
    jumpscare.classList.remove('jumpscare-hidden');
    setTimeout(() => {
        jumpscare.classList.add('jumpscare-hidden');
    }, 3000); // Show for 3 seconds
}

function logHistory(question, response) {
    const listItem = document.createElement('li');
    listItem.textContent = `Q: ${question} | A: ${response}`;
    historyList.appendChild(listItem);
}

board.addEventListener('click', (event) => {
    const rect = board.getBoundingClientRect();
    const x = event.clientX - rect.left - planchette.offsetWidth / 2;
    const y = event.clientY - rect.top - planchette.offsetHeight / 2;

    movePlanchette(x, y);
    interactionSound.currentTime = 0; // Reset sound
    interactionSound.play(); // Play sound effect

    // Simulate question and response
    const userQuestion = "Is anyone there?"; // Example question
    const response = responses[Math.floor(Math.random() * responses.length)];
    logHistory(userQuestion, response);

    if (response === "Yes") {
        showJumpscare();
    }
});
