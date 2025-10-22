import React from 'react';
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'
import { deleteApp } from '../../utility/localstorage/storage';
import { toast } from 'react-toastify';

const InstalledCard = ({ app, onUninstall }) => {
  const { id, title, image, downloads, size, ratingAvg } = app;

  const handleclick = () => {
    deleteApp(id);
    onUninstall(id);
    toast.error(`${title} has been uninstalled.`);
  };

  return (
    <div className='mx-10 my-5 bg-gray-200 lg:flex md:flex sm:flex items-center justify-between px-2 py-1 rounded-sm'>
      <div className='flex items-center gap-3'>
        <img className='w-[70px]' src={image} alt={title} />
        <div className='space-y-2'>
          <h2 className='text-lg font-bold'>{title}</h2>
          <div className='flex justify-between items-center gap-10'>
            <div className='flex justify-center items-center gap-2 text-green-600'>
              <img className='w-[20px]' src={download} alt="downloads" />
              <p>{(downloads / 100000).toFixed(1)}M</p>
            </div>
            <div className='flex justify-center items-center gap-2 text-[#FF8811]'>
              <img className='w-[20px]' src={star} alt="rating" />
              <p>{ratingAvg}</p>
            </div>
            <div>{size} MB</div>
          </div>
        </div>
      </div>
      <div>
        <button 
          onClick={handleclick} 
          className='bg-green-500 rounded-sm font-semibold text-white px-2 py-1 hover:bg-green-600'
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledCard;
