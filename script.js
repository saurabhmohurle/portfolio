// Your JavaScript code for animations or interactions (if needed)

document.addEventListener('DOMContentLoaded', () => {
  // Example: Add smooth scrolling effect to the navbar links
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});