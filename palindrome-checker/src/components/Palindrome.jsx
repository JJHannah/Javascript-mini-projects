import Style from "./components/Style.css";

const Palindrome = () => {
  function displayPalindrome(str) {
    const newString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reverseString = newString.split("").reverse().join("");

    if (newString === reverseString) {
      console.log("Is a palindrome");
      return true;
    } else {
      console.log("Not a palindrome");
      return false;
    }
  }
  return (
    <div>
      <label htmlFor="search">Enter String </label>
      <input id="search" className="search" type="text" />
      <button onClick={displayPalindrome}>click me</button>
    </div>
  );
};

export default Palindrome;
