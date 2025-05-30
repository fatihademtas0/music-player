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
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.src = "./images/play.png";
    } else {
        audio.play();
        playPauseBtn.src = "./images/pause.png";
    }
    isPlaying = !isPlaying;
});

// Örnek: ileri ve geri sarma (şarkı listesi yoksa sadece süreyi oynatır)
prevBtn.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

nextBtn.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

// Progress bar
const progress = document.getElementById("progress");
audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
});

const progressContainer = document.getElementById("progress-container");

progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});
