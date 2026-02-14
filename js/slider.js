document.querySelector(".slider-btn.prev").addEventListener("click", prevSlide);
document.querySelector(".slider-btn.next").addEventListener("click", nextSlide);

const slides = [...document.querySelectorAll(".slide")];
const sliderCounter = document.querySelector(".slider-counter");

slides.forEach(slide => {
  sliderCounter.insertAdjacentHTML("beforeend", `<div class="dot"></div>`)
})

const dots = document.querySelectorAll(".dot");
dots[0].classList.add("active");

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
