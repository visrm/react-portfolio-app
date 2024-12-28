import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
};

export default App;
