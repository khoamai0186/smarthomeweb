import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
// import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";

const appElement = document.getElementById("app");
if (appElement === null) {
  throw new Error(`Unable to find #app element.`);
}

createRoot(appElement).render(<App />);
