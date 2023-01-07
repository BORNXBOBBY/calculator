import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState();
  const handleInput = (val) => {
    setResult("");
    setNumber(number + val);
  };
 
  const cal = () => {
    let data = eval(number);
    setResult(data);
    setNumber("");
  };
  console.log(eval)
  const clearData = () => {
    setResult("");
    setNumber("");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"> {result ? result : number}</div>
        <div className="btn light-gray" onClick={() => clearData()} id="clear">
          AC
        </div>
        <div className="btn light-gray" onClick={() => handleInput("+/-")}>
          +/-
        </div>
        <div className="btn light-gray" onClick={() => handleInput("%")}>
          %
        </div>

        <div className="btn orange" onClick={() => handleInput("/")}>
          /
        </div>
        <div className="btn" onClick={() => handleInput("7")}>
          7
        </div>
        <div className="btn" onClick={() => handleInput("8")}>
          8
        </div>
        <div className="btn" onClick={() => handleInput("9")}>
          9
        </div>
        <div className="btn orange" onClick={() => handleInput("*")}>
          X
        </div>
        <div className="btn" onClick={() => handleInput("4")}>
          4
        </div>
        <div className="btn" onClick={() => handleInput("5")}>
          5
        </div>
        <div className="btn" onClick={() => handleInput("6")}>
          6
        </div>
        <div className="btn orange" onClick={() => handleInput("-")}>
          _
        </div>

        <div className="btn" onClick={() => handleInput("1")}>
          1
        </div>
        <div className="btn" onClick={() => handleInput("2")}>
          2
        </div>
        <div className="btn" onClick={() => handleInput("3")}>
          3
        </div>
        <div className="btn orange" onClick={() => handleInput("+")}>
          +
        </div>
        <div className="btn zero" onClick={() => handleInput("0")}>
          0
        </div>
        <div className="btn" onClick={() => handleInput(".")}>
          .
        </div>
        <div className="btn orange" onClick={() => cal()}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
