import React, { useState } from "react";
import Logo from "../components/assets/stackwall.png";
import User from "../components/assets/Pragados.png";
import "flowbite";
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term, such as sending it to a server
    console.log("Search term:", searchTerm);
  };
  return (
    <>
      <div class="flex-auto">
        <nav class="border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1.5">
            <a href="#" class="flex items-center">
              <img src={Logo} class="h-8 mr-3" alt="stackbwall Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                StackBWall
              </span>
            </a>
            <div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
              <div>
                <img
                  id="avatarButton"
                  type="button"
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  class="w-10 h-10 rounded-full cursor-pointer"
                  src={User}
                  alt="User dropdown"
                />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FF7A0D"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  ></path>
                </svg>
              </div>
              <div onClick={handleModalOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              {modalOpen && (
                <div className=" modal fixed inset-0 flex items-center justify-center z-40 ">
                  <div className="bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900 border-black-800 w-fit p-12 mt-8">
                    <form onSubmit={handleSearchSubmit}>
                      <div class="w-96 relative p-0.5">

                        <input
                          type="search"
                          id="default-search"
                          class=" w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search..."
                          required
                        />
                      </div>
                    </form>
                    <div class="max-h-72 overflow-y-scroll w-82">
                      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div class=" text-center ">
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div class="mb-8">
                              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                            </div>
                            <div class="text-center">
                              <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                              <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Vote</button>
                            </div>
                          </div>
                          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div class="mb-8">
                              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                            </div>
                            <div class="text-center">
                              <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                              <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
                              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Vote</button>
                            </div>
                          </div>
                          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div class="mb-8">
                              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
                            </div>
                            <div class="text-center">
                              <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                              <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Vote</button>
                            </div>
                          </div>
                          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div class="mb-8">
                              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                            </div>
                            <div class="text-center">
                              <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                              <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Vote</button>
                            </div>
                          </div>
                          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div class="mb-8">
                              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                            </div>
                            <div class="text-center">
                              <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                              <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
                              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Vote</button>
                            </div>
                          </div>
                          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div class="mb-8">
                              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
                            </div>
                            <div class="text-center">
                              <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                              <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Vote</button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div class="justify-center items-center  bg-red-600 text-white rounded-lg w-fit mt-4 px-1">
                      <button
                        className="modal-close"
                        onClick={handleModalClose}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
};
export default Navbar;
