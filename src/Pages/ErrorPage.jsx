import { NavLink, useRouteError } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center text-center gap-4 py-20 px-4 md:px-6 lg:px-8">
        <img
          className="max-w-[220px] md:max-w-[320px] lg:max-w-[420px] mb-5 lg:mt-20"
          src="/assets/error-404.png"
          alt=""
        />
        <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-[#001931] font-semibold">
          Oops, page not found!
        </h1>
        <p className="md:text-[20px] text-[#627382] mb-5">
          The page you are looking for is not available.
        </p>
        <NavLink
          to="/"
          className=" font-semibold text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none px-9 py-5"
        >
          Go Back
        </NavLink>
      </div>
      <div>{error.message}</div>
      <Footer />
    </>
  );
};

export default ErrorPage;
