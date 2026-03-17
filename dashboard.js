// =========================
// 🔄 ELEMENT
// =========================
const images = document.querySelectorAll(".parallax");
const romanticBox = document.getElementById("romanticBox");
const romanticText = document.getElementById("romanticText");
const cake = document.getElementById("cake");
const music = document.getElementById("birthdayMusic");
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
const title = document.getElementById("title");

// =========================
// 👤 NAMA
// =========================
const nama = "Suci Sayang 💖";
title.textContent = `🎉 Selamat Ulang Tahun ${nama} 🎂`;

// =========================
// 🎵 MUSIK FIX (ANTI BLOCK)
// =========================
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    musicStarted = true;

    music.volume = 1;
    music.play().catch(() => {
      console.log("Browser masih blok audio");
    });
  }
}

// 🔥 klik pertama di mana saja
document.addEventListener("click", startMusic, { once: true });

// =========================
// 🎢 PARALLAX
// =========================
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  images.forEach((img, index) => {
    let speed = ((index % 5) + 1) * 0.2;
    let move = Math.min(scrollY * speed * 0.05, 30);
    img.style.transform = `translateY(${move}px)`;
  });
});

// =========================
// 💖 HATI
// =========================
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// =========================
// 💌 PESAN
// =========================
const messages = [
  "Kamu itu spesial banget 💖",
  "Semoga semua impian kamu tercapai ✨",
  "Aku bersyukur bisa kenal kamu 😊",
  "Tetap jadi orang hebat ya 💕",
  "Hari ini milik kamu 🎉",
  "Hari ini adalah hari spesial kamu 🎉",
  "Selalu bersamaku yaa sayang 💖",
  "Hari ini milik kamu 🎉",
  "Hari ini milik kamu 🎉",
  "Hari ini milik kamu 🎉",
  "Hari ini milik kamu 🎉",
  "Hari ini milik kamu 🎉",
  "Hari ini milik kamu 🎉",
  "Hari ini milik kamu 🎉",
  "Hari ini milik kamu 🎉",
];

// =========================
// 🎇 CONFETTI (ONLY CLICK)
// =========================
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
let animationId;

function startConfetti() {
  confetti = [];

  for (let i = 0; i < 120; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 3 + 1,
    });
  }

  animateConfetti();

  setTimeout(() => {
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c) => {
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    c.y += c.speed;
  });

  animationId = requestAnimationFrame(animateConfetti);
}

// =========================
// 📸 CLICK FOTO
// =========================
images.forEach((img) => {
  img.addEventListener("click", () => {
    startMusic(); // 🔥 pastikan musik jalan

    romanticBox.classList.remove("hidden");

    romanticText.textContent =
      messages[Math.floor(Math.random() * messages.length)];

    cake.classList.remove("hidden");

    startConfetti();
  });
});

// =========================
// ❌ TUTUP POPUP
// =========================
function closeRomantic() {
  romanticBox.classList.add("hidden");
}

// =========================
// 📱 RESIZE
// =========================
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
