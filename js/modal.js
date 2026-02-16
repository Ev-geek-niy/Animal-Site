let currentModalId = null;
const blackout = document.querySelector(".blackout");

document.querySelectorAll(".modal-btn").forEach(modal => {
  modal.addEventListener("click", function () {
    openModal(modal.dataset.id);
  });
})

function openModal(modalId) {
  currentModalId = modalId;
  document.querySelector(`#${currentModalId}`).classList.add("active");
  blackout.classList.add("active");
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
  blackout.removeEventListener("click", handleBodyClick);
}
