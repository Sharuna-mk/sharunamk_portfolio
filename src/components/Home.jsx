import React, { useEffect } from 'react'
import Wordflick from './Wordflick'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import resume from '../assets/SHARUNA_M_k.pdf'
import profile from '../assets/profile.png'
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  
  return (
    <>
      <div className="animate-profile flex min-h-screen">

<div className="w-full  flex items-center justify-center">
  <div className="w-2/3 flex flex-col justify-center text-white space-y-6">
    

    <div className="min-h-[50px] flex items-center justify-center">
      <Wordflick />
    </div>

    <div className="text-center space-y-3">
      <h1 className="text-3xl font-semibold">Hello, I'm</h1>
      <h1 className="text-5xl font-bold text-gradient bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent">
        SHARUNA M K
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
        I’m a results-driven <span className="font-medium text-white">Frontend Developer</span> specializing in building responsive, accessible, and maintainable web applications. 
        I leverage <span className="font-medium">React, JavaScript</span>, and modern UI frameworks to create clean, user-centric interfaces that align with business goals.
      </p>
    </div>

   
    <div className="flex justify-center gap-4 mt-4">
      <a href="#contact" className="btn bg-blue-600 hover:bg-blue-500 transition-all px-6 py-2 rounded-md font-semibold cursor-pointer">
        Contact Me
      </a>
      <a href={resume} download className="btn border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-all font-semibold">
        Download CV
      </a>
    </div>

    <div className="flex justify-center gap-6 mt-4">
      <a href="https://www.linkedin.com/in/sharuna-m-k" target="_blank" className="hover:text-blue-300 ">
       <FaLinkedin  className='text-2xl'/>
      </a>
      <a href="https://github.com/Sharuna-mk" target="_blank" className="hover:text-gray-400">
        <FaGithubSquare className='text-2xl'/>
      </a>
    </div>
  </div>
</div>




    <div className="w-1/2  flex items-center justify-center">
     <div className="relative overflow-hidden">
  <img
    src={profile}
    alt="profile"
    className=" w-120 h-120 object-cover rounded-full shadow-lg bg-blue-500 me-50"
  />
</div>
    </div>

  </div>

<div id="about">
    <About/>
</div>
<div id="project">
  <Project/>
</div>
<div id='skills'>
<Skills/>
</div>
<div id='contact'>
<Contact/>
</div>


<Footer/>
    </>
  )
}

export default Home
