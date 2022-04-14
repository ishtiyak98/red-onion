import React from "react";

const DishNav = () => {
  return (
    <nav className="flex justify-center space-x-24">
      <div className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Breakfast
      </div>
      <div className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Lunch
      </div>
      <div className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
        Dinner
      </div>
    </nav>
  );
};

export default DishNav;
