import { NavLink } from "react-router";
import Banner from "../Components/Banner";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const { apps, loading } = useApps();
  const featuredApps = apps.slice(0, 8);
  // console.log(data);
  return (
    <div>
      <Banner />
      <div className="container mx-auto py-20">
        <div className="text-center mb-10">
          <h1 className="text-[48px] text-[#001931] font-bold mb-4">
            Trending Apps
          </h1>
          <p className="text-[20px] text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          // <-- Colon is here, start parentheses for the alternative content
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-10">
          <NavLink
            className=" font-semibold text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none px-9 py-5"
            to="/apps"
          >
            Show All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
