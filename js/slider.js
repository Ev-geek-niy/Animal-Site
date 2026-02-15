document.querySelector(".slider-btn.prev").addEventListener("click", prevSlide);
document.querySelector(".slider-btn.next").addEventListener("click", nextSlide);
// document.addEventListener("DOMContentLoaded", autoplay)

const sliderFileInput = document.querySelector('.slider-add-image-btn')
sliderFileInput.onchange = (e) => addImage(e.target.files[0]);

const sliderCarousel = document.querySelector('.slider-carousel');
let slides = null;
let sliderCounter = null;
let dots = null;

document.addEventListener('DOMContentLoaded', () => setupSlider())

function setupSlider() {
  slides = [...document.querySelectorAll(".slide")];
  sliderCounter = document.querySelector(".slider-counter");

  sliderCounter.innerHTML = "";
  slides.forEach(slide => {
    createSliderDot(sliderCounter)
  })

  dots = document.querySelectorAll(".dot");
  dots[0].classList.add("active");
}

function prevSlide() {
  const currentSlideIndex = slides.findIndex(slide => slide.classList.contains("active"))
  const currentSlide = slides[currentSlideIndex];

  const prevSlideIndex = currentSlideIndex === 0
      ? slides.length - 1
      : currentSlideIndex - 1;
  const prevSlide = slides[prevSlideIndex];

  prevSlide.classList.add("active");
  dots[prevSlideIndex].classList.add("active");

  currentSlide.classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");
}

function nextSlide() {
  const currentSlideIndex = slides.findIndex(slide => slide.classList.contains("active"))
  const currentSlide = slides[currentSlideIndex];

  const nextSlideIndex = currentSlideIndex === slides.length - 1
      ? 0
      : currentSlideIndex + 1;
  const nextSlide = slides[nextSlideIndex];

  nextSlide.classList.add("active");
  dots[nextSlideIndex].classList.add("active");

  currentSlide.classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");
}

function createSliderDot(counterDiv) {
  counterDiv.insertAdjacentHTML("beforeend", `<div class="dot"></div>`);
}

function autoplay() {
  setInterval(() => nextSlide(), 3000);
}

function addImage(file) {
  const imageUrl = URL.createObjectURL(file);

  sliderCarousel.insertAdjacentHTML("beforeend", `
    <div class="slide">
        <img src=${imageUrl}
             alt="Ваше изображение"/>
    </div>`);
  setupSlider()
}