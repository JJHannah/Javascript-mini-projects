const calculator = () => {
  let calculation = "";

  function calcToDisplay(value) {
    calculation += value;
    console.log(calculation);
  }
  calcToDisplay();
};

function clearDisplay(value) {
  let calculation = "";
}
function calculateResult(){
  calculation = eval(calculation);
  return calculation
}
clearDisplay();
export default calculator;
