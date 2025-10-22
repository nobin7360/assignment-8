import React from "react";
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'
import { useNavigate } from "react-router";

const Card = ({ app }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/appDetails/${app.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="card bg-base-100 w-55 h-70 shadow-sm cursor-pointer hover:shadow-lg transition"
    >
      <figure>
        <img
          className="w-full h-40 object-cover"
          src={app.image}
          alt={app.title}
        />
      </figure>
      <div className="card px-2 py-2">
        <h2 className="card-title font-bold">{app.title}</h2>
        <p className="text-gray-500 text-sm">{app.companyName}</p>
        <div className="flex justify-between items-center gap-2 mt-2">
          <div className="btn "><img className="w-[20px]" src={download} alt="" />
            {(app.downloads)/1000000} M</div>
          <div className="btn"><img className="w-[20px]" src={star} alt="" />
            {app.ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
