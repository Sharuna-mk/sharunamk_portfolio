import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "#project" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.4s ease;
        }

        .nav-root.scrolled {
          background: rgba(10, 10, 15, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 217, 192, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .nav-root.top {
          background: transparent;
          backdrop-filter: none;
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 18px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
          text-decoration: none;
        }

        .logo span {
          color: #00D9C0;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          position: relative;
          display: inline-block;
          padding: 6px 16px;
          color: rgba(210, 220, 220, 0.75);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.25s ease, background 0.25s ease;
        }

        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 70%;
          height: 1.5px;
          background: #00D9C0;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-links li a:hover {
          color: #fff;
          background: rgba(0, 217, 192, 0.06);
        }

        .nav-links li a:hover::after,
        .nav-links li a.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-links li a.active {
          color: #00D9C0;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile drawer */
        .mobile-menu {
          display: none;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.3s ease;
          opacity: 0;
          background: rgba(8, 10, 14, 0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-top: 1px solid rgba(0, 217, 192, 0.08);
        }

        .mobile-menu.open {
          max-height: 420px;
          opacity: 1;
        }

        .mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 16px 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-menu ul li a {
          display: block;
          padding: 11px 0;
          color: rgba(200, 215, 215, 0.7);
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s ease, padding-left 0.25s ease;
          letter-spacing: 0.02em;
        }

        .mobile-menu ul li:last-child a {
          border-bottom: none;
        }

        .mobile-menu ul li a:hover,
        .mobile-menu ul li a.active {
          color: #00D9C0;
          padding-left: 8px;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: block; }
          .nav-inner { padding: 16px 20px; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" className="logo">
            Sharuna<span>.</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={active === link.label ? "active" : ""}
                  onClick={() => setActive(link.label)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={active === link.label ? "active" : ""}
                  onClick={() => {
                    setActive(link.label);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;