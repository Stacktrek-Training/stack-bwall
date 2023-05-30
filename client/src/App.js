import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ListUsers from "./components/ListUsers";
import Modal from "./components/Modal";
import { Route,BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
     <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/favorites" element={<ListUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
