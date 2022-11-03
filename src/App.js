import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Homepage from "./component/pages/homepage/homepage";
import Footer from "./component/footer/Index";
import PlpList from "./component/algolia/custom/PlpList";
import "./App.css";
import "@builder.io/widgets";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productlist" element={<PlpList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
