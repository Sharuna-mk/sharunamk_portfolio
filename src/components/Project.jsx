import React, { useState } from 'react';
import Projectcard from '../pages/Projectcard';
import smarthabit from '../Images/React/smarthabit.png';
import resume from '../Images/React/resume.png';
import memory from '../Images/React/memory.png';
import discountcalc from '../Images/React/discountcalc.png';
import weather from '../Images/Js/weather.png';
import online from '../Images/Js/online.png';
import aurevie from '../Images/Html/aure.png';
import budget from '../Images/Html/Budget.png';

const projectData = [
  {
    id: 1, title: "Smart Habit Tracker", image: smarthabit,
    description: "Track and manage daily habits, helping users stay consistent and productive.",
    filter: "React",
    giturl: "https://github.com/Sharuna-mk/Smart-Habit-Tracker",
    previewurl: "https://smart-habit-tracker-flame.vercel.app"
  },
  {
    id: 2, title: "Resume Builder", image: resume,
    description: "Create, customize and download professional resumes quickly and easily.",
    filter: "React",
    giturl: "https://github.com/Sharuna-mk/Resume-Frontend",
    previewurl: "https://resume-frontend-gold.vercel.app/"
  },
  {
    id: 3, title: "Memory Game", image: memory,
    description: "A space-themed memory game that challenges users to match pairs of cards.",
    filter: "React",
    giturl: "/", previewurl: "/"
  },
  {
    id: 4, title: "LangNest", image: aurevie,
    description: "Full-stack MERN platform for collaborative language learning with role-based access and Stripe payments.",
    filter: "MERN",
    giturl: "https://github.com/Sharuna-mk", previewurl: "/"
  },
  {
    id: 5, title: "Online Bookstore", image: discountcalc,
    description: "Full-stack bookstore with auth, product catalog, order workflows and Stripe integration.",
    filter: "MERN",
    giturl: "https://github.com/Sharuna-mk", previewurl: "/"
  },
  {
    id: 6, title: "Weather App", image: weather,
    description: "Fetches real-time weather data via API for any location worldwide.",
    filter: "Mini",
    giturl: "https://github.com/Sharuna-mk/Weather",
    previewurl: "https://sharuna-mk.github.io/Weather/"
  },
  {
    id: 7, title: "Online Banking", image: online,
    description: "Manage accounts, transfer funds and view transaction history securely.",
    filter: "Mini",
    giturl: "https://github.com/Sharuna-mk/bank",
    previewurl: "https://sharuna-mk.github.io/bank/"
  },
  {
    id: 8, title: "Budget Calculator", image: budget,
    description: "Track income and expenses to manage budget and monitor spending effectively.",
    filter: "Mini",
    giturl: "https://github.com/Sharuna-mk/budget_calculator",
    previewurl: "https://sharuna-mk.github.io/budget_calculator/"
  },
];

const tabs = ["All", "MERN", "React", "Mini"];

const tagStyles = {
  React: "bg-sky-950 text-sky-400 border border-sky-400/20",
  MERN:  "bg-green-950 text-green-400 border border-green-400/20",
  Mini:  "bg-orange-950 text-orange-400 border border-orange-400/20",
};

function Project() {
  const [active, setActive] = useState("All");
  const filtered = projectData.filter(p => active === "All" || p.filter === active);

  return (
    <section className="bg-[#080e0e] px-8 py-20 min-h-screen font-sans">

      <div className="text-center mb-10">
        <span className="inline-flex px-3! py-1! items-center gap-2 text-[11px] tracking-widest uppercase text-teal-400 border border-teal-400/25 rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          What I've Built
        </span>
        <h2 className="font-extrabold text-5xl text-white tracking-tight mt-3!">
          My <span className="text-teal-400">Projects</span>
        </h2>
        <p className="text-teal-900 text-sm mt-4!">A collection of things I've designed, built and shipped.</p>
      </div>

    
      <div className="flex gap-3 justify-center flex-wrap mb-10! mt-5!">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5! py-2! rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
              ${active === tab
                ? 'bg-teal-950 border-teal-400 text-teal-400'
                : 'bg-transparent border-[#1a2e2e] text-[#4a7070] hover:border-teal-400/40 hover:text-gray-300'
              }`}
          >
            {tab === "MERN" ? "Full Stack / MERN" : tab === "Mini" ? "Mini Projects" : tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-10 mx-10! ">
        {filtered.map((project) => (
          <Projectcard
            key={project.id}
            imgulr={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.giturl}
            previewUrl={project.previewurl}
            filterTag={project.filter}
            tagStyle={tagStyles[project.filter]}
          />
        ))}
      </div>

    </section>
  );
}

export default Project;