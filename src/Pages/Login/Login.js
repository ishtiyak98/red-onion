import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo2.png";

const Login = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
      <div>
        <div className="my-10 flex justify-center">
            <Link to={"/"}>
                <img src={logo} alt="" width={240}/>
            </Link>
        </div>
        <div className="">
          <form className="space-y-5">
            <input className="w-[320px] lg:w-[440px] font-medium px-5 py-3 block mx-auto rounded-md bg-gray-100 text-slate-800 border-none focus:ring-2 focus:ring-red-500" type="email" name="" id="" placeholder="Email" />
            <input className="w-[320px] lg:w-[440px] font-medium px-5 py-3 block mx-auto rounded-md bg-gray-100 text-slate-800 border-none focus:ring-2 focus:ring-red-500" type="password" name="" id="" placeholder="Password" />
            <input className="w-[320px] lg:w-[440px] font-medium px-5 py-3 block mx-auto rounded-md bg-red-500 text-white border-none hover:cursor-pointer hover:bg-red-600" type="submit" value="Login" />
          </form>
        </div>
        <div className="my-5 text-center">
            <Link className="text-center text-red-500 font-medium" to={"/signup"}>
                Don't have an account
            </Link>
        </div>
      </div>
    </div>
    );
};

export default Login;