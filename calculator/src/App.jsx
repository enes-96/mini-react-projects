import React, { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [firstNum, setFirstNum] = useState([]);

  const handleFirstNum = (val) => {
    setFirstNum([...firstNum, val]);
  };

  return (
    <div>
      <Display value={firstNum} />
      <div className="grid grid-cols-3">
        {btnValues.flat().map((value, index) => (
          <Button
            onClick={() => handleFirstNum(value)}
            key={index}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
