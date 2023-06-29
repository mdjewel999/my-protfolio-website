import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import NavBar from "../Pages/Sheard/NavBar/NavBar";
import OthersSiklls from "../Pages/Home/OthersSiklls/OthersSiklls";
import Skills from "../Pages/Home/Skills/Skills";
import Projects from "../Pages/Home/Projects/Projects";
import SpeedDial from "../Pages/SpeedDial/SpeedDial";
import MySkills from "../Pages/Home/MySkills/MySkills";

import { createContext, useLayoutEffect, useState } from 'react';
import ParticlesDesign from '../components/ParticlesDesign';
export const ThemeContext = createContext(null);


const Main = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    const [theme, setTheme] = useState("light")
    const themeInfo = { theme, setTheme };

    return (

        <ThemeContext.Provider value={themeInfo}>
        <div data-theme={theme}>
            <ParticlesDesign />
            <NavBar></NavBar>
            <SpeedDial></SpeedDial>
            <Outlet></Outlet>
            <OthersSiklls></OthersSiklls>
            <Skills></Skills>
            <Projects></Projects>
            <MySkills></MySkills>
            <Footer></Footer>
        </div>
    </ThemeContext.Provider>


       
    );
};

export default Main;