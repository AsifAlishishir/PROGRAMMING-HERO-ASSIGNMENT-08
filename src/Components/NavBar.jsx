import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  const baseClasses = "font-medium text-[#000000]";

  const activeClasses =
    "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#632EE3]";

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
  };
  return (
    <div className=" py-5 bg-white border-b border-[#E9E9E9]">
      <div className="flex justify-between items-center  container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <img className="w-6 md:w-10" src="/assets/logo.png" alt="Logo" />
          <NavLink
            to="/"
            className="text-[20px] md:text-[24px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ml-3"
          >
            HERO.IO
          </NavLink>
        </div>
        <div className=" hidden md:flex items-center gap-x-8 font-medium text-[#000000]">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/apps" className={getNavLinkClass}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={getNavLinkClass}>
            Installation
          </NavLink>
        </div>
        <div>
          <a
            href="https://github.com/AsifAlishishir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none px-3 md:px-4"
          >
            <FaGithub />
            <span className="ml-2.5 font-semibold">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
