import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  let links = [
    { name: "HOME", url: "/" },
    { name: "ABOUT", url: "#aboutme" },
    { name: "CONTACT", url: "#contact" },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-12 bg-white z-50">
      <div>
        <h1 className="text-2xl font-bold">NeoTR</h1>
      </div>
      {/* NavLinks */}
      <div className="md:flex hidden">
        <ul className="flex justify-between items-center space-x-4">
          {links.map((link, index) => (
            <li key={index} className="px-4">
              <a href={link.url} className="font-medium hover:text-[#7843e9] transition ease-in-out duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Icon */}
      <div onClick={handleClick} className="md:hidden text-2xl">
        {!show ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-[80px] left-0 w-screen flex flex-col justify-center items-center bg-white transition-all duration-500 ease-in-out ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="w-full bg-white">
          {links.map((link, index) => (
            <li key={index} className="border-t border-gray-200 py-6 px-12 text-gray-800">
              <a href={link.url} className=" font-medium hover:text-gray-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
