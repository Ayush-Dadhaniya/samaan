import React, { useState, useContext } from "react";
import AuthContext from "../../context/Auth";
import { Form,useNavigate } from "react-router-dom";
const Userform = () => {
  const navigate = useNavigate();
  const { loginUser, signupuser } = useContext(AuthContext);
  const [loginform, setloginform] = React.useState(false);
  const [forgotpasswordform, setforgotpasswordform] = React.useState(false);
  const [password, setpassword] = React.useState("");
  const [password2, setpassword2] = React.useState("");
  const [seepass, setseepass] = React.useState(false);
  const [seepass3, setseepass3] = React.useState(false);
  const [seepass2, setseepass2] = React.useState(false);
  const [enterforgetpass, setenterforgetpass] = React.useState(false);

  const handlelogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    await fetch("https://api-krudra9125-gmailcom.vercel.app/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
        } else {
          alert("EMAIL OR PASSWORD ARE INCORRECT");
        }
      });
  };
  const handlesignup = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const name = e.target[1].value;
    const address = e.target[4].value;
    if (password === password2) {
      fetch("https://api-krudra9125-gmailcom.vercel.app/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          password2: password,
          tc: "True",
          name: name,
          address: address,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data["message"]) {
            console.log(data);
          } else {
            alert("EMAIL aleready exist");
          }
        });
    } else {
      alert("PASSWORD DOES NOT MATCH");
    }
  };

  const handleforgotpassword = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    await fetch(
      "https://api-krudra9125-gmailcom.vercel.app/api/send-reset-password/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data["errors"]) {
          console.log(data);
          alert("user not found");
        } else {
          console.log(data);
          navigate("/")
          alert("email sent");
        }
      });
  };
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row justify-center items-center  ">
      <div className="w-[100%] h-[100%] max-w-screen-2xl max-h-[800px] flex justify-center items-center  ">
        <div className=" hidden md:flex md:w-[50%] h-[100%]   justify-center items-center ">
          <img
            className=" h-[80%] w-[80%] object-contain "
            src="./login_left.svg"
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-[100%] md:w-[50%] h-[100%] flex justify-center items-center flex-col">
          <div className="w-[100%] h-[100%] flex flex-col rounded-2xl justify-around items-center">
            {/* <div className="w-[100%] h-[4rem] flex justify-center items-center transition-all duration-700 ">
              <div
                className={`w-[50%] h-[4rem] flex justify-center items-center transition-all duration-700 cursor-pointer  ${
                  loginform ? "bg-black text-white" : "text-black"
                } rounded-xl   `}
                onClick={() => {
                  setloginform(true);
                  setforgotpasswordform(false);
                }}
              >
                <h1 className="text-xl font-bold">Login</h1>
              </div>
              <div
                className={`w-[50%] h-[4rem] flex justify-center items-center transition-all duration-700 cursor-pointer ${
                  loginform ? " text-black" : "bg-black text-white "
                }  rounded-xl  `}
                onClick={() => {
                  setloginform(false);
                }}
              >
                <h1 className="text-xl font-bold">Create Account</h1>
              </div>
            </div> */}
            {loginform ? (
              <div className="w-[100%] h-[21rem] flex justify-center items-center ">
                <div className="w-[100%] md:w-[80%] h-[21rem] flex justify-center items-center flex-col ">
                  {!forgotpasswordform ? (
                    <div className="w-[90%] md:w-[70%]">
                      <div className="w-[100%] ">
                        <div className="flex flex-col my-5">
                          <h1 className="flex text-3xl font-bold">
                            Login here
                          </h1>
                          <p className="flex">
                            Hello there, we are happy to see you back.
                          </p>
                        </div>
                      </div>
                      <form onSubmit={loginUser} className="w-[100%]">
                        <div className="w-[100%] h-[100%] flex justify-center items-center ">
                          <input
                            className="w-[100%] h-[3rem] border border-black rounded-xl pl-2"
                            type="text"
                            required={true}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            placeholder="Email"
                          />
                        </div>
                        <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                          <div className="w-[100%] h-[3rem] flex items-center border border-black rounded-xl ">
                            <input
                              className="w-[100%] h-[100%] rounded-xl outline-none pl-2"
                              type={seepass ? "text" : "password"}
                              placeholder="Password"
                              required={true}
                            />
                            {seepass ? (
                              <svg
                                height="30px"
                                width="30px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setseepass(!seepass)}
                                className="pr-1 cursor-pointer"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <path
                                    d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21"
                                    stroke="black"
                                    stroke-width="0.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>{" "}
                                </g>
                              </svg>
                            ) : (
                              <svg
                                height="30px"
                                width="30px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setseepass(!seepass)}
                                className="cursor-pointer"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <path
                                    d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z"
                                    stroke="black"
                                    stroke-width="0.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>{" "}
                                </g>
                              </svg>
                            )}
                          </div>
                        </div>
                        <div
                          onClick={() => {
                            setforgotpasswordform(true);
                          }}
                          className="flex justify-end cursor-pointer w-[100%]"
                        >
                          <p style={{ fontWeight: "600" }}>Forgot Password?</p>
                        </div>
                        <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                          <button className="w-[100%] h-[3rem] border border-black rounded-xl pl-2 bg-black text-white">
                            Login
                          </button>
                        </div>
                      </form>
                      <div className="w-[100%] flex justify-center">
                        Create New Account?{" "}
                        <span
                          onClick={() => {
                            setloginform(false);
                            setforgotpasswordform(true);
                          }}
                          className="font-medium underline cursor-pointer"
                          style={{ color: "#FF725E" }}
                        >
                          Click here
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[100%] flex flex-col items-center justify-center">
                      <div className="w-[90%] md:w-[70%] flex">
                        <div
                          className="border border-black cursor-pointer rounded-2xl hover:shadow-lg"
                          onClick={() => setforgotpasswordform(false)}
                        >
                          <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill="#000000"
                                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                              ></path>
                              <path
                                fill="#000000"
                                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                     
                        <form
                          onSubmit={handleforgotpassword}
                          className="w-[90%] md:w-[70%]"
                        >
                          <div className="w-[100%] ">
                            <div className="flex flex-col my-5">
                              <h1 className="flex text-3xl font-bold">
                                Forget your Password
                              </h1>
                            </div>
                          </div>
                          <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                            <input
                              className="w-[100%] h-[3rem] border border-black rounded-lg pl-2"
                              type="text"
                              placeholder="Enter Your Email"
                              required={true}
                              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            />
                          </div>

                          <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                            <button className="w-[100%] h-[3rem] border border-black rounded-lg pl-2 bg-black text-white">
                              Send
                            </button>
                          </div>
                        </form>
                      
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-[100%] h-[100%] flex flex-col justify-center items-center ">
                <div className="w-[100%] md:w-[80%] h-[100%] flex justify-center items-center flex-col ">
                  <div className="w-[90%] md:w-[70%] ">
                    <div className="flex flex-col my-5">
                      <h1 className="flex text-3xl font-bold">
                        Create an Account
                      </h1>
                      <p className="flex">
                        Hello there, Let's start your journey with us.
                      </p>
                    </div>
                  </div>
                  <form onSubmit={signupuser} className="w-[90%] md:w-[70%]">
                    {/* {!CreatePass ? ( */}
                    {/* <> */}
                    <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                      <input
                        className="w-[100%] h-[2.5rem] border border-black rounded-lg pl-2"
                        type="email"
                        placeholder="Email"
                        required={true}
                        name="email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        style={{ borderColor: "#455A64" }}
                      />
                    </div>
                    <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                      <div className="w-[100%] h-[2.5rem] flex items-center border border-black rounded-lg ">
                        <input
                          className="w-[100%] h-[100%] rounded-xl outline-none pl-2"
                          type={seepass2 ? "text" : "password"}
                          placeholder="Enter Your Password"
                          required={true}
                          name="password"
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]){8,}$"
                          style={{ borderColor: "#455A64" }}
                        />
                        {seepass ? (
                          <svg
                            height="30px"
                            width="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setseepass2(!seepass2)}
                            className="pr-1 cursor-pointer"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21"
                                stroke="black"
                                stroke-width="0.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        ) : (
                          <svg
                            height="30px"
                            width="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setseepass2(!seepass2)}
                            className="cursor-pointer"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z"
                                stroke="black"
                                stroke-width="0.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                      <div className="w-[100%] h-[2.5rem] flex items-center border border-black rounded-lg ">
                        <input
                          className="w-[100%] h-[100%] rounded-xl outline-none pl-2"
                          type={seepass3 ? "text" : "password"}
                          placeholder="Confirm Password"
                          name="password2"
                          
                          required={true}
                          onChange={(e) => {
                            setpassword2(e.target.value);
                          }}
                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]){8,}$"
                          style={{ borderColor: "#455A64" }}
                        />
                        {seepass3 ? (
                          <svg
                            height="30px"
                            width="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setseepass3(!seepass3)}
                            className="pr-1 cursor-pointer"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21"
                                stroke="black"
                                stroke-width="0.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        ) : (
                          <svg
                            height="30px"
                            width="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setseepass3(!seepass3)}
                            className="cursor-pointer"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z"
                                stroke="black"
                                stroke-width="0.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                          <div
                            className="w-[100%] h-[2.5rem] border border-black rounded-lg pl-2 bg-black text-white flex items-center justify-center"
                            onClick={handleNextClick}
                          >
                            Next
                          </div>
                        </div> */}
                    {/* <div className="flex items-center justify-center">
                          Already have an account?{" "}
                          <span
                            onClick={() => {
                              setloginform(true);
                              setforgotpasswordform(false);
                            }}
                            className="font-medium underline cursor-pointer"
                            style={{ color: "#FF725E" }}
                          >
                            login now
                          </span>
                        </div> */}

                    {/* // ) : (
                    //   ""
                    // )}
                    // {CreatePass ? (
                    //   <> */}
                    <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                      <input
                        className="w-[100%] h-[2.5rem] border border-black rounded-lg pl-2"
                        type="text"
                        placeholder="Name"
                        required={true}
                        name="name"
                        pattern="^[a-zA-Z]{4,}$"
                        style={{ borderColor: "#455A64" }}
                      />
                    </div>
                    <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                      <textarea
                        className="w-[100%] h-[2.5rem] flex justify-center items-center border border-black pl-2 rounded-lg"
                        placeholder="enter your address"
                        required={true}
                        name="address"
                        style={{ borderColor: "#455A64" }}
                      ></textarea>
                    </div>
                    <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                      <button
                        className="w-[100%] h-[2.5rem] border border-black rounded-lg pl-2 bg-black text-white"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      Already have an account?{" "}
                      <span
                        onClick={() => {
                          setloginform(true);
                          setforgotpasswordform(false);
                        }}
                        className="font-medium underline cursor-pointer"
                        style={{ color: "#FF725E" }}
                      >
                        login now
                      </span>
                    </div>
                    {/* </>:''} */}
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userform;
