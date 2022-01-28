import React, { useState } from "react";
import "./App.css";

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

  function getResult() {
    fetch("http://localhost:4000/operations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num1,
        num2,
        operation: currentOperation,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResult(res.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setOperation(operation) {
    if (result) {
      setNum1(result);
      setNum2("");
      setResult("");
    }

    setCurrentOperation(operation);
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
        <button
          onClick={() => {
            clickNumber(".");
          }}
          className="same"
        >
          .
        </button>
        <button
          onClick={() => {
            clickNumber(0);
          }}
          className="same"
        >
          0
        </button>
        <button onClick={allClear} className="clean">
          C
        </button>
        <button onClick={getResult} className="same">
          =
        </button>
        <button
          id="plus"
          onClick={() => {
            setOperation("+");
          }}
          className="operation"
        >
          +
        </button>
        <button
          id="minus"
          onClick={() => {
            setOperation("-");
          }}
          className="operation"
        >
          -
        </button>
        <button
          id="multiply"
          onClick={() => {
            setOperation("*");
          }}
          className="operation"
        >
          *
        </button>
        <button
          onClick={() => {
            setOperation("/");
          }}
          className="operation"
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
