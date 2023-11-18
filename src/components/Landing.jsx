import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="relative">
      <div className="w-full h-[100vh] flex flex-col items-center justify-center md:mt-0 mt-10">
        {/* Socials */}
        <div className="absolute left-4 py-6 h-[60vh] mb-[30vh] flex flex-col justify-center items-center">
          <div className="border-l-2 border-gray-300 h-1/2 my-2"></div>
          <div className="flex flex-col space-y-4">
            <FaGithub className="text-4xl hover:text-[#7843e9] cursor-pointer transition duration-300 ease-in-out" />
            <FaTwitter className="text-4xl hover:text-[#7843e9] cursor-pointer transition duration-300 ease-in-out" />
            <FaInstagram className="text-4xl hover:text-[#7843e9] cursor-pointer transition duration-300 ease-in-out" />
            <FaYoutube className="text-4xl hover:text-[#7843e9] cursor-pointer transition duration-300 ease-in-out" />
          </div>
          <div className="border-l-2 border-gray-300 h-1/2 my-2"></div>
        </div>
        {/* Content */}
        <div className="flex mb-[30vh] flex-col items-center space-y-[6vh] w-5/12 text-center">
          <h1 className="font-bold md:text-7xl text-3xl">Hey! I'm NeoTR</h1>
          <p className="text-xl text-gray-700 leading-9">A Fullstack Web Developer building the Frontend and Backend of Websites and Web Applications that lead to the success of the overall product</p>
          <div>
            <a href="#aboutme" className="md:px-[5rem] px-4 md:py-4 py-2 bg-[#7843e9] text-white font-medium rounded-md hover:translate-y-[-0.3rem] transition duration-300 ease-in-out">
              About Me
            </a>
          </div>
        </div>
        <div>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
