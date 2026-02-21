let currentModalId = null;
const blackout = document.querySelector(".blackout");
const body = document.querySelector("body");

document.querySelectorAll(".modal-btn").forEach(modal => {
  modal.addEventListener("click", function () {
    openModal(modal.dataset.id);
  });
})

document.querySelectorAll(".btn-close").forEach(btn => {
  btn.addEventListener("click", function () {
    closeModal()
  })
})

function openModal(modalId) {
  currentModalId = modalId;
  document.querySelector(`#${currentModalId}`).classList.add("active");
  blackout.classList.add("active");
  body.classList.add("no-scroll");
  blackout.addEventListener("click", handleBodyClick);
}

function handleBodyClick(event) {
  const modal = document.querySelector(`#${currentModalId}`);
  if (modal.contains(event.target)) return;
  closeModal();
}

function closeModal() {
  document.querySelector(`#${currentModalId}`).classList.remove("active");
  blackout.classList.remove("active");
  body.classList.remove("no-scroll");
  blackout.removeEventListener("click", handleBodyClick);
}
