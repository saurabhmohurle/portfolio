function slide(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelector(".slides");
  const slideWidth = slides.children[0].clientWidth + 16; // include margin
  const currentTransform = getComputedStyle(slides).transform;
  const matrix = new WebKitCSSMatrix(currentTransform);
  const currentX = matrix.m41;
  const newX = currentX - direction * slideWidth;
  slides.style.transform = `translateX(${newX}px)`;
}
