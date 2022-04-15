import React, { useEffect, useState } from 'react';
import BreakfastCard from './BreakfastCard/BreakfastCard';

const Breakfast = () => {
    const [breakFastDishes, setBreakFastDishes]=useState([]);

    useEffect( ()=>{
        fetch("breakfast.json")
        .then(res=> res.json())
        .then(data => setBreakFastDishes(data));
    } ,[]);

    console.log(breakFastDishes);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-5 px-12 md:px-28 lg:px-44 py-10">
           {
               breakFastDishes.map(breakFastDish => <BreakfastCard key={breakFastDish.id}  breakFastDish={breakFastDish}></BreakfastCard>)
           }
        </div>
    );
};

export default Breakfast;