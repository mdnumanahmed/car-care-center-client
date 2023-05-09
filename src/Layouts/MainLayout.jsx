import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;