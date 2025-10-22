import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Card from "../card/Card";

const Trendings = () => {
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate('/apps')
  }
  const data = useLoaderData();
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    const newArray = [...data].sort((a, b) => b.ratingAvg - a.ratingAvg);
    setTrend(newArray.slice(0, 8));
  }, []);
  return (
    <div className="py-6 flex flex-col items-center justify-center">
      <h1 className="font-bold text-center text-[#001931] text-3xl">
        Trending Apps
      </h1>
      <p className="text-center text-[#627382]">
        Explore All Trending Apps on the market developed by us
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 pt-6 pb-4">
        {trend.map((app, index) => (
          <Card key={index} app={app}></Card>
        ))}
      </div>
      <button onClick={handleclick} className="py-2 px-4 font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm">Show all</button>
    </div>
  );
};

export default Trendings;
