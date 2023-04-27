import React from "react";
import "flowbite";

const Events = () => {
  return (
    <body>
      <div
        id=" custom-controls-gallery"
        class="relative w-full"
        data-carousel="slide"
      >
        <div class="relative h-64 overflow-hidden rounded-lg mt-4">
          <div class=" duration-700 ease-in-out" data-carousel-item>
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
          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div class=" duration-700 ease-in-out" data-carousel-item>
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

      <div>
        <div class="flex flex-col align-middle mt-8 w-82 bg-gray-100 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-center mb-4">
            <h5 class="text-xl font-bold leading-none text-orange-500  dark:text-white">
              Top Favorite Campers
            </h5>
          </div>
          <div className="grid grid-cols-2">
            <div class="flex">
              <div>
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li class="py-4 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-1.jpg"
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
                          fill="red"
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
                          fill="red"
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
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-5.jpg"
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
                          fill="red"
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
            {/* end of flex */}
            <div class="flex">
              <div>
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li class="py-4 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-1.jpg"
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
                          fill="red"
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
                          fill="red"
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
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="/docs/images/people/profile-picture-5.jpg"
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
                          fill="red"
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
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </body>
  );
};

export default Events;
