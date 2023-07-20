import React, { useState } from "react";
import User from "../assets/icon.jpg";
import User1 from "../assets/icon1.jpg";
import User2 from "../assets/icon2.jpg";
import User3 from "../assets/icon3.jpg";
import User4 from "../assets/icon4.png";
import User5 from "../assets/icon5.jpg";
import Med from "../assets/medal.png";
import Med1 from "../assets/medalk.png";
import Med2 from "../assets/medall.png";

const Leaderboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleItemHover = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <>
      <div className="flex items-center justify-center mr-5 ml-5 mt-2 px-4 md:px-8">
        <div
          className="flex-auto px-2 py-2 drop-shadow-xl mt-3 mb-3 max-w-3xl bg-blue border border-white rounded-lg shadow-lg"
          style={{
            border: '2px solid transparent',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
          }}
        >
          <div className="flex items-center justify-center mt-2 mb-">
            <h5 className="text-xl font-bold leading-none text-orange-500 dark:text-white">
              Leaderboard
            </h5>


          </div>
          <div className="flow-root">
            <ul role="list">
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">

                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={User}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">

                    <p className="text-sm font-medium text--900 truncate text-black">
                      Edvenson Jay
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="flex-2 min-w-0">
                    <img
                      className="w-8 h-8"
                      src={Med}
                      alt="Thomas image"

                    />
                  </div>
                  <div className="flex-2 min-w-0">
                    <p className="text-sm font-medium text-black-900 truncate text-grey">
                      3205
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      points
                    </p>

                  </div>

                </div>
              </li>
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User1}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
                    />
                  </div>
                  <div class="flex-1 min-w-0">

                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Vonnn Einuj Anre Sabusap
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="flex-2 min-w-0">
                    <img
                      className="w-8 h-8"
                      src={Med1}
                      alt="Thomas image"

                    />
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User2}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
                  <div className="flex-2 min-w-0">
                    <img
                      className="w-8 h-8"
                      src={Med2}
                      alt="Thomas image"

                    />
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User3}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User4}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User5}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User1}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User2}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
              <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-1 mt-3">
                <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={User3}
                      alt="Thomas image"
                      style={{ border: "2px solid #ec581d" }}
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
      </div>


      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
};

export default Leaderboard;
