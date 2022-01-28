import './App.css';
import React,{useState} from "react"

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
      setNum1(num1 + val) 
    }else{
      setNum2(num2 + val)
    }
  }
  function clickOperation(val) {
    setCurrentOperation(val)
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
    <header></header>
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{currentOperation ? num1 + currentOperation : ""}</div>
          <div className="corrent-operand">{result ? result : (!currentOperation ? num1 : num2)}</div>
        </div>
        <button onclic={() => {clickNumber(".")}}className="same">1</button>
        <button onclic={() => {clickNumber(0)}}className="same">1</button>
        <button onclic={() => {clickNumber(1)}}className="same">1</button>
        <button onclic={() => {clickNumber(2)}}className="same">2</button>
        <button onclic={() => {clickNumber(3)}}className="same">3</button>
        <button onclic={() => {clickNumber(4)}}className="same">4</button>
        <button onclic={() => {clickNumber(5)}}className="same">5</button>
        <button onclic={() => {clickNumber(6)}}className="same">6</button>
        <button onclic={() => {clickNumber(7)}}className="same">7</button>
        <button onclic={() => {clickNumber(8)}}className="same">8</button>
        <button onclic={() => {clickNumber(9)}}className="same">9</button>
        <button onclic={allClear}className="spant-two">C</button>
        <button onclic={() => {clickOperation("+")}}className="signos">+</button>
        <button onclic={() => {clickOperation("-")}}className="signos">-</button>
        <button onclic={() => {clickOperation("*")}}className="signos">*</button>
        <button onclic={() => {clickOperation("/")}}className="signos">/</button>
        <button onclic={getResult}className="same">=</button>
        
      </div>
    </div>
  );
}

export default App;
