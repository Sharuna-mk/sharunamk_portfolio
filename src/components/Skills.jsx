import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';


export default function Skills() {

 const skills = [
    {
      name: "JavaScript",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: "TypeScript",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: "React",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: "Node.js",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: "Express",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: "MongoDB",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: "HTML5",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: "CSS3",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: "Tailwind CSS",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: "Redux",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
    },
    {
      name: "Git",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: "GitHub",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: "Firebase",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    {
      name: "Postman",
      image: 'https://www.svgrepo.com/show/354202/postman-icon.svg'
    },
    {
      name: "VS Code",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
      name: "Bootstrap",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
      name: "Vercel",
      image: 'https://www.svgrepo.com/show/327408/logo-vercel.svg'
    },
    {
      name: "Netlify",
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg'
    },
  ]

  return (
    <section className="skills-section" >
      {/* header */}
      <div className="skills-header">
        <span className="skills-eyebrow">
          <span className="eyebrow-dot" />
          What I Work With
        </span>
        <h2 className="skills-title">
          My <span className="skills-accent">Skills</span>
        </h2>
      </div>
       <div className="flex flex-wrap gap-15 justify-center items-center">
        {skills.map((skill, index) => (
          <div key={index} className=" group relative overflow-hidden
             border border-[#1e1e1e] rounded-2xl
              flex flex-col items-center gap-1
              px-2 py-6 cursor-default p-4! w-28 h-28
              transition-all duration-300 ease-out
              hover:-translate-y-1.5 hover:scale-[1.04]
              hover:border-[#6ee44a44] hover:bg-[#0d150a]">
            <div 
              >
              <img src={skill.image} alt={skill.name} className="
                w-9 h-9 object-contain
                brightness-75 saturate-90
                transition-all duration-300
                group-hover:brightness-110 group-hover:saturate-[1.2]
                group-hover:scale-125 group-hover:-rotate-3
              "
              style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}/>
            </div>
            <h6 className=" mt-2!">{skill.name}</h6>
          </div>
        ))}
      </div>



    </section>
  );
}