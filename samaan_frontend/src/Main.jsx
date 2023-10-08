import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Signup from "./Components/forms/Signupform";
import OnSearch from "./Components/OnSearch";
import DetailsMain from "./Components/DetailsMain";
import Header from "./Components/Header";
import DOD from "./Components/DOD";
import Carousel from "./Components/Carousel";
import "./App.css";
import "./loader.css";
import axios from "axios";
import ProductCard from "./Components/ProductCard";
import { IoIosArrowForward } from "react-icons/io";
// import mongoose, { connect } from "mongoose";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import ProductsDiv from "./Components/ProductsDiv";
import productDetails from "./context/productDetails";
import Cart from "./Components/Cart";
import Home from "./Home";

function App() {
  return (
    <div className="w-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit   ">
      <div className=" w-[100%]  md:min-h-[8rem] top-0 fixed  z-10 ">
        <Header />
      </div>
      <div className="w-[100%]  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailsMain />} />
          <Route path="/onsearch/:id" element={<OnSearch />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <div className=" w-[100%] min-h-[15rem]   ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div class=" w-[100vw] h-[100vh] flex  justify-center items-center bg-black  " >
  <div class=" w-[13rem] h-[18rem] rounded-xl bg-white flex flex-col justify-start items-center " >
    <div class=" w-[100%] h-[50%]  flex justify-center items-center ">svsv</div>
    <div class=" w-[100%] h-[6%] flex justify-center items-start   "></div>
    <div class=" w-[100%] h-[15%]  flex justify-center items-center ">svsv</div>
    <div class=" w-[100%] h-[15%]  flex justify-center items-center ">svsv</div>
    <div class=" w-[100%] h-[20%]  flex justify-center items-center ">svsv</div>
  </div>
</div> */
}
