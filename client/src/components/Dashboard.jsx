import React from "react";
import Logo from "../components/assets/stackwall.png";
import "flowbite";
import Events from "./columns/Events";
import Topfeed from "./columns/Topfeed";
import Leaderboard from "./columns/Leaderboard";

const Dashboard = () => {
  return (
    <body className="grid grid-cols-3 ">
     
     <div>
      <Leaderboard/>
     </div>

      <div>
        <Events/>
      </div>

      <div>
       <Topfeed/>
      </div>

    
    </body>
  );
};

export default Dashboard;
