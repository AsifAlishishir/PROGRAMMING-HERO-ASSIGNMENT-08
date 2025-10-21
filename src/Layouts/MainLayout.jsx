import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className="bg-[#F5F5F5]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;