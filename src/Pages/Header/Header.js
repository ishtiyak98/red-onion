import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="bg-white text-black py-6 px-4 sm:px-4 lg:px-20">
      <div className="flex justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" width={140} />
        </Link>
        <div className="flex items-center space-x-6 lg:space-x-10">
          <div className="font-semibold hover:text-red-500 hover:cursor-pointer">
            <BsCart3 size={"1.2em"}></BsCart3>
          </div>
          <Link to={"/login"} className="font-semibold text-slate-700 hover:text-red-500 hover:cursor-pointer">
            Login
          </Link>
          <Link to={"/signup"} className="text-white font-semibold border-2 border-red-500 hover:border-2 hover:bg-white hover:text-slate-700 hover:cursor-pointer bg-red-500 px-6 py-1.5 rounded-full">
              Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
