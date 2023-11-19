import React from "react";
import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";
import AboutMe from "@components/AboutMe";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

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
