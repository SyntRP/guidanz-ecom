import React from "react";
import Header from "./component/header";
import Footer from "./component/footer/Index.js";
import "./App.css";
import PlpList from "./component/algolia/custom/PlpList";

const App = () => {
  return (
    <>
      <Header />
      <PlpList />
      <Footer />
    </>
  );
};

export default App;
