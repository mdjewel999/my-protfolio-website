import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import NavBar from "../Pages/Sheard/NavBar/NavBar";
import OthersSiklls from "../Pages/Home/OthersSiklls/OthersSiklls";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <OthersSiklls></OthersSiklls>
            <Footer></Footer>
        </div>
    );
};

export default Main;