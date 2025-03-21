import Style from "./components/Style.css";

const Palindrome = () => {
  const displayPalindrome = (str) => {
    const newString = str.replace(/\W/g, "").toLowerCase();
    const reverseString = newString.split("").reverse().join("");
    if (newString === reverseString) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <label htmlFor="search">Enter String </label>
      <input id="search" className="search" type="text" />
      <button onClick={displayPalindrome}>click me</button>
    </div>
  );
};

export default Palindrome;
