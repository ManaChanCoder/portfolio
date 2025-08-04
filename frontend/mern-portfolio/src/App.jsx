import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Project />
                <Contact />
              </>
            }
          />
        </Route>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
