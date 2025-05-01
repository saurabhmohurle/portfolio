// Lazy-load and fade-in images on scroll
const images = document.querySelectorAll('.gallery-item img');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

images.forEach(img => {
  observer.observe(img);
});