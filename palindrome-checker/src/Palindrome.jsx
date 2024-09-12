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

export default Palindrome;
