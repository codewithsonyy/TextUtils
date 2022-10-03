import React from "react";
//import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between shadow-sm px-4 py-2 bg-black">
        <nav>
          <ul className="flex  ">
            <li className="mx-3 cursor-pointer text-white">TextUtils</li>
            <li className="mx-3 cursor-pointer text-white">Home</li>
            <li className="mx-3 cursor-pointer text-white">
              About
              {/* <Link to="/about"></Link> */}
            </li>
          </ul>
        </nav>
        <div>
          <input
            className="bg-gray-100 px-2 py-1 mr-4 rounded-sm focus:outline-none border focus:border-blue-500"
            type="text"
            placeholder="search"
          />
          <button className=" text-white px-2 py-1 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 border-2 active:text-white hover:text-white  ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
