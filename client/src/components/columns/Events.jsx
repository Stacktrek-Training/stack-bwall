import React, { Fragment, useEffect, useState } from "react";
import "flowbite";
import User from "../assets/icon.jpg";
import User1 from "../assets/icon1.jpg";
import User2 from "../assets/icon2.jpg";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
import event5 from "../assets/event5.jpg";
import event6 from "../assets/event6.jpg";
import "./style.css";
import TopVote from "./TopVote";

const Events = () => {
  const events = [
    {
      name: "Multiple Choice Test",
      description:
        "Multiple choice, objective response or MCQ is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list.",
      image: event1,
    },
    {
      name: "Hangman Game",
      description:
        "Hangman is a guessing game,the player thinks of a word, phrase or sentence and the other tries to guess it by suggesting letters within a certain number of guesses.",
      image: event2,
    },
    {
      name: "League of Legends",
      description:
        "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game. Inspired by Defense of the Ancients, a custom map for Warcraft III.",
      image: event3,
    },
    {
      name: "Valorant",
      description:
        "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games.",
      image: event4,
    },
    {
      name: "Mobile Legends: Bang bang",
      description:
        "Mobile Legends: Bang Bang is a mobile multiplayer online battle arena game developed and published by Moonton.",
      image: event5,
    },
    {
      name: "Player Unknown's Battleground: Mobile",
      description:
        "PUBG is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch.",
      image: event6,
    },
    // ... add more events with their respective images
  ];
  return (
    <>
      <h1 className="mt-4 flex items-center justify-center text-xl font-bold leading-none text-orange-500  dark:text-white">
        Event
      </h1>
      <div
        id=" custom-controls-gallery"
        class="relativey w-auto p-4"
        data-carousel="slide"
      >
        <div className="flex items-center justify-center min-h-fit shadow-lg shadow-offset-x-8 shadow-right relative h-72 flex-wrap overflow-hidden rounded-lg pb-2">
          {events.map((event, index) => (
            <div
              className="duration-700 ease-in-out flex flex-col"
              data-carousel-item={index === 0 ? "active" : ""}
              key={index}
            >
              <div className="h-full w-2/3 ">
                <div className="absolute inset-0 flex ">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-2/3"
                  />
                  <div className="flex-grow ml-4">
                    <h1 className=" font-bold text-xl">{event.name}</h1>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div class="flex justify-center items-center pt-4">
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
        </div> */}
      </div>

      <div>
        <div class="mt-2 h-60 px-4 py-1.5 flex flex-col align-middle w-full bg-white rounded-lg shadow-lg dark:border-gray-700">
          <div class="grid grid-cols-2">
            {/* Top Voted */}
            <div class="p-2 grid grid-cols-1 px-2.5">
              <h5 class="text-xl text-center font-bold leading-none text-orange-500  dark:text-white">
                Top Favorites
              </h5>

              <TopVote />
            </div>

            {/* Top Performers */}

            <div class="p-2 grid grid-cols-1 px-2.5">
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
                      5000{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF7A0D"
                        viewBox="0 0 24 24"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        ></path>
                      </svg>
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
                      4000
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF7A0D"
                        viewBox="0 0 24 24"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        ></path>
                      </svg>{" "}
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
                      3000{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF7A0D"
                        viewBox="0 0 24 24"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        ></path>
                      </svg>{" "}
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
