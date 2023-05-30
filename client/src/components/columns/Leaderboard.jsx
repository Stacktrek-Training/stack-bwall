import React from "react";
import "flowbite";
import User from "../assets/icon.jpg";
import User1 from "../assets/icon1.jpg";

const Leaderboard = () => {
  return (
    <>
      <h1 className="mt-4 flex items-center justify-center text-xl font-bold leading-none text-orange-500  dark:text-white">
        Leaderboard
      </h1>

      <div
        className=" mt-5 flex-auto w-72  ml-10  w-82 py-2  border border-white rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700"
        style={{ height: "548px" }}
      >
        <div class=" my-3 mx-4">
          <ul role="list" className="m-0 p-0">
            <li>
              <div class="flex items-center space-x-4 space-y-2">
                <div class="flex-shrink-0">
                  <img class="w-6 h-6 rounded-full" src={User} />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-normal text-gray-900 truncate dark:text-white">
                    Edvenson Jay
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div class="flex-2 min-w-0">
                  <p class="text-sm font-normal text-gray-900 truncate dark:text-white">
                    3205
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                </div>
              </div>
            </li>
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User1}
                    alt="Thomas image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Vonnn einuj anre sabusap
                  </p>
                  <p class="text-xs text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div class="flex-2 min-w-0">
                  <p class="text-sm font-small text-gray-900 truncate dark:text-white">
                    3201
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    points
                  </p>
                </div>
              </div>
            </li>
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
                    alt="Thomas image"
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
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
                    alt="Thomas image"
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
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
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
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
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
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
                    alt="Thomas image"
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
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
                    alt="Thomas image"
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
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
                    alt="Thomas image"
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
            <hr className=" border-gray-200 dark:border-gray-600" />
            <li class="pt-2">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={User}
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
                    3110
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

      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
};

export default Leaderboard;
