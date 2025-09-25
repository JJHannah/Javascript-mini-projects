const calculation = () => {
  // const paragraph = document.querySelector(".display");
  const btnContainer = document.querySelector(".container");

  btnContainer.addEventListener("click", (e) => {
    const eventTarget = e.target;
    if (eventTarget.tagName === "BUTTON") {
      console.log(eventTarget.innerText);
    }
  });
};
export default calculation;
