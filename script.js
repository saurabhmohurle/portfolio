// Scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

// Optional: Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Project image slider (basic)
const projectGallery = document.querySelectorAll('.project-gallery img');
projectGallery.forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.85)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';

    const fullImage = document.createElement('img');
    fullImage.src = src;
    fullImage.style.maxWidth = '90%';
    fullImage.style.maxHeight = '90%';
    fullImage.style.borderRadius = '10px';
    fullImage.style.boxShadow = '0 0 30px rgba(0,255,255,0.4)';
    fullImage.style.transition = 'transform 0.3s ease';
    fullImage.style.transform = 'scale(1.05)';

    overlay.appendChild(fullImage);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});
