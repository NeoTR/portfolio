import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaShopify, FaPython, FaCss3Alt, FaReact, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiMongodb, SiMysql, SiMariadb, SiGoogleanalytics } from "react-icons/si";
import "swiper/css";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Shopify", icon: <FaShopify /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "React", icon: <FaReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MariaDB", icon: <SiMariadb /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics /> },
  ];

  return (
    <div className="flex h-[20vh] bg-[#7526D9]">
      <div className="w-full text-white flex items-center justify-center">
        <div className="w-9/12">
          <Swiper spaceBetween={50} slidesPerView={5} loop={true}>
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="md:text-6xl text-5xl">{skill.icon}</div>
                  <div className="text-2xl hidden xl:flex">{skill.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
