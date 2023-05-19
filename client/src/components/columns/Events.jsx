import React from "react";
import "flowbite";
import User from "../assets/icon.jpg";
import User1 from "../assets/icon1.jpg";
import User2 from "../assets/icon2.jpg";
import "./style.css";

const Events = () => {
  return (
    <>
      <div
        id=" custom-controls-gallery"
        class="relativey w-auto pt-2 pb-8"
        data-carousel="slide"
      >
        <div class="flex items-center justify-center min-h-fit shadow-lg shadow-offset-x-8 shadow-right relative h-80 flex-wrap overflow-hidden rounded-lg">
          <div class=" duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class=" duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class=" duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class=" duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class=" duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-center items-center pt-4">
          <button
            type="button"
            class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>


      <div class="grid-col-2 px-2 py-2 flex flex-col align-middle bg-white rounded-lg shadow-lg dark:border-gray-700">
        <div class="grid grid-cols-2">
          {/* Top Voted */}
          <div class="grid grid-cols-1 px-4">
            <h5 class="text-xl text-center font-bold leading-none text-orange-500  dark:text-white">
              Top Favorite
            </h5>

            <ul
              role="list"
              class="divide-y divide-white dark:divide-gray-300"
            >
              <li class="pt-3">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={User}
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Joseph Angelo Progados
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Students
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
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
                    500
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={User1}
                      alt="Thomas image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Vonnn Einuj Anre Sabusap
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Students
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
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
                    400
                  </div>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-4 flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={User2}
                      alt="Thomas image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Students
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
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
                    300
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Top Performers */}
          <div>
            <div class="grid grid-cols-1 px-4">
              <h5 class="text-xl text-center font-bold leading-none text-orange-500  dark:text-white">
                Top Performers
              </h5>
              <ul
                role="list"
                class="divide-y divide-white dark:divide-gray-200"
              >
                <li class="pt-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={User}
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Joseph Angelo Progados
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Students
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF7A0D"
                        viewBox="0 0 24 24"
                        stroke-width=".5"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        ></path>
                      </svg>{" "}
                      5000
                    </div>
                  </div>
                </li>
                <li class="pt-3 pb-0 sm:pt-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={User1}
                        alt="Thomas image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Vonnn Einuj Anre Sabusap
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Students
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF7A0D"
                        viewBox="0 0 24 24"
                        stroke-width=".5"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        ></path>
                      </svg>{" "}
                      4000
                    </div>
                  </div>
                </li>
                <li class="pt-3 pb-0 sm:pt-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={User2}
                        alt="Thomas image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Thomes Lean
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Students
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF7A0D"
                        viewBox="0 0 24 24"
                        stroke-width=".5"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        ></path>
                      </svg>{" "}
                      3000
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
};

export default Events;
