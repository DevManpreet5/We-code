import "remixicon/fonts/remixicon.css";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

function Home() {
  let [decoded, setdecoded] = useState(null);
  useEffect(() => {
    let data = Cookies.get("user");
    if (data) {
      const decoded = jwtDecode(data);
      setdecoded(decoded);
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col  bg-gray-800   ">
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          background: "#000000",
        }}
      >
        <EffectComposer>
          <Fluid />
        </EffectComposer>
      </Canvas>

      <div className="h-32 flex pl-10 py-2 pr-24 w-screen justify-between max-md:pr-4 max-md:pl-4  ">
        <div className="max-md:hidden">
          <img
            className="   h-36  w-40"
            src="images/image-removebg-preview.png"
          ></img>
        </div>
        <div className="flex justify-between text-white gap-[5vw] mt-3  h-[110%]    items-center ">
          <div className="max-md:hidden">
            {!decoded && (
              <a
                href="/signup"
                className="relative inline-flex items-center px-8 py-3 overflow-hidden text-md  text-white border-2 hover:border-white rounded-full hover:text-black group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-8 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-3 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Signup</span>
              </a>
            )}
          </div>

          {decoded && (
            <button
              className="text-white mt-9   px-10 relative left-1/2  -translate-x-1/2 -trasnlate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                Cookies.remove("user");
                setdecoded(null);
              }}
            >
              Logout
            </button>
          )}

          <div className="max-md:hidden">
            {!decoded && (
              <a
                href="login"
                className="relative inline-flex items-center px-8 py-3 overflow-hidden text-md gap-3 font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-3 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Login</span>
              </a>
            )}
          </div>
          <i className="ri-menu-line  hidden max-md:block  max-md:absolute  right-12 text-4xl"></i>
        </div>
      </div>
      <div className="absolute max-2xl:top-[43%] max-md:top-[48vh]  left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-white font-black  text-center  max-2xl:text-9xl max-md:text-7xl max-sm:text-6xl ">
          WeCode
        </div>
        <div className=" text-zinc-400 text-center mt-[3vh]  max-md:text-1xl max-2xl:text-2xl">
          Code together in real-time with friends – join contests, climb the
          leaderboard, and unleash your coding prowess with WeCode!
        </div>
        <div className="mt-[8vh] flex justify-center items-center gap-[3vw] flex-wrap">
          <a
            href="/language"
            className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
          >
            Code with Friend
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>

          <a
            href="#_"
            className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
          >
            Compete against friend
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
