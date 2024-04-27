const menu = () => {
  const content = document.querySelectorAll(".accordion__content");

  content.forEach((value) => {
    let subtitle = value.querySelector(".subtitle");
    console.log(subtitle);
  });
};

export default menu;
