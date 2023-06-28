import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import NavBar from "../Pages/Sheard/NavBar/NavBar";
import OthersSiklls from "../Pages/Home/OthersSiklls/OthersSiklls";
import Skills from "../Pages/Home/Skills/Skills";
import Projects from "../Pages/Home/Projects/Projects";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <OthersSiklls></OthersSiklls>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Main;