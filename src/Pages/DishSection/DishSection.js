import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Breakfast from "./Breakfast/Breakfast";
import DishNav from "./DishNav/DishNav";

const DishSection = () => {
    

  return (
    <div className="my-28 ">
      <DishNav></DishNav>
      <Outlet></Outlet>
      

      
    </div>
  );
};

export default DishSection;
