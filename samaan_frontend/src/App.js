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
import Cart from "./Components/Cart";
import productDetails from "./context/productDetails";
import AuthContext from "./context/Auth";
import ForgetPass from "./Components/forms/ForgetPass";
import ForgetPassThroughEmail from "./Components/forms/ForgotPassThroughEmail";
import CartContext from './context/CartContext';

import Home from "./Home";

const App = () => {
  const [user, setUser] = React.useState(null);
  const [cart,setCart]=React.useState([])
  const { authTokens} = React.useContext(AuthContext);
  // const fetchCart = async () => {
  //   if(authTokens){
  //   const response = await fetch(
  //     "https://api-krudra9125-gmailcom.vercel.app/api/cart/",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${authTokens["access"]}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log("cartfrom context fetch ",data);
  //   setCart(data);
  // };

// }
  // React.useEffect(() => {
  //   fetchCart();
  // }, [authTokens]);
  return (
    <div className="  w-[100%] h-[100vh]   ">

        <CartContext.Provider value={cart}>
      <Routes>
        <Route to="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailsMain />} />
          <Route path="/onsearch/:id" element={<OnSearch />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/signupuser" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgetPass />} />
        <Route path="/forgotpasswordemail/:a/:b" element={<ForgetPassThroughEmail />} />
      
      </Routes>
    </CartContext.Provider>
    </div>
  );
};

export default App;
const Cust = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return user ? children : <Navigate to="/signupuser" />;
};
