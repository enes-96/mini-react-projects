import React, { useState } from "react";
import Screen from "./Components/Screen";
import Button from "./Components/Button";

const App = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (typeof value === "number") {
      setResult(result.concat(value));
    } else {
      const lastChar = result.slice(-1);
      if (["+", "-", "*", "/", "."].includes(lastChar)) {
        setResult(result.slice(0, -1).concat(value));
      } else {
        setResult(result.concat(value));
      }
    }
  };

  const handleCalculate = () => setResult(eval(result).toString() || "ERROR");

  const handleClear = () => setResult("");

  const buttonValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "."];

  return (
    <div className="grid place-items-center text-4xl">
      <div className="border-2 ">
        <Screen value={result} />
        <div className="grid grid-cols-3 text-2xl ">
          {buttonValues.map((value, i) => (
            <Button
              className={"border-2 h-32"}
              key={i}
              value={value}
              onClick={() => handleButtonClick(value)}
            />
          ))}
          <Button
            value="="
            className={"border-2 h-32 col-span-2"}
            onClick={handleCalculate}
          />
          <Button value="C" className={"border-2 h-32"} onClick={handleClear} />
        </div>
      </div>
    </div>
  );
};

export default App;
