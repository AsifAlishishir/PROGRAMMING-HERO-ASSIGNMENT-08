import { useRouteError } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
    const error=useRouteError()
    return (
       <>
       <NavBar/>
       <div>404 This Page is not Found.</div>
       <div>{error.message}</div>
       <Footer/>
       </>
    );
};

export default ErrorPage;