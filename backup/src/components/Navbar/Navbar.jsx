import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import aglivoLogo from '../../assets/images/logos/Aglivo logo(small).png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={aglivoLogo} alt="Aglivo Logo" className="h-8 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/services" className={`${isActive('/services')} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              Services
            </Link>
            <Link to="/features" className={`${isActive('/features')} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              Features
            </Link>
            <Link to="/about" className={`${isActive('/about')} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link 
              to="/contact" 
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 