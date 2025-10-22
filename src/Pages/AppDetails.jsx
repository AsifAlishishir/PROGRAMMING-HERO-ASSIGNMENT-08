import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import ChartData from "../Components/ChartData";
import AppNotFound from "./AppNotFound";
import { useState } from "react";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((p) => p.id === Number(id));

  const [isInstalled, setIsInstalled] = useState(false);
  if (loading) return <p>Loading......</p>;

  const {
    title,
    image,
    downloads,
    ratingAvg,
    companyName,
    description,
    size,
    reviews,
    ratings,
  } = app || {};

  //   ekhane app na dekhanor page add korte hobe
  if (!app) return <AppNotFound />;

  const handleInstallClick = () => {
    setIsInstalled(true);

    toast(`${title} Installed Successfully!!`)

  };
  //   console.log(app);
  return (
    <div className="container mx-auto">
      <div className="flex  gap-10 pt-20 pb-10 border-b text-[#0019313a]">
        <div className="w-1/4  ">
          <img
            className="object-cover h-full w-full shadow-md"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex-1">
          <div className="border-b text-[#0019313a] ">
            <h1 className="text-[32px] text-[#001931] font-bold mb-2">
              {title}
            </h1>
            <p className="text-[20px] text-[#627382] mb-[30px]">
              Developed by{" "}
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                {companyName}
              </span>
            </p>
          </div>

          <div className="flex  gap-22 my-[30px]">
            <div className="grid gap-2">
              <img src="/public/assets/icon-downloads.png" alt="" />
              <p className="text-[#001931]">Downloads</p>
              <p className="text-[40px] text-[#001931] font-extrabold">
                {downloads}
              </p>
            </div>
            <div className="grid gap-2">
              <img src="/public/assets/icon-ratings.png" alt="" />
              <p className="text-[#001931]">Average Ratings</p>
              <p className="text-[40px] text-[#001931] font-extrabold">
                {ratingAvg}
              </p>
            </div>
            <div className="grid gap-2">
              <img src="/public/assets/icon-review.png" alt="" />
              <p className="text-[#001931]">Total Reviews</p>
              <p className="text-[40px] text-[#001931] font-extrabold">
                {reviews}
              </p>
            </div>
          </div>
          <button
            className={`rounded text-[20px] text-white font-semibold px-5 py-3.5 ${
              isInstalled
                ? "bg-[#00d3907a] "
                : "bg-[#00D390] hover:bg-[#00b47a] cursor-pointer"
            }`}
            onClick={handleInstallClick}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="pt-10 border-b text-[#0019313a]">
        <h1 className="text-[24px] text-[#001931] font-semibold pb-6">
          Ratings
        </h1>
        <ChartData key={id} ratings={ratings}></ChartData>
      </div>
      <div className="pt-10 ">
        <h1 className="text-[24px] text-[#001931] font-semibold pb-6">
          Description
        </h1>
        <p className="text-[20px] text-[#627382] text-left leading-9 pb-20">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
