const calculator = () => {
  const btn = document.querySelectorAll(".btn");

  btn.addEventListener("click", appendToDisplay);

  function appendToDisplay(input) {
    document.getElementsByClassName("input").value += value;
  }
};

export default calculator;
