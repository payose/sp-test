import React from "react";
import Avatar from "../assets/images/avatar.png";
import '../index.css';

function Navbar() {
    return (
        <div className="w-full max-w-md bg-[#3556AB] text-white px-6 py-2">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src={Avatar}
              alt="User"
            />
            <div className="ml-4">
              <h1 className="font-medium">Hello, Jhon</h1>
              <p className="text-[25px] italic font-thin">What are your plans for today?</p>
            </div>
          </div>
        </div>
    );
}
  
export default Navbar;
  