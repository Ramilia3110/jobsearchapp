import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // You can use react-icons for hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navBar p-4 md:p-[3rem] flex justify-between items-center bg-white shadow-md">
      <div className="logoDiv">
        <h1 className="logo text-[20px] md:text-[25px] text-blueColor">
          <strong className="text-blue-700">Job</strong>Search
        </h1>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl text-blueColor">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Menu for large screens */}
      <ul className="hidden md:flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Companies
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Contact
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Register
        </li>
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-8 p-8 shadow-lg md:hidden">
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Companies
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            About
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Contact
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Login
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Register
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
