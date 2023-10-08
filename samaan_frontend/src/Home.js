import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Signup from "./Components/forms/Userform";
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
const Home = () => {
  const [product_data, setproduct_data] = React.useState(null);
  // useLayoutEffect(() => {
  //   const fetchdata = async () => {
  //     await fetch("https://api-krudra9125-gmailcom.vercel.app/api/products/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setproduct_data(data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   // fetchdata();
  // }, []);
  return (
    <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center mt-[8rem]  overflow-scroll  ">
      <div className=" w-[100%]    ">
        <Carousel />
      </div>

      <div className=" w-[100%] md:min-h-[27rem]   flex justify-center items-center ">
      
          <div
            id="products"
            className="  w-[100%]   flex flex-col gap-4  justify-between items-start  "
          >
            <div className="w-[100%] h-[20%] flex justify-between px-2   md:px-8 items-center ">
              <div>
                <span className=" text-xl md:text-5xl  font-[900] drop-shadow-xl    ">
                  DEALS OF THE DAY
                </span>
              </div>
              <div>
                <button className="bg-yellow-300 text-black   md:w-[11.6rem]  flex  rounded-xl shadow-lg md:text-2xl  items-center py-2 px-2 font-bold  ">
                  <span>Explore More</span>
                  <IoIosArrowForward />{" "}
                </button>
              </div>
            </div>
            <div className="w-[100%] h-[80%] flex justify-between gap-8 items-center  ">
              <DOD />
            </div>
          </div>
       
        
      </div>

       
        <ProductsDiv title={"Dairy,Bread&Eggs"} Category="dairy" />
      
     
        <ProductsDiv title={"biscuts"} Category="biscuts" />
     
     
        <ProductsDiv title={"namkeen"} Category="namkeen" />
     
     
        <ProductsDiv title={"Munchies"} Category="snacks" />
     
    </div>
  );
};

export default Home;
