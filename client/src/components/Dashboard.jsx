import React from "react";

import "flowbite";
import Leaderboard from "./assets/columns/Leaderboard";
import Events from "./assets/columns/Events";
import Topfeed from "./assets/columns/Topfeed";

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
