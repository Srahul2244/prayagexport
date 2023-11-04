import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar";
import "animate.css";
function App() {
  return (
    <div className="bg-[#f1c965] pt-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
