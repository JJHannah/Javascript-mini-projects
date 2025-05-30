const inputElem = document.querySelector(".inputCheck");
const btnCheck = document.querySelector("button");
const displayOutput = document.querySelector(".output");
const btnReset = document.querySelector(".btnReset");

btnCheck.addEventListener("click", isPalindrome);
btnReset.addEventListener("click", resetInputElem);

function isPalindrome() {
  const inputValue = inputElem.value;

  const newString = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseString = newString.split("").reverse().join("");

  if (newString === "") {
    return (displayOutput.textContent = "Please enter a word!!!");
  } else if (newString === reverseString) {
    return (displayOutput.textContent = "It's a palindrome");
  } else {
    return (displayOutput.textContent = "Not palindrome");
  }
}

function resetInputElem() {
  return (inputElem.value = "");
}
