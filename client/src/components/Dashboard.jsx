import React from "react";
import Logo from "../components/assets/stackwall.png";
import "flowbite";
import Events from "./columns/Events";
import Leaderboard from "./columns/Leaderboard";
import Feeds from "./columns/Feeds";
import "./columns/style.css";

const Dashboard = () => {
  return (
<<<<<<< HEAD
    <body className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
=======
    <body class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-h-screen overflow-x-hidden">
>>>>>>> ddd2aba1a45598bd619f6d6e75b4ad125d52c825
      <div className="Leaderboard">
        <Leaderboard />
      </div>

      <div className="col-span-2">
        <Events />
      </div>

      <div className="Feed">
        <Feeds />
      </div>
    </body>
  );
};

export default Dashboard;
