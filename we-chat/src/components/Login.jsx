import React from "react";

function Login() {
  return (
    <div className="h-screen w-screen flex flex-col  bg-gray-900  ">
      <div className="w-[330px] h-[425px]  rounded-xl py-5   bg-gray-800 flex  flex-col  absolute max-2xl:top-1/2 max-md:top-[42%] left-1/2  -translate-x-1/2 -translate-y-1/2">
        <div className=" text-white  text-2xl font-semibold  text-center">
          Login
        </div>
        <div className="flex flex-col gap-1 px-5">
          <div className="w-full mt-7  text-gray-400  mb-2">Email address</div>
          <input
            type="email"
            className=" bg-transparent  px-2  border-solid border-gray-700 focus:border-teal-500 border-[0.7px] text-white focus:outline-none h-12 rounded-lg "
          ></input>

          <div className="w-full  text-gray-400  mb-[2px]">Password</div>
          <input
            type="password"
            required="true"
            className=" bg-transparent  px-2  border-solid border-gray-700 focus:border-teal-500 border-[0.7px] text-white focus:outline-none h-12 rounded-lg "
          ></input>

          <button
            type="button"
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
    </div>
  );
}

export default Login;
