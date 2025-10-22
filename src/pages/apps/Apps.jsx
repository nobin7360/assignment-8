import React, { useState } from "react";
import AppPage from "../appsPage/AppPage";
import { useLoaderData, useNavigation } from "react-router";
import Card from "../card/Card";

const Apps = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = data.filter((app) =>
    app.title?.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  if (navigation.state === "loading") {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-4 text-lg font-semibold text-gray-600">
          Loading Apps...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <AppPage
        len={filteredApps.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredApps={filteredApps}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 w-full px-5">
        {filteredApps.length > 0 ? (
          filteredApps.map((app, index) => <Card key={index} app={app} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-5">
            No apps found matching "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Apps;
