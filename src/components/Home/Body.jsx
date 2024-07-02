import React from 'react';
import farmer from '../../assets/farmer-bg.png';

const Body = () => {
  return (
    <div className="p-8 text-white flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-green-900 bg-opacity-50 p-6 rounded-lg shadow-lg text-center max-w-lg">
          <h1 className="text-4xl font-extrabold mb-6">Groceries<br />Delivery in 30 Minutes Max!</h1>
          <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti iusto ipsam maiores asperiores hic esse, quae culpa repellendus ratione?</p>
          <div className="flex flex-col space-y-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
              Order Now
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Download App
            </button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img src={farmer} alt="Farmer" className="max-w-xs md:max-w-sm h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Body;
