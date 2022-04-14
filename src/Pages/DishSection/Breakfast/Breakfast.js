import React, { useEffect, useState } from 'react';

const Breakfast = () => {
    const [breakFast, setBreakFast]=useState([]);

    useEffect( ()=>{
        fetch("breakfast.json")
        .then(res=> res.json())
        .then(data => setBreakFast(data));
    } ,[]);

    console.log(breakFast);

    return (
        <div>
           Braekfas 
        </div>
    );
};

export default Breakfast;