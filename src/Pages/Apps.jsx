import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  const noResults = searchedApps.length === 0 && term !== "";

  return (
    <div>
      <div className="container mx-auto py-20 px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-[#001931] font-bold mb-4">
            Our All Applications
          </h1>
          <p className="lg:text-[20px] text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center mb-5">
          <h2 className="md:text-[24px] text-[#001931] font-semibold">
            ({searchedApps.length}) Apps Found
          </h2>
          <label className="max-w-xs input relative flex items-center">
            <div className="absolute left-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" placeholder:text-[#627382] pl-6 w-full"
              type="search"
              placeholder=" search Apps"
            />
          </label>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : noResults ? (
          <div className="flex flex-col items-center text-center my-20">
            <h1 className="text-[30px] md:text-[44px] lg:text-[64px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-14">
              No App Found
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
