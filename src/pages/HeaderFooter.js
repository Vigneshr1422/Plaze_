import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderFooter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-[#1320ea] text-white py-4 fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center no-underline text-white" aria-label="Homepage">
            <h1 className="text-3xl font-bold">Plaze_</h1>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="block h-1 w-8 bg-white" />
            <span className="block h-1 w-8 bg-white" />
            <span className="block h-1 w-8 bg-white" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <ul className="flex flex-row space-x-6">
              <li>
                <Link to="/" className="text-xl no-underline text-white hover:no-underline">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-xl no-underline text-white hover:no-underline">Features</Link>
              </li>
              <li>
                <Link to="/about" className="text-xl no-underline text-white hover:no-underline">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-xl no-underline text-white hover:no-underline">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-xl no-underline text-white hover:no-underline">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Popup Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-80 p-6 rounded-lg shadow-lg relative">
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="absolute top-3 right-3 bg-[#1320ea] text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
                aria-label="Close Menu"
              >
                ✕
              </button>

              <ul className="flex flex-col items-center space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-lg no-underline text-[#1320ea] hover:underline"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-lg no-underline text-[#1320ea] hover:underline"
                    onClick={closeMenu}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-lg no-underline text-[#1320ea] hover:underline"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-lg no-underline text-[#1320ea] hover:underline"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-lg no-underline text-[#1320ea] hover:underline"
                    onClick={closeMenu}
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderFooter;
