import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <div className="bg-[#F5F5F5] flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
