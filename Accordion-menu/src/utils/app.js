const menu = () => {
  const content = document.querySelectorAll(".accordion__content");
  for (i = 0; i < content.length; i++) {
    content[i].addEventListener("click", select);
    this.classList.remove("active");
  }
};

export default menu;
