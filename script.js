document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const password = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const errorMsg = document.getElementById("errorMsg");
  const canvas = document.getElementById("confetti");

  if (!form || !password || !togglePassword || !canvas) {
    console.error("Ada element yang belum ada di HTML!");
    return;
  }

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];

  // Toggle password
  togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.classList.toggle("active");
  });

  // Submit login
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim().toLowerCase();
    const pass = password.value.trim();

    console.log("Login dicoba:", username, pass); // DEBUG

    if (username === "suci sayang" && pass === "123") {
      errorMsg.textContent = "";
      alert("🎉 Selamat! Login berhasil 🎂");

      startConfetti();

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      errorMsg.textContent = "Ups! Username atau password salah 😢";
    }
  });

  function startConfetti() {
    confetti = [];
    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 3 + 1,
      });
    }
    animate();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c, i) => {
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
      ctx.fillRect(c.x, c.y, c.size, c.size);

      c.y += c.speed;

      if (c.y > canvas.height) {
        confetti[i].y = 0;
        confetti[i].x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animate);
  }
});
