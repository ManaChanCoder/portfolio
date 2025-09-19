import React from "react";
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import ScrollFade from "./components/shared/ScrollFade";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <ScrollFade>
                  <Home />
                </ScrollFade>
                <ScrollFade>
                  <About />
                </ScrollFade>
                <ScrollFade>
                  <Project />
                </ScrollFade>
                <ScrollFade>
                  <Contact />
                </ScrollFade>
              </>
            }
          />
        </Route>
        <Route
          path="/resume"
          element={
            <ScrollFade>
              <Resume />
            </ScrollFade>
          }
        />
      </Routes>
      <SpeedInsights />
    </div>
  );
};

export default App;
