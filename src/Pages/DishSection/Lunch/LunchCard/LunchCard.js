import React from 'react';

const LunchCard = ({lunchDish}) => {
    const { name, img, details, price } = lunchDish;
  return ( 
    <div className="text-center space-y-2 px-6 py-8 rounded-xl transition duration-300 hover:scale-110 hover:shadow-xl">
      <div className="flex justify-center">
        <img className="block" src={img} alt="" width={150} />
      </div>
      <h2 className="text-base font-medium">{name}</h2>
      <h4 className="text-sm text-gray-400">{details}</h4>
      <p className="text-lg font-semibold">${price}</p>
    </div>
    );
};

export default LunchCard;