/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from "react";

import "./App.css";

import { Hero, Demo } from "./Components";

function App() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </>
  );
}

export default App;
