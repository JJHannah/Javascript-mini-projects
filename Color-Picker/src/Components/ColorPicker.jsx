import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorPicker(event) {
    setColor(event.target.value);
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
      <p>Selected color: {color}</p>
    </div>
  );
}
