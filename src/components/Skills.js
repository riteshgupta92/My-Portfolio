import React from 'react'

import HTML from '../Assets/html.png'
import CSS from '../Assets/css.png'
import JAVASCRIPT from '../Assets/javascript.png'
import TAILWIND from '../Assets/tailwind.png'
import REACT from '../Assets/react.png'
import GITHUB from '../Assets/github.png'
import MONGODB from '../Assets/mongodb.png'
import NODEJS from '../Assets/nodejs.png'
import REDUX from '../Assets/redux.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full min-h-screen p-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-green-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with:</p>
        </div>

        {/* Grid Container */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          {[{img: HTML, name: "HTML"}, {img: CSS, name: "CSS"}, {img: JAVASCRIPT, name: "JavaScript"}, {img: REACT, name: "React"}, {img: REDUX, name: "Redux"}, {img: TAILWIND, name: "Tailwind"}, {img: MONGODB, name: "MongoDB"}, {img: NODEJS, name: "NodeJS"}, {img: GITHUB, name: "GitHub"}].map(skill => (
            <div key={skill.name} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={skill.img} alt={`${skill.name} icon`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Skills
