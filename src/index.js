import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "./languages/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(i18n);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
