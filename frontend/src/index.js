import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CyclesContextProvider } from "./context/CycleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CyclesContextProvider>
      <App />
    </CyclesContextProvider>
  </React.StrictMode>
);
