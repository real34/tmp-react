import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider } from "react-intl";

// Polyfill
if (!global.Intl) {
  global.Intl = {};
}

if (!global.Intl.getCanonicalLocales) {
  require("@formatjs/intl-getcanonicallocales/polyfill");
}

if (!global.Intl.PluralRules) {
  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/dist/locale-data/en");
  require("@formatjs/intl-pluralrules/dist/locale-data/fr");
  require("@formatjs/intl-pluralrules/dist/locale-data/fr");
}

if (!global.Intl.RelativeTimeFormat) {
  require("@formatjs/intl-relativetimeformat/polyfill");
  require("@formatjs/intl-relativetimeformat/dist/locale-data/en");
  require("@formatjs/intl-relativetimeformat/dist/locale-data/fr");
  require("@formatjs/intl-relativetimeformat/dist/locale-data/fr");
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={"fr"} messages={{}}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
