import React, { useState, useEffect } from "react";
import "flowbite";
import User3 from "../assets/icon3.jpg";
import User4 from "../assets/icon4.png";
import User5 from "../assets/icon5.jpg";
import ActivityLog from "./ActivityLog";
import TopCamper from "./TopCamper";
const GITHUB_TOKEN = "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"; // Replace with your GitHub token

const Feeds = () => {
  
  return (
    <>
    <h1 className="mt-4  flex-auto text-center text-xl font-bold leading-none text-orange-500  dark:text-white">
        Top Bootcamper
      </h1>

      <div className="mt-5 flex justify-center items-center flex-auto w-72 ml-10 h-40 w-82 py-2 border border-white rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
  <TopCamper/>
</div>


      <h1 className="mt-10 flex items-center justify-center text-xl font-bold leading-none text-orange-500  dark:text-white">
        Feeds
      </h1>

      <div className=" ml-10 h-80 w-72 overflow-y-scroll w-82 mt-2  py-2 border border-white rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
        <ActivityLog />
      </div>

      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
};

export default Feeds;
