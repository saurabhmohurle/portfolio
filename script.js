document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.project-img');
  const centerImg = document.querySelector('.project-img.center');

  images.forEach(img => {
      img.addEventListener('mouseover', () => {
          img.style.transform = 'scale(1.2)';
      });

      img.addEventListener('mouseout', () => {
          img.style.transform = 'scale(1)';
      });
  });

  // Add sliding functionality and arrow buttons
});
