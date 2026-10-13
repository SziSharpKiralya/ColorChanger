import { useState } from "react";

const randomRgbColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

export function ColorChanger() {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor(randomRgbColor());
  };

  return (
    <>
      <button onClick={changeColor}>Change Color</button>
      <div className="colorBox" style={{ backgroundColor: color}}></div>
    </>
  );
}