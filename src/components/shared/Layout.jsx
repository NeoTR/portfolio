import React from "react";
import NavBar from "../NavBar.jsx";
import Landing from "../Landing.jsx";
import AboutMe from "../AboutMe.jsx";
import Skills from "../Skills.jsx";
import Projects from "../Projects.jsx";
import Contact from "../Contact.jsx";
import Footer from "../Footer.jsx";

export default function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen flex ">
      <NavBar />
      <div className="bg-neutral-100 w-screen h-screen mt-[80px]">
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
