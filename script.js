const container = document.getElementById("rain-container");

for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div");
    drop.className = "raindrop";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = 1.5 + Math.random() * 1.5 + "s"; // 1.5s ile 3s arası
    drop.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(drop);
}

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    } else {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
});

// Progress bar
const progress = document.getElementById("progress");
audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
});
