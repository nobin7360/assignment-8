import React from "react";
import "./BannerPage.css";
import { PiGooglePlayLogoThin} from "react-icons/pi";
import { FaAppStoreIos } from "react-icons/fa";


const BannerPage = () => {
  return (
    <div className="pt-8 text-center space-y-2.5">
      <div className="font-extrabold text-5xl">
        We Build <br /> <span className="gradient-text">Productive </span>Apps
      </div>
      <p className="text-[#8b949c] px-10 lg:px-63 ">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center items-center gap-4 font-bold">
        <a className="btn bg-[#c1cad2] border-none" href="https://play.google.com/store/apps?hl=en">
          <span className="text-[#f71414] text-2xl">
            <PiGooglePlayLogoThin />
          </span>
          Google Play
        </a>
        <br />
        <a className="btn border-none bg-[#c1cad2]" href="https://www.apple.com/app-store/">
          <span className="text-[#4c00ff] text-2xl">
            <FaAppStoreIos />
          </span>
          App Store
        </a>
      </div>
    </div>
  );
};

export default BannerPage;
