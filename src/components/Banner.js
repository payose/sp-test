import React from "react";
import Trophy from "../assets/images/trophy.png";
import '../index.css';

function Navbar() {
    return (
        <div className="w-full max-w-md bg-[#9EB031] text-black px-4 py-8 flex justify-between items-center relative">
            <div className="flex items-center gap-3">
                <img
                className=""
                src={Trophy}
                alt="User"
                />
                  <span className="font-bold text-lg text-[#071D55]">Go Pro Upgrade Now</span>  
            </div>
            <span className="absolute top-0 right-4 p-6 bg-[#071D55] text-[#F2C94C]">$1</span>
        </div>
    );
}

export default Navbar;
