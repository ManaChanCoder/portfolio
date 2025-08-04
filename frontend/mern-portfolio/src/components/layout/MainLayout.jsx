import React from "react";
import { Outlet } from "react-router-dom";

// theme
import themeStore from "../../store/themeStore";

// components
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  const isDark = themeStore((state) => state.isDark);
  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar />
      <div className="pt-20 pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
