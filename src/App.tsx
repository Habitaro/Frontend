import React, { FC } from "react";
import "./App.css";
import "./font.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default App;
