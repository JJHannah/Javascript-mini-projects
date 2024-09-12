function Palindrome(str) {
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
function showPalindrome() {
  return (
    <>
      <div>
        <label htmlFor="inputText">Enter String</label>
      </div>
      <input className=" inputText" type="text" />(
      <button className="btn">{Palindrome}SUBMIT</button>)
    </>
  );
}
export default Palindrome;
