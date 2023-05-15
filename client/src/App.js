import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ListUsers from "./components/ListUsers";
import Modal from "./components/Modal";
function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      {/* <ListUsers/> */}
      {/* <Modal/> */}
    </div>
  );
}

export default App;
