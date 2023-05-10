import React from "react";
import Logo from "../components/assets/stackwall.png";
import "flowbite";
import Events from "./columns/Events";
import Leaderboard from "./columns/Leaderboard";
import Feeds from "./columns/Feeds";
import "./columns/style.css";

const Dashboard = () => {
  return (
    <body class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-h-screen overflow-x-hidden">
      <div className="Leaderboard">
        <Leaderboard />
      </div>

      <div className="col-span-2">
        <Events />
      </div>

      <div className="Feed px-2">
        <Feeds />
      </div>
    </body>
  );
};

export default Dashboard;
