const diceRolls = () => {
  const numValue = document.querySelector(".numValue").value;
  const btnDice = document.querySelector(".btnDice");
  const numResult = document.querySelector(".numResult");
  const imageResult = document.querySelector(".imageResult");
  const image = [];
  const value = [];

  btnDice.addEventListener("click", rollerDice);

  function rollerDice() {
    for (let i = 0; i < numValue; i++) {
      const numRandom = Math.floor(Math.random() * 6) + 1;
      // console.log(numRandom);
      value.push(numRandom);
      image.push(
        `<img src="public/images/${numRandom}.png" alt= "dice${numRandom} ">`
      );

      numResult.textContent = `dice : ${value.join(", ")}`;
      imageResult.innerHTML = image.join("");
    }
  }
};

export default diceRolls;
