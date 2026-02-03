document
  .querySelector(".dropdown-header")
  .addEventListener("click", function () {
    this.closest(".dropdown").classList.toggle("open");
  });
