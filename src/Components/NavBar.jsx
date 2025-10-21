import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  const baseClasses =
    "font-medium text-[#000000]";

  const activeClasses =
    "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#632EE3]";

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
  };
  return (
    <div className=" py-5 bg-white border-b border-[#E9E9E9]">
      <div className="flex justify-between items-center  container mx-auto">
        <div className="flex items-center">
          <img width={40} src="/assets/logo.png" alt="Logo" />
          <NavLink to='/home' className=" text-[24px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ml-3">
            HERO.IO
          </NavLink>
        </div>
        <div className=" flex items-center gap-x-8 font-medium text-[#000000]">
          <NavLink to="/home" className={getNavLinkClass}>
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
            className="flex items-center text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none"
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
