import React, { useEffect, useState } from "react";
import InstalledApps from "../installedapp/InstalledApps";
import InstalledCard from "../installCard/InstalledCard";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../../utility/localstorage/storage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedIds = getInstalledApp();
    const installedList = data.filter(app => storedIds.includes(app.id));
    setInstalled(installedList);
  }, [data]);

  const handleUninstall = (id) => {
    setInstalled(prev => prev.filter(app => app.id !== id));
  };

  const handleSortChange = (value) => {
    let sortedApps = [...installed];

    if (value === "small") {
      sortedApps.sort((a, b) => a.size - b.size);
    }else if (value === "large") {
      sortedApps.sort((a, b) => b.size - a.size);
    }

    setInstalled(sortedApps);
  };

  return (
    <div>
      <InstalledApps installed={installed} onSortChange={handleSortChange} />
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      {installed.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No apps installed</p>
      ) : (
        installed.map((app) => (
          <InstalledCard key={app.id} app={app} onUninstall={handleUninstall} />
        ))
      )}
    </div>
  );
};

export default Installation;
