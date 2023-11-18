import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  const Projects = [
    {
      name: "Neo's Organiser",
      description: "Neo's Organiser is a comprehensive web application designed to help manage your daily tasks and events. It includes a dashboard, a to-do list, a calendar, a notes section, and a settings page. The application is built with ReactJS, React Router for navigation, TailwindCSS for styling and way more.",
      images: ["https://camo.githubusercontent.com/282868305fcbd6c707b5f0ef17440d369b55a1a205002847970a05204ba745d5/68747470733a2f2f692e696d6775722e636f6d2f4f4961354578542e706e67", "https://camo.githubusercontent.com/9ac2931133c14104272639a49296ce47a87fd78b663e75ba68095b22aa5b5135/68747470733a2f2f692e696d6775722e636f6d2f3879433874725a2e706e67", "https://camo.githubusercontent.com/f8156a8dcfea3ba24e0695328966d35c778993bd93b9f2b0325646c12b9b68c4/68747470733a2f2f692e696d6775722e636f6d2f4c7a63566837742e706e67", "https://camo.githubusercontent.com/330cfa538cff58ff1ab47104dc072bb25cb897b027113d07de7ff62f64798104/68747470733a2f2f692e696d6775722e636f6d2f365a4452666e462e706e67"],
      link: "https://github.com/NeoTR/neos-organiser",
    },
    {
      name: "Landing Page + Stock",
      description: " A react based single page website to display your products that includes a way to show stock. This is a good way to make your customers intrested in your product. Created using TailwindCSS, ReactJS, Vite. ",
      images: ["https://camo.githubusercontent.com/d532ba3bd65db5bc7bf5534e3add160c963e49a4dd1461e897b5aa95090503f8/68747470733a2f2f692e696d6775722e636f6d2f586f33766133542e706e67"],
      link: "https://github.com/NeoTR/BusinessPage",
    },
    {
      name: "SpotifyOffline",
      description: "Spotify Offline is a Node.js application that allows you to download your favorite Spotify playlists and listen to them offline. The application uses the Spotify Web API to authenticate with your Spotify account and download your playlists as one MP3 file. It uses React with Tailwind CSS for the frontend.",
      images: ["https://camo.githubusercontent.com/fff25e38487d641ff3ffe6da6afaef71ce5ba249fc36b66ce5412d9fda15d8f4/68747470733a2f2f692e696d6775722e636f6d2f5a4439537536742e706e67"],
      link: "https://github.com/NeoTR/SpotifyOffline",
    },
  ];
  return (
    <div className="bg-neutral-100 min-h-screen w-screen flex flex-col items-center px-4 md:px-0">
      <div className="my-10 text-center flex-col gap-5 w-full md:w-4/12">
        <h1 className="text-2xl md:text-4xl font-bold">PROJECTS</h1>
        <p>Here you will find projects I made for myself or clients. With each project I created I made sure to learn more!</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {Projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ project }) {
  return (
    <div className="overflow-hidden m-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-8">
        <div className="w-full h-[25rem] md:w-[50rem]">
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
            {project.images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-end">
                <img className="rounded-lg object-scale-down border-black border md:h-[25rem] h-full w-full" src={image} alt="project image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <div className="space-y-5 w-full md:w-1/2">
            <h1 className="font-bold text-xl md:text-2xl">{project.name}</h1>
            <p className="text-gray-700 text-start">{project.description}</p>
          </div>
          <div className="mt-5">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#7843e9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Visit Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
