// import Style from "./components/Style.css";
import { useState } from "react";
const Palindrome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
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
      <p>Searching for : {searchTerm}</p>
      <button onClick={handleChange}>click me</button>
    </div>
  );
};

export default Palindrome;
