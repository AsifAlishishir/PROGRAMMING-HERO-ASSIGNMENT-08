import { useRouteError } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center gap-4 py-20">
        <img
          className="max-w-[420px] mb-5 mt-20"
          src="/public/assets/error-404.png"
          alt=""
        />
        <h1 className="text-[48px] text-[#001931] font-semibold">
          Oops, page not found!
        </h1>
        <p className="text-[20px] text-[#627382] mb-5">
          The page you are looking for is not available.
        </p>
        <button className=" font-semibold text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none px-9 py-5">
          Go Back
        </button>
      </div>
      <div>{error.message}</div>
      <Footer />
    </>
  );
};

export default ErrorPage;
