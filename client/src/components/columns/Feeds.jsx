import React, { useState, useEffect } from "react";
import "flowbite";
import User3 from "../assets/icon3.jpg";
import User4 from "../assets/icon4.png";
import User5 from "../assets/icon5.jpg";
import ActivityLog from "./ActivityLog";

const Feeds = () => {
  return (
    <>
      <div class=" items-center justify-center flex flex-col align-center pr-4 mt-8 w-72 bg-white border border-white rounded-lg shadow-lg">
      <div class="flex items-center justify-center ">
          <h5 class="text-xl font-bold leading-none text-orange-500  dark:text-white">
            Top of the Month
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-2 sm:py-2">
              <div class="flex items-center space-x-2">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={User3}
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Joseph Angelo Progados
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Students
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="blue"
                    viewBox="0 0 24 24"
                    stroke-width=".5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>{" "}
                  5000
                </div>
              </div>
            </li>
            <li class="pt-1 sm:pt-2">
              <div class="flex items-center space-x-2">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={User4}
                    alt="Thomas image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Vonnn Einuj Anre Sabusap
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Students
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="blue"
                    viewBox="0 0 24 24"
                    stroke-width=".5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>{" "}
                  4000
                </div>
              </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center space-x-2">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={User5}
                    alt="Thomas image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Thomes Lean
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Students
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="blue"
                    viewBox="0 0 24 24"
                    stroke-width=".5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>{" "}
                  3000
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="mt-4 flex items-center justify-center text-xl font-bold leading-none text-orange-500  dark:text-white">
        Feeds
      </h1>

      <div className="max-h-72 overflow-y-scroll w-82 m  py-2 mt-8 border border-white rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 ">
        <ActivityLog />
      </div>

      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
};

export default Feeds;
