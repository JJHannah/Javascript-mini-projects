const menu = () => {
  const content = document.querySelectorAll(".accordion__content");

  content.forEach((text) => {
    text.addEventListener("click", () => {
      let description = text.querySelector(".description");
      console.log(description);
      text.classList.toggle("open");
    });
  });
};

export default menu;
