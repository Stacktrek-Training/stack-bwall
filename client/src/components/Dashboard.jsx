import React from "react";
import Logo from "../components/assets/stackwall.png";
import "flowbite";
import Events from "./columns/Events";
import Topfeed from "./columns/Topfeed";
import Leaderboard from "./columns/Leaderboard";
import Feeds from "./columns/Feeds";
import "./columns/style.css";

const Dashboard = () => {
  return (
    <body className="grid grid-cols-3 ">
      <div className="Leaderboard">
        <Leaderboard />
      </div>

      <div>
        <Events />
      </div>

      <div className="Feed">
        <Feeds />
      </div>

      <div>
        <Topfeed />
      </div>
    </body>
  );
};

export default Dashboard;
