import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";


function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation happens only first time
    });
  }, []);


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;
