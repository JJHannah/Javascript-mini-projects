const toggle = () => {
  const toggle = document.querySelector("#toggle");
  const element = document.body;

  toggle.addEventListener("click", () => {
    element.classList.toggle("dark-mode");
  });
};

export default toggle;
