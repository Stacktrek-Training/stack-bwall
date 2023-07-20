import React from "react";
import User3 from "../assets/icon3.jpg";
import User4 from "../assets/icon4.png";
import User5 from "../assets/icon5.jpg";

const TopOfTheMonth = () => {
  return (
    <div className="flex items-center justify-center mt-2 mb-2">
      <div
        className="flex flex-col align-middle mr-1 ml-4 mb-10 mt-4 my-5 max-w-3xl px-2 rounded"
        style={{
          border: "2px solid transparent",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          marginBottom: "20px"
        }}
      >
        <div className="flex items-center justify-center mt-4 mb-1">
          <h5 className="text-xl font-bold leading-none text-orange-500 dark:text-white">
            Top of the Month
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="pt-2 pb-0 sm:pt-2 pr-2 pl-2 mt-3">
              <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                <div class="flex-shrink-0">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={User3}
                    alt="Thomas image"
                    style={{ border: "2px solid #ec581d" }}
                  />
                </div>
                <div
                  className="flex-1 min-w-0 mr-4"
                  style={{ textAlign: "justify" }}
                >
                  <p className="text-justify text-sm font-medium text-gray-900 truncate dark:text-white px-2">
                    Joseph Angelo Progados
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400 px-2">
                    Students
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="blue"
                    viewBox="0 0 24 24"
                    strokeWidth=".5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>{" "}
                  5000
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-2 pr-2 pl-2 mt-3">
              <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                <div class="flex-shrink-0">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={User4}
                    alt="Thomas image"
                    style={{ border: "2px solid #ec581d" }}
                  />
                </div>
                <div
                  className="flex-1 min-w-0 mr-4"
                  style={{ textAlign: "justify" }}
                >
                  <p className=" text-justify text-sm font-medium text-gray-900 truncate dark:text-white px-2">
                    Vonnn Einuj Anre Sabusap
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400 px-2">
                    Students
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="blue"
                    viewBox="0 0 24 24"
                    strokeWidth=".5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>{" "}
                  4000
                </div>
              </div>
            </li>
            <li className="pt-3 pb-2 sm:pt-2 pr-2 pl-2 mt-3">
              <div className="flex items-center space-x-4 hover:bg-orange-400 dark:hover:bg-orange-500 rounded">
                <div className="flex-shrink-0">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={User5}
                    alt="Thomas image"
                    style={{ border: "2px solid #ec581d" }}
                  />
                </div>
                <div
                  className="flex-1 min-w-0 mb-2"
                  style={{ textAlign: "justify" }}
                >
                  <p className="text-justify text-sm font-medium text-gray-900 truncate dark:text-white px-2">
                    Thomes Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400 px-2">
                    Students
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="blue"
                    viewBox="0 0 24 24"
                    strokeWidth=".5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
  );
};

export default TopOfTheMonth;
