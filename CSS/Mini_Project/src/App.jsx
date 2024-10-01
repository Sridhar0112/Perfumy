//import React from 'react'

import Navbar from "./Navigation/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import "./App.css";
import Products from "./Components/Products.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
