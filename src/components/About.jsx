import React, { useEffect, useRef } from 'react';
import './About.css';
import { FaReact } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaLayerGroup } from "react-icons/fa";

const cards = [
  {
    icon: <FaReact className="card-icon-svg react" />,
    tag: "Frontend",
    title: "React Developer",
    desc: "Building dynamic, component-driven UIs with React.js — managing state with hooks, routing with React Router, and styling with Tailwind CSS for pixel-perfect, responsive experiences.",
    chips: ["React.js", "Tailwind CSS", "React Router", "Hooks"],
    accent: "#00D9C0",
  },
  {
    icon: <SiNodedotjs className="card-icon-svg node" />,
    tag: "Backend",
    title: "Node.js & Express",
    desc: "Designing and developing RESTful APIs with Node.js and Express — handling authentication, middleware, routing, and server-side logic that powers full-stack applications.",
    chips: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    accent: "#68D391",
  },
  {
    icon: <SiMongodb className="card-icon-svg mongo" />,
    tag: "Database",
    title: "MongoDB",
    desc: "Modeling and querying NoSQL data with MongoDB and Mongoose — structuring schemas, writing efficient queries, and managing data relationships for scalable applications.",
    chips: ["MongoDB", "Mongoose", "NoSQL", "Aggregation"],
    accent: "#4ADE80",
  },
  {
    icon: <FaLayerGroup className="card-icon-svg fullstack" />,
    tag: "Full Stack",
    title: "MERN Integration",
    desc: "Connecting the full MERN stack end-to-end — from designing the database schema, building the API, to wiring up the React frontend with seamless state and data flow.",
    chips: ["Full Stack", "API Integration", "CRUD Apps", "Deployment"],
    accent: "#60A5FA",
  },
];

export default function About() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      {/* section header */}
      <div className="about-header">
        <span className="about-eyebrow">
          <span className="eyebrow-dot" />
          Who I Am
        </span>
        <h2 className="about-title">
          About <span className="about-title-accent">Me</span>
        </h2>
        <p className="about-subtitle">
          A MERN Stack Developer who enjoys building things from scratch —
          crafting the database, the API, and the interface as one cohesive product.
        </p>
      </div>

      {/* cards grid */}
      <div className="about-grid">
        {cards.map((card, i) => (
          <div
            key={i}
            className="about-card"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ '--accent': card.accent, '--delay': `${i * 0.12}s` }}
          >
            <div className="card-top">
              <div className="card-icon-wrap">{card.icon}</div>
              <span className="card-tag">{card.tag}</span>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
            <div className="card-chips">
              {card.chips.map((chip, j) => (
                <span key={j} className="chip">{chip}</span>
              ))}
            </div>
            <div className="card-glow" />
          </div>
        ))}
      </div>

      {/* bottom bio strip */}
      <div
        className="about-bio-strip"
        ref={(el) => (cardRefs.current[cards.length] = el)}
      >
        <div className="bio-strip-left">
          <span className="bio-strip-label">Stack</span>
          <div className="bio-stack-icons">
            <SiMongodb title="MongoDB" />
            <SiExpress title="Express" />
            <FaReact title="React" />
            <SiNodedotjs title="Node.js" />
          </div>
        </div>
        <div className="bio-divider" />
        <p className="bio-strip-text">
          I'm a fresher MERN developer who thrives on turning ideas into full-stack
          reality. I enjoy the problem-solving loop of debugging an API, optimizing a
          query, and then seeing it reflect instantly on the UI.
        </p>
      </div>
    </section>
  );
}