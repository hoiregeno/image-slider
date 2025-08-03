document.addEventListener("DOMContentLoaded", initializeSlider);

// Select elements
const slides = document.querySelectorAll(".slide");
const slideSize = slides.length;
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Declare variables
let currentIndex = 0;
let intervalId = null;

function initializeSlider() {
  // Show first slide initially
  slides[currentIndex].classList.add("show");
  intervalId = setInterval(nextSlide, 5000);

  // Listen for click event
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}

// Define functions
function nextSlide() {
  currentIndex = (currentIndex + 1) % slideSize;
  showSlide(currentIndex);
}

function prevSlide() {
  clearInterval(intervalId);
  currentIndex = (currentIndex - 1 + slideSize) % slideSize;
  showSlide(currentIndex);
}

function showSlide(index) {
  // hide the current slide
  slides.forEach((slide) => {
    slide.classList.remove("show");
  });

  // show the next slide.
  slides[index].classList.add("show");
}
