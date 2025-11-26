import React from 'react'
import { FaReact } from "react-icons/fa6";


function About() {
  return (
    <>
      <div className="aboutpage max-w-7xl mx-auto my-24 p-8">
 <h1 className="scroll-reveal  text-4xl mt-10 text-center font-bold text-gradient bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent">
        About Me
      </h1>

 <ul>
  <li>
    <div className=" flex mt-5 ">
    <img src="https://cdn-icons-png.flaticon.com/512/8099/8099466.png" width={'20px'} alt="" />
  <h3 className="scroll-reveal text-2xl font-semibold text-white ms-3">Frontend Developer</h3>
      </div>
<p className="scroll-reveal text-gray-300 mt-2">
I design and implement responsive web applications using <span className="font-medium text-white">React, JavaScript, HTML, and CSS</span>, ensuring intuitive interfaces and maintainable code.
</p>

  </li>
 </ul>
 <ul>
  <li>
  <div className="flex mt-10">
      <FaReact className='text-white text-3xl me-3'/>
  <h3 className="scroll-reveal text-2xl font-semibold text-white">React Developer</h3>
  </div>
<p className="scroll-reveal text-gray-300 mt-2">
Specializing in <span className="font-medium text-white">React.js</span>, I build dynamic and interactive user interfaces that deliver seamless performance and smooth user experiences.
</p>


  </li>
 </ul>
 <ul>
  <li>
    <div className=" flex mt-10">
    <img src="https://cdn-icons-png.freepik.com/512/16236/16236174.png" width={'20px'} alt="" />
<h3 className="scroll-reveal text-2xl font-semibold text-white ms-3">UI Developer</h3>
</div>
<p className="text-gray-300 mt-2 scroll-reveal">
Focused on creating visually appealing and accessible web interfaces using <span className="font-medium text-white">React, HTML, CSS, and JavaScript</span>, with attention to detail and usability.
</p>




  </li>
 </ul>
</div>

    </>
  )
}

export default About
