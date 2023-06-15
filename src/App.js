import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path ="/" Component={Home} />
        <Route exact path ="/rooms/" Component={Rooms} />
        <Route exact path ="/rooms/:slug" Component={SingleRoom} />
        <Route path ="*" Component={Error} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
