import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PensionProvider } from "./context/PensionContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PensionProvider>
      <App />
    </PensionProvider>
  </React.StrictMode>
);
