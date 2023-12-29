import { useState } from "react";
import './App.css';
import { CalcWrap } from './CalcWrap/CalcWrap';
import { calculate } from "./utils/calculate";

export default function App() {

  const [number1, setNumber1] = useState(null);

  const [number2, setNumber2] = useState(null);

  const [operator, setOperator] = useState(null);

  const handleNumberClick = (value) => {
    if (operator === null) {
      setNumber1((prev) => (prev === null ? value : prev + value));
    } else {
      setNumber2((prev) => (prev === null ? value : prev + value));
    }
  };

  const handleOperatorClick = (value) => {
    if (number1 !== null && number2 === null) {
      setOperator(value);
    }
  };

  const handleDisplayClear = () => {
    setOperator(null);
    setNumber1(null);
    setNumber2(null);
  };

  const handleEqualClick = () => {
    if (number1 !== null && number2 !== null && operator !== null) {
      setNumber1(calculate(number1, number2, operator));
      setNumber2(null);
      setOperator(null);
    }
  };

  const styleApp = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <div style={styleApp} className="App">
      <CalcWrap handleNumberClick={handleNumberClick}
        handleOperatorClick={handleOperatorClick}
        handleEqualClick={handleEqualClick}
        handleDisplayClear={handleDisplayClear}
        number1={number1}
        number2={number2}
        operator={operator} />
    </div>
  );
}
