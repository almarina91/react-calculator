import React, { useState } from 'react';
import './App.css';


function Calculator() {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const numbersMap = numbers.map(number =>
        <button onClick={chooseNumbers} className="numbers" key={number} value={number}>{number}</button>);

    const operations = ["+", "-", "*", "/" ,"=", "."];
    const operationsMap = operations.map(operation => (operation  === "=") ?
        (<button onClick={calculate} className="operations" key={operation} value={operation}>{operation}</button>)
        : (<button onClick={chooseNumbers} className="operations" key={operation} value={operation}>{operation}</button>)
    );

    const [displayState, setDisplayState] = useState("");

    function chooseNumbers (e) {
        let newValue = (displayState + e.target.value);
        setDisplayState(newValue);
    }
    function calculate () {
        let total = eval(displayState);
        setDisplayState(total);
    }
    function clear () {
        setDisplayState("");
    }
    function changeSign () {
        let number = eval(displayState);
        setDisplayState(-number);
    }

  return (
      <div className="container">
          <span className="display">{displayState}</span>
          {numbersMap}
          {operationsMap}
          <button onClick={changeSign} className="operations">+/-</button>
          <button onClick={clear} className="operations">C</button>

      </div>
  )
}

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
