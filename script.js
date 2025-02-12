document.addEventListener("DOMContentLoaded", function () {
    // Reveal Surprise
    document.getElementById("reveal-btn").addEventListener("click", function () {
        document.getElementById("surprise-content").style.display = "block";
    });

    // Background Music Control
    const music = document.getElementById("background-music");
    const musicControl = document.getElementById("music-control");

    musicControl.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicControl.textContent = "🎵 Pause Music";
        } else {
            music.pause();
            musicControl.textContent = "🎵 Play Music";
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});