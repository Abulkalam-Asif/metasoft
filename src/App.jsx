import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Download from "./screens/Download";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/download" element={<Download/>} />
        
      </Routes>
    </>
  );
};

export default App;
