import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Ritesh Gupta, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
            "I am an aspiring Software Developer with a strong foundation in HTML, CSS, JavaScript, React, Redux, MongoDB, Node.js, and Express.js. I am skilled in creating responsive and visually appealing web applications using Tailwind CSS. I am passionate about learning new technologies and improving user experience."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
