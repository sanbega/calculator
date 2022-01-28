import "./App.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  function allClear() {
    setNum1("");
    setNum2("");
    setCurrentOperation("");
    setResult("");
  }

  function clickNumber(val) {
    if (currentOperation === "") {
      setNum1(num1 + val);
    } else {
      setNum2(num2 + val);
    }
  }
  function clickOperation(val) {
    setCurrentOperation(val);
  }
  function getResult() {
    switch (currentOperation) {
      case "+":
        setResult(Number(num1) + Number(num2));
        break;
      case "-":
        setResult(Number(num1) - Number(num2));
        break;
      case "*":
        setResult(Number(num1) * Number(num2));
        break;
      case "/":
        setResult(Number(num1) / Number(num2));
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {currentOperation ? num1 + currentOperation : ""}
          </div>
          <div className="corrent-operand">
            {result ? result : !currentOperation ? num1 : num2}
          </div>
        </div>
        <button
          onClick={() => {
            clickNumber(".");
          }}
          className="same"
        >
          1
        </button>
        <button
          onClick={() => {
            clickNumber(0);
          }}
          className="same"
        >
          1
        </button>
        <button
          onClick={() => {
            clickNumber(1);
          }}
          className="same"
        >
          1
        </button>
        <button
          onClick={() => {
            clickNumber(2);
          }}
          className="same"
        >
          2
        </button>
        <button
          onClick={() => {
            clickNumber(3);
          }}
          className="same"
        >
          3
        </button>
        <button
          onClick={() => {
            clickNumber(4);
          }}
          className="same"
        >
          4
        </button>
        <button
          onClick={() => {
            clickNumber(5);
          }}
          className="same"
        >
          5
        </button>
        <button
          onClick={() => {
            clickNumber(6);
          }}
          className="same"
        >
          6
        </button>
        <button
          onClick={() => {
            clickNumber(7);
          }}
          className="same"
        >
          7
        </button>
        <button
          onClick={() => {
            clickNumber(8);
          }}
          className="same"
        >
          8
        </button>
        <button
          onClick={() => {
            clickNumber(9);
          }}
          className="same"
        >
          9
        </button>
        <button onClick={allClear} className="spant-two">
          C
        </button>
        <button
          onClick={() => {
            clickOperation("+");
          }}
          className="signos"
        >
          +
        </button>
        <button
          onClick={() => {
            clickOperation("-");
          }}
          className="signos"
        >
          -
        </button>
        <button
          onClick={() => {
            clickOperation("*");
          }}
          className="signos"
        >
          *
        </button>
        <button
          onClick={() => {
            clickOperation("/");
          }}
          className="signos"
        >
          /
        </button>
        <button onClick={getResult} className="same">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
