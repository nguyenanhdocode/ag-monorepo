import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {AgLocaleProvider} from "ag-lib";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AgLocaleProvider>
      <App />
    </AgLocaleProvider>
  </React.StrictMode>
);
