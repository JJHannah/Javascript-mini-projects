const menu = () => {
  const content = document.querySelectorAll(".accordion__content");

  content.forEach((value) => {
    console.log(value);
    content.classList.remove("active");
  });
};

export default menu;
