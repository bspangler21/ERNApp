import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BaseButton, DefaultButton } from "@fluentui/react";

function App() {
  return (
    <div className="App">
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
        <div>
          <DefaultButton text="Default Button" onClick={handleClick} />
        </div>
      </header>
    </div>
  );

  function handleClick(): void {
    alert("button clicked");
    console.log("Click happened");
  }
}

export default App;
