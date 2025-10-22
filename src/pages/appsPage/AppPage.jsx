
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ErroAppMsg from "../eroorAppMsg/ErroAppMsg";

const AppPage = ({ len, searchTerm, setSearchTerm, filteredApps }) => {
  const [showError, setShowError] = useState(false);

  const handleSearch = () => {
    if (filteredApps.length !== 0) {
      alert("Your Apps have been Found");
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="py-5 space-y-5 w-full">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="lg:flex justify-between items-center space-y-4">
        <p className="text-xl font-semibold">{len} Apps Found</p>
        <div className="relative w-full sm:w-[300px]">
          <IoMdSearch
            onClick={handleSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowError(false);
            }}
            className="border border-[#D2D2D2] rounded-md pl-10 pr-3 py-1 w-full"
          />
        </div>
      </div>

      {showError && <ErroAppMsg />}

    </div>
  );
};

export default AppPage;
