// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Typed.js
if (document.querySelector('#typed-text') && typeof Typed !== 'undefined') {
  new Typed('#typed-text', {
    strings: [
      "Blockchain Developer",
      "Web3 Enthusiast",
      "Smart Contract Builder",
      "Decentralized Tech Explorer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
}

// tsParticles background animation
if (typeof tsParticles !== 'undefined') {
  tsParticles.load("tsparticles", {
    particles: {
      number: { value: 80 },
      color: { value: "#a78bfa" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 4 } },
      links: {
        enable: true,
        distance: 150,
        color: "#a78bfa",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: { default: "out" }
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true,
    background: { color: "transparent" }
  });
}

// Terminal animation
document.querySelectorAll('.terminal').forEach(el => {
  if (!el.dataset.text) return;

  const text = el.dataset.text.split('\n').map(line => line.trim());
  let i = 0, j = 0, currentLine = '', fullText = '';

  function type() {
    if (i < text.length) {
      if (j < text[i].length) {
        currentLine += text[i][j];
        el.textContent = fullText + currentLine + '|';
        j++;
        setTimeout(type, 50);
      } else {
        fullText += currentLine + '\n';
        currentLine = '';
        j = 0;
        i++;
        setTimeout(type, 500);
      }
    } else {
      i = 0;
      fullText = '';
      currentLine = '';
      setTimeout(type, 1000);
    }
  }

  type();
});

// 🌙☀️ Dark/Light Mode Toggle Script
const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Load previous theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️"; // show sun in dark mode
} else {
  toggle.textContent = "🌙"; // show moon in light mode
}

// Toggle event
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggle.textContent = "☀️"; // change to sun
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "🌙"; // change to moon
    localStorage.setItem("theme", "light");
  }
});