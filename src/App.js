import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import LandingPage from "./page/LandingPage";
import PDP from "./page/PDP";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/p/:sku" element={<PDP />} />
      </Routes>
    </>
  );
};

export default App;
