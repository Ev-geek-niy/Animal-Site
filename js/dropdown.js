document.querySelectorAll(".dropdown-header").forEach(function (button) {
  button.addEventListener("click", function () {
    const dropdown = this.closest(".dropdown");
    dropdown.classList.toggle("open");
  });
});
