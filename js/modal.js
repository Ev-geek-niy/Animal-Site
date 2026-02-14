document.querySelector(".modelOpenBtn").addEventListener("click", function () {
  openModal();
});

function openModal() {
  document.querySelector(".modal").classList.add("active");
  document.querySelector(".blackout").classList.add("active");
  // Добавляем обработчик с небольшой задержкой, чтобы он не сработал на том же клике,
  // который открыл модальное окно
  setTimeout(() => document.body.addEventListener("click", handleBodyClick), 0);
}

function handleBodyClick(event) {
  const modal = document.querySelector(".modal");
  // Если клик внутри модального окна — игнорируем
  if (modal.contains(event.target)) return;
  closeModal();
}

function closeModal() {
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".blackout").classList.remove("active");
  // Убираем тот же обработчик
  document.body.removeEventListener("click", handleBodyClick);
}
