const inputElem = document.querySelector(".inputCheck");
const btnCheck = document.querySelector("button");
const displayOutput = document.querySelector(".output");

btnCheck.addEventListener("click", isPalindrome);

function isPalindrome() {
  const inputValue = inputElem.value;

  const newString = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseString = newString.split("").reverse().join("");

  if (newString === "") {
    return (displayOutput.textContent = "please enter string");
  } else if (newString === reverseString) {
    return (displayOutput.textContent = "It's a palindrome");
  } else {
    return (displayOutput.textContent = "Not palindrome");
  }
}
