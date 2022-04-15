import React, { useEffect, useState } from 'react';
import LunchCard from './LunchCard/LunchCard';

const Lunch = () => {
    const [lunchDishes, setLunchDishes]=useState([]);

    useEffect( ()=>{
        fetch("lunch.json")
        .then(res=> res.json())
        .then(data => setLunchDishes(data));
    } ,[]);

    console.log(lunchDishes);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-5 px-12 md:px-28 lg:px-44 py-10">
           {
               lunchDishes.map(lunchDish => <LunchCard key={lunchDish.id}  lunchDish={lunchDish}></LunchCard>)
           }
        </div>
    );
};

export default Lunch;