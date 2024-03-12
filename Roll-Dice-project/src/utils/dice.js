const diceRolls = () => {
  const inputValue = document.querySelector(".inputValue");
  const btnDice = document.querySelector(".btnDice");
  const numResult = document.querySelector(".numResult");
  const imageResult = document.querySelector(".imageResult");
  const image = [];
  const value = [];

  btnDice.addEventListener("click", rollerDice);
};

export default diceRolls;
