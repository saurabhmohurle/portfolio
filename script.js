// script.js

// Image slider logic
const sliders = document.querySelectorAll('.project-container');

sliders.forEach((slider) => {
  const images = slider.querySelectorAll('.project-card');
  let index = 0;

  const showImages = () => {
    images.forEach((img, i) => {
      img.style.transform = 'scale(1)';
    });
    if (images[index]) images[index].style.transform = 'scale(1.2)';
  };

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '<';
  prevBtn.className = 'arrow-btn';
  slider.parentElement.insertBefore(prevBtn, slider);

  const nextBtn = document.createElement('button');
  nextBtn.textContent = '>';
  nextBtn.className = 'arrow-btn';
  slider.parentElement.appendChild(nextBtn);

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    slider.scrollTo({ left: images[index].offsetLeft - 100, behavior: 'smooth' });
    showImages();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    slider.scrollTo({ left: images[index].offsetLeft - 100, behavior: 'smooth' });
    showImages();
  });

  showImages();
});
