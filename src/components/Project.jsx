import React from 'react';
import Projectcard from '../pages/Projectcard';
import smarthabit from '../Images/React/smarthabit.png';
import resume from '../Images/React/resume.png';
import memory from '../Images/React/memory.png';
import discountcalc from '../Images/React/discountcalc.png';
import weather from '../Images/Js/weather.png';
import online from '../Images/Js/online.png';
import aurevie from '../Images/Html/aure.png';
import budget from '../Images/Html/Budget.png';


function Project() {
  const projectData = [
    {
      id: 1,
      title: "Smart Habit Tracker",
      image: smarthabit,
      description: "A web app to track and manage daily habits, helping users stay consistent and productive.",
      tag: ["All", "React"],
      giturl: "https://github.com/Sharuna-mk/Smart-Habit-Tracker",
      previewurl: "https://smart-habit-tracker-flame.vercel.app"
    },
    {
      id: 2,
      title: "Resume Builder",
      image: resume,
      description: "A web application that allows users to create, customize, and download professional resumes quickly and easily",
      tag: ["All", "React"],
      giturl: "https://github.com/Sharuna-mk/Resume-Frontend",
      previewurl: "https://resume-frontend-gold.vercel.app/"
    },
    {
      id: 3,
      title: "Memory",
      image: memory,
      description: "A space-themed memory game that challenges users to match pairs of cards and test their memory skills.",
      tag: ["All", "React"],
      giturl: "/",
      previewurl: "/"
    },
    {
      id: 4,
      title: "Discount Calculator",
      image: discountcalc,
      description: "A web app to quickly calculate discounts on products and offers.",
      tag: ["All", "React"],
      giturl: "/",
      previewurl: "/"
    },
    {
      id: 5,
      title: "Weather",
      image: weather,
      description: "A web application that fetches real-time weather data from an API, allowing users to check current weather conditions for any location.",
      tag: ["JavaScript"],
      giturl: "https://github.com/Sharuna-mk/Weather",
      previewurl: "https://sharuna-mk.github.io/Weather/"
    },
    {
      id: 6,
      title: "Online Banking",
      image: online,
      description: "An online banking application that allows users to manage accounts, transfer funds, and view transaction history securely.",
      tag: ["JavaScript"],
      giturl: "https://github.com/Sharuna-mk/bank",
      previewurl: "https://sharuna-mk.github.io/bank/"
    },
    {
      id: 7,
      title: "Budget Calculator",
      image: budget,
      description: "A web app to track income and expenses, helping users manage their budget and monitor spending effectively.",
      tag: ["HTML"],
      giturl: "https://github.com/Sharuna-mk/budget_calculator",
      previewurl: "https://sharuna-mk.github.io/budget_calculator/"
    },
  ];

  return (
    <>
      <h1 className="scroll-reveal mt-30 text-4xl text-center font-bold text-gradient bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-700 bg-clip-text text-transparent mt-8">
        My Projects
      </h1>

      {/* <div className='text-white flex flex-row justify-center items-center gap-4 py-6 mt-5'>
        <button className='rounded border-2 border-white px-4 py-2 cursor-pointer text-md 
        hover:bg-blue-700 hover:border-blue-400 '
        >React</button>
        <button  className='rounded border-2 border-white px-4 py-2 cursor-pointer text-md 
        hover:bg-blue-700 hover:border-blue-400 '>JavaScript</button>
        <button  className='rounded border-2 border-white px-4 py-2 cursor-pointer text-md 
        hover:bg-blue-700 hover:border-blue-400 '>HTML</button>
      </div> */}

      <div className='grid md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0 ms-50 me-50 mt-10'>
        {projectData.map((project) => (
          <Projectcard
            key={project.id}
            imgulr={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.giturl}
            previewUrl={project.previewurl}
          />
        ))}
      </div>
    </>
  );
}

export default Project;
