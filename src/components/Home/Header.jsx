import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import { FaBars } from 'react-icons/fa'; // Ensure you have react-icons installed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md z-20 border-t-2 border-green-800">
      <div className="flex items-center">
        <img src={logo} alt="Groceries Icon" className="h-10 w-10 mr-4" />
        <div className="hidden md:flex space-x-4 text-lg">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-700 hover:text-green-600">Home</a></li>
            <li><a href="/" className="text-gray-700 hover:text-green-600">About</a></li>
            <li><a href="/" className="text-gray-700 hover:text-green-600">Contact</a></li>
            <li><a href="/" className="text-gray-700 hover:text-green-600">Login</a></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <img src={cart} alt="Cart Icon" className="h-10 w-10 mr-4" />
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="/" className="text-gray-700 hover:text-green-600">Home</a></li>
            <li><a href="/" className="text-gray-700 hover:text-green-600">About</a></li>
            <li><a href="/" className="text-gray-700 hover:text-green-600">Contact</a></li>
            <li><a href="/" className="text-gray-700 hover:text-green-600">Login</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
