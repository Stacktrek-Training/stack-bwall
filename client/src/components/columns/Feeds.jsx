import React, { useState, useEffect } from "react";
import "flowbite";
import ActivityLog from "./ActivityLog";


const Feeds = () => {
  return (
    <>

     
      <div class="flex flex-col align-middle mr-1 ml-4 mb-10 mt-5 w-82 bg-blue border border-white rounded-lg shadow-lg"
        style={{ border: '2px solid transparent', boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
        <div class="md:px-4 xs:mx-auto" style={{ marginTop: "20px" }}>
        </div>
        <div className="flex items-center justify-center mt-1 mb-1">
          <h1 className="mt-4 flex items-center justify-center text-xl font-bold leading-none text-orange-500  dark:text-white">
            Feeds
          </h1>
        </div>
        <div className="max-h-72 overflow-y-scroll flex flex-col align-middle mx-8 mb-10 mt-4 w-82 bg-white border border-white rounded-lg shadow-lg ">
          <ActivityLog />
        </div>
      </div>
    </>
  );
};

export default Feeds;
