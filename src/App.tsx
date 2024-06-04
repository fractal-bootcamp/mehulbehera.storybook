import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskList } from "./stories/Components/TaskList";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const conditionalCongrats = () => {
    if (counter > 10) return <div>Congrats</div>;
  };

  const negativeCounter = -counter;

  return (
    <div className="App">
      <div>counter: {counter}</div>
      <div>negative counter: {negativeCounter}</div>
      <div>{conditionalCongrats()}</div>
      <div>{counter > 10 ? "congrats" : "boo"}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        minus
      </button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
