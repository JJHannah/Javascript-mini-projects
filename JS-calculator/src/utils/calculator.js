const calculator = () => {
  let currentDisplay = "";
  let resultDisplay = false;

  function appendToDisplay(input) {
    if (currentDisplay === "" || resultDisplay) {
      currentDisplay = value;
    } else {
      currentDisplay += value;
    }
    resultDisplay = false;
    updateDisplay();
  }

  function updateDisplay() {
    const displayElement = document.querySelector(".input");
    displayElement.textContent = currentDisplay;
  }
};

export default calculator;
