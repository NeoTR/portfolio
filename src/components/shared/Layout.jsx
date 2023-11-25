import React from "react";
import Nav from "../Nav";
import Landing from "../Landing";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen flex ">
      <Nav />
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
