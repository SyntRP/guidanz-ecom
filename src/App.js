import React from "react";
import Header from "./component/header";
import Homepage from "./component/pages/homepage/homepage";
import Footer from "./component/footer/Index";
import "./App.css";
import "@builder.io/widgets";

const App = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
};

export default App;
