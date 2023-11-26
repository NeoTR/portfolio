import React from "react";
import image from "../assets/image.jpeg";

export default function AboutMe() {
  return (
    <div>
      <div id="aboutme" className="bg-white w-screen min-h-[70vh] flex justify-center items-center py-4">
        <div className="grid xl:grid-cols-2 gap-4 xl:gap-[10vh] px-4">
          <div className="flex justify-center xl:justify-end">
            <img src={image} className="rounded-xl w-full xl:w-[25rem] h-[25rem] object-cover" />
          </div>
          <div className="flex flex-col w-full xl:w-3/4">
            <h1 className="text-[#7843e9] font-bold text-xl">ABOUT ME</h1>
            <h2 className="text-gray-800 font-bold text-3xl">A hard working Full-Stack Developer from the Netherlands</h2>
            <p className="text-gray-600">
              I'm a <span className="font-bold">Full Stack Developer</span> building the Web Applications that lead to the succes of your product. Check out my work at the <span className="font-bold">Portfolio</span> section. <br />
              <br />I also like sharing the things I learn while developing <span className="font-bold">Web Applications</span>. You can find that at my Github or Youtube channel. <br />
              <br /> I'm also open to <span className="font-bold">Job</span> opportunities where I further develop my skills and learn new things. If you have a good opportunity for me then don't hesitate to <span className="font-bold">contact</span> me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
