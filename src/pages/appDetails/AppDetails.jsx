import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'
import review from '../../assets/icon-review.png';
import RatingBar from "../ratingBar/RatingBar";
import { addToInstalledApp, getInstalledApp } from "../../utility/localstorage/storage";
import { ToastContainer, toast } from 'react-toastify';
const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id == appId);

  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    const installed = getInstalledApp();
    if (installed.includes(appId)) {
      setIsInstalled(true);
    }
  }, [appId]);
  const {image,title,companyName,downloads,ratingAvg,reviews,size,description,ratings} = singleApp;
  const handleInstallation=(id)=>{
    addToInstalledApp(id);
    setIsInstalled(true);
    notify();
  }

  const notify=()=>{
    toast('The app is Installed.')
  }

  return (
    <div className="py-4">
      <div className="flex flex-wrap justify-start items-start gap-6 px-10">
        <div className="flex w-[180px]">
          <img className="w-full h-auto rounded-lg" src={image} alt={title}/>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="font-semibold text-[#627382]">
            Developed by:{" "}
            <span className="text-blue-700 hover:underline">{companyName}</span>
          </p>

            <div className="divider w-full"></div>
          <div className="flex items-center justify-left gap-x-10 text-center">
            <div className="flex flex-col items-center">
              <img className="w-8" src={download} alt="" />
              <p className="text-gray-600">Downloads</p>
              <h3 className="text-lg font-semibold">{downloads / 1000000}M</h3>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-8" src={star} alt="" />
              <p className="text-gray-600">Rating</p>
              <h3 className="text-lg font-semibold">{ratingAvg}</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <img className="w-8" src={review} alt="" />
              <p className="text-gray-600">Reviews</p>
              <h3 className="text-lg font-semibold">
                {(reviews / 1000).toFixed(1)}k
              </h3>
            </div>
          </div>
          <button
            onClick={() => handleInstallation(appId)}
            disabled={isInstalled}
            className={`mt-6 px-5 py-2 rounded-lg text-white 
              ${isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390] hover:bg-blue-700"}`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>

        </div>
      </div>

      <div className="divider pl-10 w-full"></div>
      <div className="mt-10 px-10">
        <RatingBar ratings={ratings}></RatingBar>
        <div className="divider w-full"></div>
        <h2 className="text-lg font-bold mt-6 mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
