import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl text-green-700 sm:text-6xl font-bold">
          Ritesh Gupta
        </h1>
        <h2 className="text-4xl text-gray-300  sm:text-6xl font-bold">
          I'm a Web Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
        "I am an aspiring Software Developer with a strong foundation in HTML, CSS, JavaScript, React, Redux, MongoDB, Node.js, and Express.js. I am skilled in creating responsive and visually appealing web applications using Tailwind CSS. I am passionate about learning new technologies and improving user experience."
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 flex items-center hover:bg-green-900 hover:border-green-900">
            View Work
            <span className="hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
