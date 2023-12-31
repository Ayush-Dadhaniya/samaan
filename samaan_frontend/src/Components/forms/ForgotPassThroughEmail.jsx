import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const ForgetPassThroughEmail = () => {
    const params=useParams()
    const navigate=useNavigate()
    console.log(params)
  const [loginUser, setloginUser] = useState();
  const [seepass, setseepass] = useState(false);
  const [seepass1, setseepass1] = useState(false);
  const handlesubmit = async(e) => {
    e.preventDefault();
    try {
      const password=e.target.password.value
      console.log(password)
      const response=await fetch(`https://api-krudra9125-gmailcom.vercel.app/api/password-reset-confirm/${params.a}/${params.b}/`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({"password":password})
      })
      const data=await response.json()
      if(data["errors"])
      {
        navigate("/signupuser")
        alert("linked expired please try again")
      }
      else{
        navigate("/signupuser")
        alert("password changed successfully")
      }
    } catch (error) {
      
    }
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
          <div className="w-[90%] md:w-[60%] h-[100%] flex flex-col rounded-2xl justify-center items-center">
            <div className="w-[100%] ">
              <div className="flex flex-col my-5">
                <h1 className="flex text-3xl font-bold flex-nowrap">Enter New Password</h1>
              </div>
            </div>
            <form onSubmit={handlesubmit} className="w-[100%]">
             
              <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <div className="w-[100%] h-[3rem] flex items-center border border-black rounded-xl ">
                  <input
                    className="w-[100%] h-[100%] rounded-xl outline-none pl-2"
                    type={seepass1 ? "text" : "password"}
                    placeholder="new password"
                    name="password"
                    required={true}
                  />
                  {seepass1 ? (
                    <svg
                      height="30px"
                      width="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => setseepass1(!seepass1)}
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
                      onClick={() => setseepass1(!seepass1)}
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
              <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <button className="w-[100%] h-[3rem] border border-black rounded-lg pl-2 bg-black text-white">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassThroughEmail;
