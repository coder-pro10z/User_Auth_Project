import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route location

  // Close menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Array of menu items
  const menuItems = [
    { to: '/profile', label: 'Profile' },
    { to: '/settings', label: 'Settings' },
    { to: '/logout', label: 'Logout' },
    { to: '/login', label: 'Login' }
  ];

  return (
    <div className="relative">
      <button
        className="text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars size={24} />
      </button>
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;

