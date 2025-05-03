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
