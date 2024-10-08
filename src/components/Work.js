import React from "react";
import weatherImage from "../Assets/Screenshot.png";
import TodoAppImage from "../Assets/Screenshot2.png";
import EntertainmentAppImage from "../Assets/entertainment-app.png";
import FlashCardImage from "../Assets/flashcard.png"


const Work = () => {
  return (
    <div
      name="work"
      className="w-full text-gray-300 bg-[#0a192f] min-h-screen p-4"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Projects Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Todo App */}
          <div className="max-w-sm bg-gray-400 rounded-lg shadow-md overflow-hidden m-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center p-1">Todo App</h2>
            <img className="w-full h-48 object-contain p-1" src={TodoAppImage} alt="Todo App" />
            <div className="p-4">
              <div className="mt-4 flex justify-between">
                <a href="https://riteshgupta92.github.io/Todo-App/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    See Live
                  </button>
                </a>
                <a href="https://github.com/riteshgupta92/Todo-App.git" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Weather App */}
          <div className="max-w-sm bg-gray-400 rounded-lg shadow-md overflow-hidden m-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center p-1">Weather App</h2>
            <img className="w-full h-48 object-contain p-1" src={weatherImage} alt="Weather App" />
            <div className="p-4">
              
            
              <div className="mt-4 flex justify-between">
                <a href="https://riteshgupta92.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    See Live
                  </button>
                </a>
                <a href="https://github.com/riteshgupta92/weather-app.git" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Entertainment-App Project */}
          <div className="max-w-sm bg-gray-400 rounded-lg shadow-md overflow-hidden m-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center p-1">
              Movie App
            </h2>
            <img
              className="w-full h-48 object-contain p-1"
              src={EntertainmentAppImage}
              alt="New Project"
            />
            <div className="p-4">
              <div className="mt-4 flex justify-between">
                <a
                  href="https://entertainment-fac29.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    See Live
                  </button>
                </a>
                <a
                  href="https://github.com/riteshgupta92/entertanment-app/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
         {/* Flashcard Project */}
         <div className="max-w-sm bg-gray-400 rounded-lg shadow-md overflow-hidden m-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center p-1">
              FlashCard Generator
            </h2>
            <img
              className="w-full h-48 object-contain p-1"
              src={FlashCardImage}
              alt="New Project"
            />
            <div className="p-4">
              <div className="mt-4 flex justify-between">
                <a
                  href="https://flashcard-generator-6w7lq4f6x-riteshgupta92s-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    See Live
                  </button>
                </a>
                <a
                  href="https://github.com/riteshgupta92/flashcard-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-900 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
