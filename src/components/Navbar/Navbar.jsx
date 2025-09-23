import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/coin.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1200px] mx-auto my-6">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-14">
        <p className="text-gray-500 font-medium hidden md:block">Home</p>
        <p className="text-gray-500 font-medium hidden md:block">Fixture</p>
        <p className="text-gray-500 font-medium hidden md:block">Teams</p>
        <p className="text-gray-500 font-medium hidden md:block">Schedules</p>

        <div className="border border-gray-200 py-2.5 px-4 rounded-xl flex items-center space-x-1 font-medium">
          <h3>
            <span>6000000000</span> Coin
          </h3>
          <img className="w-5 h-5" src={dollarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
