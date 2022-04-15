import React from "react";
import { Link } from "react-router-dom";

const DishNav = () => {
  return (
    <nav className="flex justify-center space-x-24">
      <Link to={"breakfast"} className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Breakfast
      </Link>
      <Link to={"/lunch"} className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Lunch
      </Link>
      <Link to={"/dinner"} className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Dinner
      </Link>
    </nav>
  );
};

export default DishNav;
