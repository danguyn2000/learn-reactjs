import { useState, useEffect } from "react";

function randomColor() {
  const LIST_COLOR = ["red", "green", "blue", "yellow"];
  const randomIndex = Math.trunc(Math.random() * 4);
  // console.log(Math.trunc(Math.random() * 4));
  return LIST_COLOR[randomIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
