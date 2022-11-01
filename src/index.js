import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "@algolia/autocomplete-theme-classic";
import "./index.css";
import App from "./App";
import Index from "./component/Footer/Index";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Index />
    </BrowserRouter>
  </React.StrictMode>
);
