import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedDate } from "react-intl";

const BetterFormattedDate = ({ value, ...props }) => {
  // https://stackoverflow.com/a/5646753
  const cleanedValue = value && value.replace(/-/g, "/");
  return <FormattedDate value={cleanedValue} {...props} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          <li>
            <BetterFormattedDate />
          </li>
          <li>
            <BetterFormattedDate value="2020-06-19 12:11:14" />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
