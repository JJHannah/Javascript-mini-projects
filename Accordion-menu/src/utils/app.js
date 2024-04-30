const menu = () => {
  const content = document.querySelectorAll(".accordion__content");

  content.forEach((value, index) => {
    let description = value.querySelector(".description");
    console.log(description);
  });
};

export default menu;
