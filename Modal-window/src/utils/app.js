const app = () => {
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  openModal.addEventListener("click", () => {
    modal.classList.add("open");
  });
  closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
  });
};

export default app;
