const app = () => {
  const openModal = document.querySelector(".openModal");
  const closeModal = document.querySelector(".closeModal");
  const modal = document.getElementById("modal");

  const openModalFunction = () => {
    modal.classList.add("open");
  };

  const closeModalFunction = () => {
    modal.classList.remove("open");
  };

  const windowEscape = (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  };

  openModal.addEventListener("click", openModalFunction);
  closeModal.addEventListener("click", closeModalFunction);
  window.addEventListener("keydown", windowEscape);
};

export default app;
