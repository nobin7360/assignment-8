import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const InstalledApps = ({installed,onSortChange}) => {
  return (
    <div className="px-10">
      <div className="py-5 space-y-5">
        <div className="text-center space-y-3 items-center">
          <h1 className="text-3xl font-bold">Our All Applications</h1>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-xl font-semibold">({installed.length}) Apps Found</p>
          <div className="relative">
            <div className="relative inline-block">
              <select onChange={(e) => onSortChange(e.target.value)}
               className="appearance-none border border-gray-300 rounded-md pl-3 pr-8 py-2 text-gray-600 text-sm font-medium bg-white focus:outline-none cursor-pointer">
                <option value="">
                  Sort By Size
                </option>
                <option value="small">Small</option>
                <option value="large">Large</option>
              </select>
              <IoIosArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
