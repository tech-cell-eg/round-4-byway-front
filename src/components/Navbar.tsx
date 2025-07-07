import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiLogOut,
  FiSettings,
  FiBook,
  FiGlobe,
  FiBell,
  FiHeart,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import defaultAvatar from "../assets/logo.png";
import { ModeToggle } from "./mode-toggle";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: defaultAvatar,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({
      name: "Ahmed Mohamed",
      email: "ahmed@example.com",
      avatar: defaultAvatar,
    });
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setUser({
      name: "New Ahmed",
      email: "new@example.com",
      avatar: defaultAvatar,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { path: "/courses", label: "Categories" },
    { path: "/instructor", label: "Teach on Byway" },
  ];

  const authLinks = [
    {
      path: "/cart",
      icon: <FiShoppingCart className="w-5 h-5" />,
    },
    {
      path: "/login",
      label: "Log in",
      onClick: handleLogin,
    },
    {
      path: "/signup",
      label: "Sign up",
      isPrimary: true,
      onClick: handleSignup,
    },
  ];

  const dropdownLinks = [
    {
      path: "/profile",
      label: "My Account",
      icon: <FiUser className="w-4 h-4" />,
    },
    {
      path: "/my-learning",
      label: "My Learning",
      icon: <FiBook className="w-4 h-4" />,
    },
    {
      label: "Switch Language",
      icon: <FiGlobe className="w-4 h-4" />,
    },
    {

      label: "Dark Mode",
      icon: <FiSettings className="w-4 h-4" />,
    },
    {
      path: "/logout",
      label: "Logout",
      icon: <FiLogOut className="w-4 h-4" />,
      onClick: handleLogout,
    },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const IconGroup = () => (
    <div className="flex items-center space-x-4">
      <Link
        to="/wishlist"
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        aria-label="Wishlist"
      >
        <FiHeart className="w-5 h-5" />
      </Link>
      <Link
        to="/cart"
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        aria-label="Shopping Cart"
      >
        <FiShoppingCart className="w-5 h-5" />
      </Link>
      <Link
        to="/notifications"
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        aria-label="Notifications"
      >
        <FiBell className="w-5 h-5" />
      </Link>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-900 transition-colors duration-200"
            aria-label="Byway Home"
          >
            <img
              src={logo}
              className="w-12 h-12 mr-2 transition-transform duration-200 hover:scale-105"
              alt="Byway Logo"
              loading="lazy"
            />
            <span>Byway</span>
          </Link>
          <div className="hidden lg:flex items-center flex-1 mx-8">
            <div className="flex items-center justify-around w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex-1 mx-6">
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoggedIn ? (
              authLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.path}
                  onClick={link.onClick}
                  className={`cursor-pointer flex items-center px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${
                    link.isPrimary
                      ? "bg-gray-600 text-white hover:bg-gray-700"
                      : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                  {link.icon}
                </Link>
              ))
            ) : (
              <>
                <ModeToggle />
                <IconGroup />
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 focus:outline-none cursor-pointer"
                  >
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-700 dark:text-gray-200">
                      {user.name}
                    </span>
                  </button>

                  {/* Dropdown menu with transition */}
                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 z-50 transform transition-all duration-200 origin-top-right ${
                      isDropdownOpen
                        ? "scale-100 opacity-100 pointer-events-auto"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`}
                  >
                    {/* {dropdownLinks.map((item) => (
                      <div
                        key={item.label} */}

                    {dropdownLinks.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          if (item.onClick) item.onClick();
                          setIsDropdownOpen(false);
                        }}
                        className="cursor-pointer flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            className="cursor-pointer lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <FiMenu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${
              isMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
            }
            bg-white dark:bg-gray-900
          `}
        >
          <div className="pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="mb-2">
              <SearchBar />
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              {!isLoggedIn ? (
                authLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      if (link.onClick) link.onClick();
                      closeMenu();
                    }}
                    className={`flex px-4 py-2 rounded-md text-center justify-center transition-colors duration-300 ${
                      link.isPrimary
                        ? "bg-gray-600 text-white hover:bg-gray-700"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center px-4 py-2">
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-around px-4 py-2">
                    <IconGroup />
                  </div>

                  {/* Dropdown Links */}
                  {dropdownLinks.map((item) => (
                    <div
                      key={item.label}
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        closeMenu();
                      }}
                      className="cursor-pointer flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;