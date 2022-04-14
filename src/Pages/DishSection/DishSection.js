import React from "react";
import Breakfast from "./Breakfast/Breakfast";
import DishNav from "./DishNav/DishNav";

const DishSection = () => {
  return (
    <div className="my-28">
      <DishNav></DishNav>
      <Breakfast></Breakfast>
    </div>
  );
};

export default DishSection;
