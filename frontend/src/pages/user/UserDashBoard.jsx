import React from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609342475528-dd7d93e8311e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80')",
        }}
      >
        <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
          <div className="mx-4 text-center text-white">
            <h1 className="font-bold text-6xl mb-4">This is a test</h1>
            <h2 className="font-bold text-3xl mb-12">This is a test</h2>
            <div>
              <Link
                to='/'
                className="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2"
              >
                Home
              </Link>
              <Link
                to="/findjob"
                className="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2"
              >
                Find Job
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1609343007774-dad98a8f8c33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80')",
        }}
      >
        <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center relative">
          <div className="mx-4 text-center text-white">
            <h1 className="font-bold text-6xl mb-4">This is a test</h1>
            <h2 className="font-bold text-3xl mb-12">This is a test</h2>
          </div>
          <div className="absolute bottom-14">
            <Link
              href="/"
              className="border-2 border-white rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6"
            >
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
