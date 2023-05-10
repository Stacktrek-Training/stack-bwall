import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ListUsers from "./components/ListUsers";
function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      {/* <ListUsers/> */}
    </div>
  );
}

export default App;
