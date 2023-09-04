import React from "react";
import Linechart from "../components/Linechart"; // Import the Linechart component
import Map from "../components/Map"; // Import the Map component

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline text-center">Dashboard</h1>
      <div className="flex  gap-4 mt-5">
        {/* Display the Linechart component in the left half of the dashboard */}
        <div className="w-1/2 ">
          <Linechart />
        </div>
        {/* Display the Map component in the right half of the dashboard */}
        <div className="w-1/2  ">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
