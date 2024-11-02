
document.addEventListener("DOMContentLoaded", function () {
    const jumpscare = document.getElementById("jumpscare");
    const scaryAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/6678");

    setTimeout(() => {
        jumpscare.classList.add("jumpscare-visible");
        scaryAudio.play();
    }, Math.random() * 5000 + 5000);
});
