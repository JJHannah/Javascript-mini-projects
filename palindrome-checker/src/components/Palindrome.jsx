// import Style from "./components/Style.css";

const Palindrome = () => {
  const handleChange = (e) => {
    const newString = e.target.value;
    console.log(newString);
    const changeLetterCase = newString.replace(/\W/g, "").toLowerCase();
    // console.log(changeLetterCase);
    const reverseString = changeLetterCase.split("").reverse().join("");
    // console.log(reverseString);

    if (changeLetterCase === reverseString) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  };

  return (
    <div>
      <label htmlFor="search">Enter String </label>
      <input
        id="search"
        className="search"
        type="text"
        onChange={handleChange}
      />
      <button onClick={handleChange}>click me</button>
    </div>
  );
};

export default Palindrome;
