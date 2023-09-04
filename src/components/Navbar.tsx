import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // Use the `useLocation` hook to get the current route location
  const location = useLocation();

  return (
    <nav className="h-16 bg-gray-800 text-white flex justify-between items-center px-4">
      <Link to="/" className="text-lg font-bold">
        Demo App
      </Link>
      <div className="flex space-x-4">
        {/* Create a link to the "Contacts" page and highlight it if the current route matches */}
        <Link
          to="/"
          className={`hover:text-gray-300  ${
            location.pathname === '/' ? 'text-sky-500' : ''
          }`}
        >
          Contacts
        </Link>
        {/* Create a link to the "Dashboard" page and highlight it if the current route matches */}
        <Link
          to="/dashboard"
          className={`hover:text-gray-300 ${
            location.pathname === '/dashboard' ? 'text-sky-500' : ''
          }`}
        >
          Charts & Maps
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
