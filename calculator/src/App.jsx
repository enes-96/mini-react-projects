import React, { useState } from "react";
import Screen from "./Components/Screen";
import Button from "./Components/Button";

const App = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (
      typeof value === "number" ||
      (typeof value === "string" && !isNaN(parseInt(value)))
    ) {
      setResult(result.concat(value));
    } else {
      const lastChar = result.slice(-1);
      if (["+", "-", "*", "/"].includes(lastChar)) {
        setResult(result.slice(0, -1).concat(value));
      } else {
        setResult(result.concat(value));
      }
    }
  };

  const handleCalculate = () => setResult(eval(result).toString() || "ERROR");

  const handleClear = () => setResult("");

  const buttonValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];

  return (
    <div className="w-1/3 border-2">
      <Screen value={result} />
      <div className="border-2 grid grid-cols-3">
        {buttonValues.map((value, i) => (
          <Button
            key={i}
            value={value}
            onClick={() => handleButtonClick(value)}
          />
        ))}
        <Button value="=" onClick={handleCalculate} />
        <Button value="C" onClick={handleClear} />
      </div>
    </div>
  );
};

export default App;
