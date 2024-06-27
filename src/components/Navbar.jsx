import  { useState } from 'react';
import Frame from "../assets/Frame 01.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Frame} alt="Logo" className="h-10 mr-4" />
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Solutions</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">News & Insights</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">About</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">Solutions</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">News & Insights</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">Contact Us</a>
            <a href="#" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
