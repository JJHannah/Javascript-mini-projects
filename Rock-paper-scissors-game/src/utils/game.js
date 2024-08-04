const game = () => {
  let max = 3;
  let humanScore = 0;
  let computerScore = 0;
  let myWeapons = ["rock", "paper", "scissors"];
  function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * max);
    for (let i = 0; i < myWeapons.length; i++) {
      console.log(myWeapons[i]);
    }
  }

  function getHumanChoice() {
    const userInput = prompt("please choose between rock,paper & scissors");
    console.log(userInput);
  }

  function playRound(humanChoice, computerChoice) {
    const newString = humanChoice.toLowerCase();
    console.log(newString);
    return humanChoice, computerChoice;
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  function playGame() {
    playRound();
    humanScore;
    computerScore;
  }
  function reset(){
    
};

export default game;
