const Palindrome = () => {
  const inputElem = document.querySelector(".inputCheck");
  const btnCheck = document.querySelector("button");
  const displayOutput = document.querySelector(".output");

  btnCheck.addEventListener("click", isPalindrome);

  function isPalindrome() {
    const inputValue = inputElem.value;

    const newString = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseString = newString.split("").reverse().join("");

    if (newString === reverseString) {
      displayOutput.textContent = "It is a palindrome";
      return true;
    } else {
      displayOutput.textContent = "Not palindrome";
      return false;
    }
  }
  return (
    <>
      <label for="name">Name</label>
      <input class="inputCheck" type="text" />
      <button>check</button>
      <p class="output"></p>
    </>
  );
};

export default Palindrome;
