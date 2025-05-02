function nextSlide(carouselId) {
  const slides = document.querySelector(`#${carouselId} .slides`);
  slides.appendChild(slides.firstElementChild);
}

function prevSlide(carouselId) {
  const slides = document.querySelector(`#${carouselId} .slides`);
  slides.prepend(slides.lastElementChild);
}
