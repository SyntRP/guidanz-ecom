import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Homepage from "./page/homepage";
import Footer from "./component/footer/Index";
import PlpList from "./page/PlpList";
import PDP from "./page/PDP";
import "./App.css";
import "@builder.io/widgets";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productlist" element={<PlpList />} />
        <Route path="/productlist/:cid" element={<PlpList />} />
        <Route path="/p/:sku" element={<PDP />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
