document.querySelector(".slider-btn.prev").addEventListener("click", prevSlide);
document.querySelector(".slider-btn.next").addEventListener("click", nextSlide);
// document.addEventListener("DOMContentLoaded", autoplay)

const sliderFileInput = document.querySelector('.slider-add-image-btn')
sliderFileInput.onchange = (e) => addImage(e.target.files[0]);

const sliderCarousel = document.querySelector('.slider-carousel');
let slides = null;
let sliderCounter = null;
let thumbnails = null;

document.addEventListener('DOMContentLoaded', () => setupSlider())

function setupSlider(startSlideIndex = 0) {
  slides = [...document.querySelectorAll(".slide")];
  sliderCounter = document.querySelector(".slider-counter");

  setupSelector(slides.findIndex(slide => slide.classList.contains('active')))
}

function setupSelector(startThumbnailIndex = 0) {
  sliderCounter.innerHTML = "";
  slides.forEach((slide, index) => {
    createThumbnail(sliderCounter, slide.firstElementChild, index)
  })

  thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach(thumbnail =>
      thumbnail.addEventListener("click", () => handleThumbnailClick(thumbnail.dataset.index))
  )

  thumbnails[startThumbnailIndex].classList.add("active");
}

function prevSlide() {
  const currentSlideIndex = slides.findIndex(slide => slide.classList.contains("active"))
  const currentSlide = slides[currentSlideIndex];

  const prevSlideIndex = currentSlideIndex === 0
      ? slides.length - 1
      : currentSlideIndex - 1;
  const prevSlide = slides[prevSlideIndex];

  prevSlide.classList.add("active");
  thumbnails[prevSlideIndex].classList.add("active");

  currentSlide.classList.remove("active");
  thumbnails[currentSlideIndex].classList.remove("active");
}

function nextSlide() {
  const currentSlideIndex = slides.findIndex(slide => slide.classList.contains("active"))
  const currentSlide = slides[currentSlideIndex];

  const nextSlideIndex = currentSlideIndex === slides.length - 1
      ? 0
      : currentSlideIndex + 1;
  const nextSlide = slides[nextSlideIndex];

  nextSlide.classList.add("active");
  thumbnails[nextSlideIndex].classList.add("active");

  currentSlide.classList.remove("active");
  thumbnails[currentSlideIndex].classList.remove("active");
}

function createThumbnail(counterDiv, imageElement, index = 0) {
  counterDiv.insertAdjacentHTML("beforeend", `
    <div class="thumbnail" data-index="${index}">
        <img class="thumbnail-img" src="${imageElement.src}"/>
    </div>`);
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

function handleThumbnailClick(index = 0) {
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
  thumbnails[index].classList.add('active');

  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}