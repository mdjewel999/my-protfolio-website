import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Sheard/NavBar/NavBar";
import Footer from "../Pages/Sheard/Footer/Footer";

import { createContext, useLayoutEffect, useState } from "react";
import ParticlesDesign from "../components/ParticlesDesign";
export const ThemeContext = createContext(null);

const PersonalInfo = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const [theme, setTheme] = useState("light");
  const themeInfo = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeInfo}>
      <div data-theme={theme}>
        <ParticlesDesign />
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default PersonalInfo;
