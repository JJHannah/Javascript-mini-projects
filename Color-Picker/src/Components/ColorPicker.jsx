import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorPicker(event) {
    setColor(event.target.value);
  }
  function handleChangeInBox(e) {
    document.querySelector(".box").style.backgroundColor = newColor;
    const newColor = handleColorPicker();

    // box.innerText = newColor;
  }
  return (
    <div className="container">
      <h1>Color Picker</h1>
      <label htmlFor="color">Pick a Color</label>
      <br />
      <input
        name="color"
        type="color"
        value={color}
        id="bgColor"
        onChange={handleColorPicker}
      />
      <div className="box" onChange={handleChangeInBox}></div>
      <p>Selected color: {color}</p>
    </div>
  );
}
