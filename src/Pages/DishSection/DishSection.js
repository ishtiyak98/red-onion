import React, { useState } from "react";
import Breakfast from "./Breakfast/Breakfast";

const DishSection = () => {
    const [displayFood, setDisplayFood] = useState('Breafast');

    const handleBreakfast = ()=>{
        setDisplayFood("breakfast");
    }

    const handleLunch = ()=> {
        setDisplayFood("lunch");
    } 
    
    const handleDinner = ()=> {
        setDisplayFood("dinner");
    }

    if(displayFood==="lunch"){
        
        console.log(displayFood);
    }

  return (
    <div className="my-28">
      <nav className="flex justify-center space-x-24">
        <button onClick={handleBreakfast} className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
          Breakfast
        </button>
        <button onClick={handleLunch} className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
          Lunch
        </button>
        <button onClick={handleDinner} className="text-2xl font-semibold text-slate-800 pb-1 lg:px-3 border-b-2 border-w hover:text-red-500 hover:border-b-red-500 hover:cursor-pointer">
          Dinner
        </button>
      </nav>

      {
          displayFood==="lunch" ? <Breakfast></Breakfast> : <Breakfast></Breakfast>
      }
    </div>
  );
};

export default DishSection;
