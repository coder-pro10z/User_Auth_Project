import React from 'react';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';
import { FaIcons } from 'react-icons/fa';
import { useAuth } from './AuthContext';
import {appname} from '../pages/Home'

const NavBar: React.FC = () => {
  const { username } = useAuth(); // Get the username from context

    const location = useLocation();
  const path = location.pathname;

  // Map paths to page titles
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/profile':
        return 'Profile';
      case '/settings':
        return 'Settings';
      case '/logout':
        return 'Logout';
      default:
        return 'MyApp'; // Default title
    }
  };

  return (
    // <header className="w-full bg-blue-600 text-white shadow-md z-50">
    <header className="w-full bg-blue-600 text-white fixed top-0 left-0 z-50 shadow-md">

     <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          {/* Icon or logo on the left */}
          <FaIcons /> {/* Replace with your desired icon */}
          <span className="font-bold text-xl">{appname}</span>
        </div>
        {/* Dynamic title in the center */}
        <div className="flex-1 text-center">
          <span className="text-lg font-semibold">{getPageTitle(path)}</span>
        </div>
        <div className="flex font-semibold justify-between mx-auto space-x-4">
          {username?<span>Welcome, {username}</span>:<a href='/login'>Login</a>}
        <Menu />
          </div>
      </div>
    </header>
  );
};

export default NavBar;


