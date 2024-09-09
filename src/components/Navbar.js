import React from "react";
import { useState } from "react";
import { FaBars,FaTimes,FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);
  return (
    <div className="fixed max-w-screen-2xl h-[80px] flex justify-between items-center text-gray-300 container mx-auto px-4 md:px-20 bg-[#0a192f] ">
      <div>
        <h1 className="text-green-700 text-xl font-serif">RK</h1>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li><Link className="nav-link" to="home" smooth={true} duration={500}>HOME</Link></li>
        <li><Link className="nav-link" to="about" smooth={true} duration={500}>ABOUT</Link></li>
        <li><Link className="nav-link" to="skills" smooth={true} duration={500}>SKILLS</Link></li>
        <li><Link className="nav-link" to="work" smooth={true} duration={500}>WORK</Link></li>
        <li><Link className="nav-link" to="contact" smooth={true} duration={500}>CONTACT</Link></li>
      </ul>

      {/* Hamberger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
       {!navbar ?  <FaBars /> : <FaTimes/>}
      </div>
      {/* Mobile-Menu */}
      <ul
        className={!navbar? "hidden": "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex justify-center items-center flex-col"}>
        <li className="py-6 text-3xl"><Link className="nav-link" to="home" smooth={true} duration={500} onClick={handleClick}>HOME</Link></li>
        <li className="py-6 text-3xl"><Link className="nav-link" to="about" smooth={true} duration={500} onClick={handleClick}>ABOUT</Link></li>
        <li className="py-6 text-3xl"><Link className="nav-link" to="skills" smooth={true} duration={500} onClick={handleClick}>SKILLS</Link></li>
        <li className="py-6 text-3xl"><Link className="nav-link" to="work" smooth={true} duration={500} onClick={handleClick}>WORK</Link></li>
        <li className="py-6 text-3xl"><Link className="nav-link" to="contact" smooth={true} duration={500} onClick={handleClick}>CONTACT</Link></li>
      </ul>
      {/* social-icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-[3px] hover:ml-[-10px] duration-300 bg-blue-600"><a className="flex justify-between item-center w-full text-grey-300" href="https://www.linkedin.com/in/ritesh-gupta-9b8362169/" target="blank">LinkedIn <FaLinkedin size={30}/></a></li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-[3px]  hover:ml-[-10px] duration-300 bg-slate-700"><a className="flex justify-between item-center w-full text-grey-300" href="https://github.com/riteshgupta92" target="blank">Github <FaGithub size={30}/></a></li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-[3px]  hover:ml-[-10px] duration-300 bg-red-500"><a className="flex justify-between item-center w-full text-grey-300" href="/">Email <HiOutlineMail  size={30}/></a></li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-[3px]  hover:ml-[-10px] duration-300 bg-orange-500 "><a className="flex justify-between item-center w-full text-grey-300" href="/">Resume <BsFillPersonLinesFill  size={30}/></a></li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
