let currentModalId = null;
const blackout = document.querySelector(".blackout");
const body = document.querySelector("body");

document.querySelectorAll(".modal-btn").forEach(modal => {
  modal.addEventListener("click", function () {
    openModal(modal.dataset.id);
  });
  modal.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      modal.click()
    }
  });
})

document.querySelectorAll(".btn-close").forEach(btn => {
  btn.addEventListener("click", function () {
    closeModal()
  });
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

function closeModalByKey(event, element) {
  element.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      closeModal();
    }
  });
}

function trapFocus(modal) {
  const focusElements = modal.querySelector('.btn-close')

  focusElements.forEach(focusElement => {
    focusElement.addEventListener('keydown', closeModalByKey(event, focusElement));
  });
}
