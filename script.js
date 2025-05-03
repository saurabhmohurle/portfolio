// Automatic image slider for projects
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.project-slider');

  sliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
      images.forEach((img, i) => {
        img.style.display = i === currentIndex ? 'inline-block' : 'none';
      });
      currentIndex = (currentIndex + 1) % images.length;
    }

    showNextImage();
    setInterval(showNextImage, 3000);
  });

  // Add glow effect on hover
  const hoverElements = document.querySelectorAll(
    'nav a, .skill-item, .project, .timeline, .contact button'
  );

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.boxShadow = '0 0 10px #00f2fe';
    });

    el.addEventListener('mouseleave', () => {
      el.style.boxShadow = 'none';
    });
  });
});
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
const texts = [
  "🚀 Turning ideas into reality with code, design, and relentless curiosity.",
  "🧠 Code. Create. Conquer. That’s how I craft digital experiences."
];

const typingElement = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 2000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500); // Pause before typing next
  } else {
    setTimeout(type, isDeleting ? 40 : 60); // Typing speed
  }
}

document.addEventListener("DOMContentLoaded", type);
document.addEventListener("DOMContentLoaded", function () {
  const aboutText = document.getElementById("about-text");

  // Split the content by <br>
  const rawLines = aboutText.innerHTML.split(/<br\s*\/?>/i);

  // Clear the paragraph content
  aboutText.innerHTML = "";

  // Create spans for each word, preserving lines
  rawLines.forEach((line, lineIndex) => {
    const lineSpan = document.createElement("div");
    lineSpan.className = "line";
    const words = line.trim().split(" ");
    lineSpan.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
    aboutText.appendChild(lineSpan);
  });

  const allLines = aboutText.querySelectorAll(".line");

  let lineIndex = 0;
  let wordIndex = 0;

  function animateWord() {
    // Clear all active classes
    allLines.forEach(line =>
      line.querySelectorAll("span").forEach(span => span.classList.remove("active"))
    );

    const currentLine = allLines[lineIndex];
    const spans = currentLine.querySelectorAll("span");

    if (spans[wordIndex]) {
      spans[wordIndex].classList.add("active");
    }

    wordIndex++;
    if (wordIndex >= spans.length) {
      wordIndex = 0;
      lineIndex = (lineIndex + 1) % allLines.length;
    }
  }

  setInterval(animateWord, 400);
});
const carousel = document.getElementById('carousel3d-project1');
const imgs = carousel.getElementsByTagName('img');
let current = 0;

function update3DCarousel() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    imgs[i].style.transform = "scale(0)";
    imgs[i].style.zIndex = 0;
  }

  const prev = (current - 1 + imgs.length) % imgs.length;
  const next = (current + 1) % imgs.length;

  imgs[prev].style.opacity = 0.6;
  imgs[prev].style.transform = "translateX(-220px) rotateY(40deg) scale(0.9)";
  imgs[prev].style.zIndex = 1;

  imgs[current].style.opacity = 1;
  imgs[current].style.transform = "translateX(0) rotateY(0deg) scale(1)";
  imgs[current].style.zIndex = 2;

  imgs[next].style.opacity = 0.6;
  imgs[next].style.transform = "translateX(220px) rotateY(-40deg) scale(0.9)";
  imgs[next].style.zIndex = 1;
}

function rotateCarousel(dir) {
  current = (current + dir + imgs.length) % imgs.length;
  update3DCarousel();
}

setInterval(() => rotateCarousel(1), 4000);
update3DCarousel();


// Simple Image Switcher for Project 2
let switcherIndex = 0;
function switchImage(dir, id) {
  const container = document.querySelector('.image-switcher');
  const imgs = container.querySelectorAll('img');
  imgs[switcherIndex].classList.remove('active');
  switcherIndex = (switcherIndex + dir + imgs.length) % imgs.length;
  imgs[switcherIndex].classList.add('active');
}
setInterval(() => switchImage(1, 'switcher'), 5000);
