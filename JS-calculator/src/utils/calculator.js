const calculator = () => {
  const btn = document.querySelectorAll(".btnClick");
  const input = document.querySelector(".input");
  const multiply = document.querySelector(".btnMultiply");
  const subtract = document.querySelector("btnSubtract");
  const add = document.querySelector(".btnAdd");
  const divide = document.querySelector(".btnDivide");
  const calculate = document.querySelector(".btnClculate");
  const clear = document.querySelector(".btnClear");

  btn.addEventListener("click", appendToDisplay);

  function appendToDisplay() {
    let calculation = "";
  }
};

export default calculator;
