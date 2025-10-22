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
      <div className=" flex justify-between items-center gap-7 md:gap-0 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-1 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-40 mt-2 p-2 shadow font-medium text-[#000000]"
            >
              <NavLink to="/" className="pb-1.5">
                Home
              </NavLink>
              <NavLink to="/apps" className="pb-1.5">
                Apps
              </NavLink>
              <NavLink to="/installation" className="pb-1.5">
                Installation
              </NavLink>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              className="hidden md:block w-6 md:w-10"
              src="/assets/logo.png"
              alt="Logo"
            />
            <NavLink
              to="/"
              className="text-[20px] md:text-[24px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent md:ml-3"
            >
              HERO.IO
            </NavLink>
          </div>
        </div>
        <div className=" hidden lg:flex items-center gap-x-8 font-medium text-[#000000]">
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
