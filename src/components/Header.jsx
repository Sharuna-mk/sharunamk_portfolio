import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0D0D0D]/70 border-b border-[#1F2230]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold tracking-wide">
          Sharuna<span className="text-white">.</span>
        </h1>

        
        <ul className="hidden md:flex gap-10 text-[#C9CDD6] font-medium
        ">
            <li className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
                  <a href="/">Home</a>
            </li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
                 <a href="#project">Project</a></li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
                <a href="#skills">Skills</a>
            </li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
             <a href="#about">About</a>
            </li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
              <a href="#contact">Contact</a>
            </li>
          
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-[#1F2230]">
          <ul className="flex flex-col gap-6 text-[#C9CDD6] text-lg py-6 px-6">
             <li className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
               <a href="/">Home</a>
            </li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
               <a href="#project">Project</a></li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
                <a href="#skills">Skills</a>
            </li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
                  <a href="#about">About</a>
            </li>
            <li  className="relative cursor-pointer hover:text-white transition duration-300 nav-link">
               <a href="#contact">Contact</a>
            </li>
          
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
