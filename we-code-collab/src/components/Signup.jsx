import React from "react";

function Signup() {
  return (
    <div className="h-screen w-screen flex flex-col  bg-gray-900  ">
      <form action="http://localhost:8001/signup" method="post">
        <div className="w-[330px] h-[455px]  rounded-xl py-5   bg-gray-800 flex  flex-col  absolute max-2xl:top-1/2 max-md:top-[42%] left-1/2  -translate-x-1/2 -translate-y-1/2">
          <div className=" text-white  text-2xl font-semibold  text-center">
            Signup
          </div>
          <div className="flex flex-col gap-2 px-5">
            <div className="w-full mt-7 text-gray-400  mb-[1.5px]">Name</div>
            <input
              type="text"
              name="username"
              id=""
              placeholder="Manpreet"
              required="true"
              className=" bg-transparent  px-2  border-solid border-gray-700 focus:border-teal-500 border-[0.7px] text-white focus:outline-none h-12 rounded-lg "
            ></input>

            <div className="w-full  text-gray-400  mb-[1.5px]">
              Email address
            </div>
            <input
              type="email"
              name="email"
              id=""
              required="true"
              placeholder="abcd@gmail.com"
              className=" bg-transparent  px-2  border-solid border-gray-700 focus:border-teal-500 border-[0.7px] text-white focus:outline-none h-12 rounded-lg "
            ></input>

            <div className="w-full  text-gray-400  mb-[1.5px]">Password</div>
            <input
              type="password"
              required="true"
              name="pwd"
              id=""
              placeholder="*********"
              className=" bg-transparent  px-2  border-solid border-gray-700 focus:border-teal-500 border-[0.7px] text-white focus:outline-none h-12 rounded-lg "
            ></input>

            <button
              type="submit"
              className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Signup
            </button>
            <div className=" text-center text-sm text-gray-400">
              Already have an account?
              <span>
                {" "}
                <a href="/login" className="text-white">
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
