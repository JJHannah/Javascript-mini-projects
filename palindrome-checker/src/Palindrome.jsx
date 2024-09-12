import Style from "./components/Style.css";

function Palindrome() {
  function ShowPalindrome(str) {
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
    <>
      <div className="container">
        <label htmlFor="inputText">Enter String</label>
      </div>
      <input className=" inputText" type="text" />
      <button className="btn">{ShowPalindrome}SUBMIT</button>
    </>
  );
}
export default Palindrome;
