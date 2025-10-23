import { NavLink } from "react-router";

const AppNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 py-20 px-4 md:px-6 lg:px-8">
      <img
        className="max-w-[220px] md:max-w-[320px] lg:max-w-[420px] mb-5 lg:mt-20"
        src="/assets/App-Error.png"
        alt=""
      />
      <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-[#001931] font-semibold">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="md:text-[20px] text-[#627382] mb-5">
        The App you are requesting is not found on our system. please try
        another apps.
      </p>
      <NavLink
        to="/"
        className=" font-semibold text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none px-9 py-5"
      >
        Go Back
      </NavLink>
    </div>
  );
};

export default AppNotFound;
