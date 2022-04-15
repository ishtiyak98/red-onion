import React from "react";
import { Link, Outlet } from "react-router-dom";
import DishNav from "./DishNav/DishNav";

const DishSection = () => {
  return (
    <div className="my-28 ">
      <DishNav></DishNav>
      <Outlet></Outlet>
      <div className="flex justify-center">
        <Link className="bg-red-500 text-white px-8 py-3 my-4 rounded-full" to={"/Checkout"}>Checkout</Link>
      </div>
    </div>
  );
};

export default DishSection;
