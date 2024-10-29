const calculator = () => {
  // const input = document.getElementById("input");
  const buttons = document.querySelectorAll(".btn");

  let calculation = "";
  function appendToDisplay(value) {
    buttons.forEach((button) => {
      calculation += value;
      console.log(button.textContent);
    });
  }
  appendToDisplay();
};

export default calculator;
