const app = () => {
  const openModal = document.querySelector(".openModal");
  const closeModal = document.querySelector(".closeModal");
  const modal = document.getElementById("modal");

  openModal.addEventListener("click", () => {
    modal.classList.add("open");
  });
  closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  window.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape'){
      //  modal.classList.remove("open")
     }
  })
};

export default app;
