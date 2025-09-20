// Weather.jsx
import React from "react";

export function Weather({ temperature }) {
  let message = "";

  if (temperature > 25) {
    message = "It's sunny today!";
  } else if (temperature < 10) {
    message = "It's cold today!";
  } else {
    message = "The weather is pleasant today!";
  }

  return <h2>{message} (Temp: {temperature}°C)</h2>;
}
