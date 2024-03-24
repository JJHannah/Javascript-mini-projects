const calculator = () => {
  let currentDisplay = "";
  let resultDisplay = true;

  function appendToDisplay(input) {
    if (currentDisplay === "" || resultDisplay) {
      currentDisplay = value;
    } else {
      currentDisplay += value;
    }
    resultDisplay = true;
    updateDisplay();
  }

  function updateDisplay() {
    const displayElement = document.querySelector(".input");
    displayElement.textContent = currentDisplay;
  }
};

export default calculator;
