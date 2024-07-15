import React, { useState } from 'react';
import logo from './assets/Flare Synthesisss-02.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <Link to="/">
        <div className="text-xl font-bold">
            <img src={logo} className='h-20' alt="Flare Synthesis Logo" />
          </div>
        </Link>
          
          {/* Hamburger menu button for mobile */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/connect" className="text-gray-600 font-bold hover:text-gray-900 transition duration-150 ease-in-out">Connect</a>
            {/* <a href="/about" className="text-gray-600 font-bold hover:text-gray-900 transition duration-150 ease-in-out">About</a> */}
            <a href="mailto:support@flaresynthesis.com" className="text-gray-600 font-bold hover:text-gray-900 transition duration-150 ease-in-out">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col space-y-4 py-4">
            <a href="/connect" className="text-gray-600 font-bold hover:text-gray-900 transition duration-150 ease-in-out">Connect</a>
            {/* <a href="/about" className="text-gray-600 font-bold hover:text-gray-900 transition duration-150 ease-in-out">About</a> */}
            <a href="mailto:support@flaresynthesis.com" className="text-gray-600 font-bold hover:text-gray-900 transition duration-150 ease-in-out">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;