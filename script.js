let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = document.querySelectorAll('.carousel-slide img').length;
  
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -100 * currentIndex + '%';
  slides.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Automatically advance to the next slide every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);
