import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/login", {
          method: "POST",
          credentials: "include",
        });
        const data = await res.json();
        console.log(data.email);
        setResponse(data);
        if (!data.email) {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);
  return (
    <div className="h-screen w-screen flex flex-col  bg-gray-900  ">
      <form action="http://localhost:8001/login" method="post">
        <div className="w-[330px] h-[425px]  rounded-xl py-5   bg-gray-800 flex  flex-col  absolute max-2xl:top-1/2 max-md:top-[42%] left-1/2  -translate-x-1/2 -translate-y-1/2">
          <div className=" text-white  text-2xl font-semibold  text-center">
            Login
          </div>
          <div className="flex flex-col gap-1 px-5">
            <div className="w-full mt-7  text-gray-400  mb-2">
              Email address
            </div>

            <input
              type="email"
              name="email"
              placeholder="test@gmail.com"
              className=" bg-transparent  px-2  border-solid border-gray-700 focus:border-teal-500 border-[0.7px] text-white focus:outline-none h-12 rounded-lg "
            ></input>

            <div className="w-full  text-gray-400  mb-[2px]">Password</div>
            <input
              type="password"
              name="pwd"
              required="true"
              placeholder="*********"
              className=" bg-transparent  px-2  border-solid border-gray-700 focus:border-teal-500 border-[0.7px] text-white focus:outline-none h-12 rounded-lg "
            ></input>

            <button
              type="submit"
              className="text-white mt-9 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className=" text-center text-sm mt-4 text-gray-400">
              Don't have an account?
              <span>
                <a href="/signup" className="text-white ml-1">
                  Signup
                </a>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
