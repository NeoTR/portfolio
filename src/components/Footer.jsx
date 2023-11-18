import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black w-screen h-auto py-12 flex flex-col items-center space-y-5 px-12 text-white">
      <div className="flex flex-col md:flex-row justify-between  md:w-3/4 space-y-4 w-10/12">
        <div className="w-full md:w-1/3">
          <h2 className="font-bold text-xl">NeoTR</h2>
          <p className="text-sm">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">SOCIAL</h2>
          <div className="flex justify-center space-x-5 mt-4 text-2xl">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/NeoTR" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 border-gray-700 flex justify-center pt-12 border-t">
        <p>© Copyright {new Date().getFullYear()}. Made by NeoTR</p>
      </div>
    </footer>
  );
}
