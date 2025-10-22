const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const bgBtn = document.getElementById("bgBtn");
const content = document.getElementById("content");

// Bật/Tắt nhạc
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(err => console.log("Autoplay blocked: ", err));
        musicBtn.textContent = "Tắt nhạc";
    } else {
        music.pause();
        musicBtn.textContent = "Bật nhạc";
    }
});

// Thay đổi hình nền
const backgrounds = ['images/underwater.jpg', 'images/underwater2.png', 'images/underwater3.jpg'];
let bgIndex = 0;

bgBtn.addEventListener("click", () => {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    content.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
});
