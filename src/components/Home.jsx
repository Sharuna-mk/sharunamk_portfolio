import React, { useEffect, useRef, useState } from 'react'
import Wordflick from './Wordflick'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import resume from '../assets/SHARUNA_M_K.pdf'
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom';
import './Home.css'
import Skills from './Skills';
import About from './About';
import Project from './Project'
import Contact from './Contact';
import Footer from './Footer'



function useCountUp(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

export default function Home() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

 
  const dots = Array.from({ length: 180 });

  return (
    <>
     

      <section className="hero" ref={heroRef}>
   
        <div className="dot-grid">
          {dots.map((_, i) => <div key={i} className="dot" />)}
        </div>
        <div className="glow-blob" />
        <div className="glow-blob-2" />

        <div className="hero-inner">
         
          <div className="hero-left">
            <div className={`badge ${visible ? 'show' : ''}`}>
              <span className="badge-dot" />
              Available for opportunities
            </div>

            <p className={`greeting ${visible ? 'show' : ''}`}>Hello, I'm</p>

            <div className={`name-block ${visible ? 'show' : ''}`}>
              <h1 className="name">
                <span className="name-teal">Sharuna</span> M K
              </h1>
            </div>

            <div className={`wordflick-wrap ${visible ? 'show' : ''}`}>
              <Wordflick />
            </div>

            <p className={`bio ${visible ? 'show' : ''}`}>
              A results-driven <strong>Frontend Developer</strong> crafting responsive,
              accessible web experiences with <strong>React & JavaScript</strong> —
              focused on clean, user-centric interfaces that actually ship.
            </p>

            <div className={`cta-row ${visible ? 'show' : ''}`}>
              <a href="#contact" className="btn-primary">
                Let's Connect
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href={resume} download className="btn-ghost">
                Download CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </div>

            <div className={`social-row ${visible ? 'show' : ''}`}>
              <span className="social-label">Find me on</span>
              <div className="social-line" />
              <a href="https://www.linkedin.com/in/sharuna-m-k" target="_blank" rel="noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Sharuna-mk" target="_blank" rel="noreferrer" className="social-link">
                <FaGithubSquare />
              </a>
            </div>
          </div>

      
          <div className={`hero-right ${visible ? 'show' : ''}`}>
            <div className="profile-card">
              <div className="orbit-ring" />
              <div className="profile-frame">
                <img src={profile} alt="Sharuna M K" />
              </div>
              <div className="stats-strip">
                <div className="stat-item">
                  <div className="stat-num">5+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">8</div>
                  <div className="stat-label">months Exp</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">10+</div>
                  <div className="stat-label">Skills</div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </section>

    <Link to={'/'}></Link>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    
    </>
  );
}