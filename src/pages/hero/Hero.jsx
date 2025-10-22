import React from "react";
import HeroImg from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className="pt-10 flex justify-center items-center">
      <img src={HeroImg} alt="" />
    </div>
  );
};

export default Hero;
