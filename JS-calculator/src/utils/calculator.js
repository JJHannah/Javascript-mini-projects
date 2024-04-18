const calculator = () => {
  const btn = document.querySelectorAll(".btn");

  btn.addEventListener("click", appendToDisplay);
  function appendToDisplay(input) {
    btn.append = input;
  }
};

export default calculator;
