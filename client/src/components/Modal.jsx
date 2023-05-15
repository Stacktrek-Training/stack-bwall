import React, { useState } from "react";
import "./Modal.css"; // Adjust the path based on the location of Modal.css
import ListUsers from "./ListUsers";

export default function Modal() {
  const [modal, setModal] = useState(true);

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
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay h-full overflow-y-hidden w-full"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <div>
              <ListUsers />
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
