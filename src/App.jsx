import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Download from "./screens/Download";
import { AppPage } from "./screens/AppPage";
import { Games } from "./screens/Games";
import { AI } from "./screens/AI";
import { OS } from "./screens/OS";
import LargeScreenNav from "./components/LargeScreenNav";
import SmallScreenNav from "./components/SmallScreenNav";
const App = () => {
  return (
    <>
      <SmallScreenNav />
      <LargeScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/download" element={<Download />} />
        <Route path="/apps" element={<AppPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/os" element={<OS />} />
      </Routes>
    </>
  );
};

export default App;
