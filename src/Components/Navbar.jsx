import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "features", "pricing", "blog", "usd", "signup"];

  return (
    <div className="w-full ">
      {/* Navbar Container */}
      <div className="w-full h-[12vh] bg-[#0C014D] flex items-center px-4 md:px-12">
        {/* Logo */}
        <div className="flex-1">
          <img
            src="data:image/png;base64,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"
            alt="main logo"
            className="w-44"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d={isOpen ?  "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex md:flex-row items-center md:gap-4 text-white font-light capitalize ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              className={`py-2 md:py-0 px-4 hover:underline ${
                index === 4 ? "ml-4 md:ml-20" : ""
              }`}
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border border-[#3C3C3C] w-full"></div>
    </div>
  );
};

export default Navbar;
