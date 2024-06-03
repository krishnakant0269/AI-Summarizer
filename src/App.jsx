/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import { Hero, Demo, HomePage, SignIn, SignUp } from "./Components";

import { Routes, Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        {/* <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router> */}
        <Hero />
        <Demo />
      </div>
    </>
  );
}

export default App;
