import React from "react";
import "flowbite";
import Events from "./columns/Events";
import Leaderboard from "./columns/Leaderboard";
import Feeds from "./columns/Feeds";
import "./columns/style.css";
import TopOfTheMonth from "./columns/TopofTheMonth";

const Dashboard = () => {
  return (
    <body className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-h-screen overflow-x-hidden">
      <div className="Leaderboard" style={{ margin: "10px" }}>
        <Leaderboard />
      </div>

      <div className="col-span-2" style={{ margin: "10px" }}>
        <Events />
      </div>

      <div className="md:px-4 xs:mx-auto" style={{ marginTop: "10px", marginBottom: "30px", marginRight: "10px" }}>
        <TopOfTheMonth />
        <Feeds />
      </div>
    </body>
  );
};

export default Dashboard;
