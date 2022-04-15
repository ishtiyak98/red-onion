import React from "react";
import CustomLink from "../../CustomLink/CustomLink";

const DishNav = () => {
  return (
    <nav className="flex justify-center space-x-8 lg:space-x-24">
      <CustomLink to={"/breakfast"} className="text-xl lg:text-2xl font-semibold text-slate-800 pb-1 px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Breakfast
      </CustomLink>
      <CustomLink to={"/lunch"} className="text-xl lg:text-2xl font-semibold text-slate-800 pb-1 px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Lunch
      </CustomLink>
      <CustomLink to={"/dinner"} className="text-xl lg:text-2xl font-semibold text-slate-800 pb-1 px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Dinner
      </CustomLink>
    </nav>
  );
};

export default DishNav;
