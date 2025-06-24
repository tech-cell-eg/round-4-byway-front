import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";

const BywayNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: "/courses", label: "Categories" },
    { path: "/become-instructor", label: "Teach on Byway" },
  ];

  const authLinks = [
    {
      path: "/cart",
      icon: <FiShoppingCart className="w-5 h-5" />,
    },
    { path: "/login", label: "Log in" },
    { path: "/signup", label: "Sign up", isPrimary: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center text-2xl font-bold text-gray-800 hover:text-gray-900"
            aria-label="Byway Home"
          >
            <img
              src={logo}
              className="w-12 h-12 mr-2"
              alt="Byway Logo"
              loading="lazy"
            />
            <span>Byway</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-around items-center flex-1 mx-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex-1 mx-6 max-w-xl">
              <SearchBar />
            </div>
          </div>
          {/* Desktop Auth Buttons*/}
          <div className="hidden lg:flex items-center space-x-4">
            {authLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                  link.isPrimary
                    ? "bg-gray-600 text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button*/}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {authLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex px-4 py-2 rounded-md text-center justify-center ${
                    link.isPrimary
                      ? "bg-gray-600 text-white hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeMenu}
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BywayNavbar;
