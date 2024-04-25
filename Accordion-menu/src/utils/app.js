const menu = () => {
  const content = document.querySelectorAll(".accordion__content");

  content.forEach((value) => {
    let subtitle = value.querySelector(".subtitle");
    console.log(subtitle);

    subtitle.addEventListener("click", () => {
      value.classList.toggle("open");
    });
  });
};

export default menu;
