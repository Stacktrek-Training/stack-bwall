import React from "react";
import Logo from "../components/assets/stackwall.png";
import "flowbite";
import Events from "./columns/Events";
import Topfeed from "./columns/Topfeed";

const Dashboard = () => {
  return (
    <body className="grid grid-cols-3 ">
      <div>
        <div class="flex flex-col fixed top-6 left-6 group mt-16 mr-2 w-min max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Top Leaderboard
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="flex-2 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    3205
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Bonnie Green
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="flex-2 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    3201
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Michael image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Michael Gough
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="flex-2 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    3203
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Lana image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Lana Byrd
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="flex-2 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    3150
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Thomas image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="flex-2 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    3140
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Thomas image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="flex-2 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    3120
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Thomas image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div class="flex-2 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    $3110
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
