import React, { useState } from "react";
import Logo from "../components/assets/stackwall.png";
import User from "../components/assets/Pragados.png";
import "flowbite";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="flex-auto">
        <nav className="border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1.5">
            <a href="#" className="flex items-center">
              <img src={Logo} className="h-8 mr-3" alt="stackbwall Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                StackBWall
              </span>
            </a>
            <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
              <div>
                <img
                  id="avatarButton"
                  type="button"
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={User}
                  alt="User dropdown"
                />
              </div>
              <div>
                <svg onClick={toggleModal}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FF7A0D"
                  viewBox="0 0 24 24"
                  strokeWidth=".5"
                  stroke="currentColor"
                  className="w-10 h-10 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  ></path>{" "}
                </svg>
                {modal && (
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <h2>Hello Modal</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident perferendis suscipit officia recusandae,
                        eveniet quaerat assumenda id fugit, dignissimos maxime
                        non natus placeat illo iusto! Sapiente dolorum id
                        maiores dolores? Illum pariatur possimus quaerat ipsum
                        quos molestiae rem aspernatur dicta tenetur. Sunt
                        placeat tempora vitae enim incidunt porro fuga ea.
                      </p>
                      <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                      </button>
                    </div>
                  </div>
                )}
              </div>

              
              <div>
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
