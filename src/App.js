import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedDate } from "react-intl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          <li>
            <FormattedDate />
          </li>
          <li>
            <FormattedDate value="2020-06-19 12:11:14" />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
