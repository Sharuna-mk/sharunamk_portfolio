import React, { useState, useEffect } from 'react';

const words = [
  'MERN Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Full Stack Developer',
];

export default function Wordflick() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = words[index];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, 70);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, 40);
    } else {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
      setCharIdx(0);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, index]);

  return (
    <span>
      {displayed}
      <span style={{
        display: 'inline-block',
        width: '2px',
        height: '1.1em',
        background: '#00D9C0',
        marginLeft: '2px',
        verticalAlign: 'middle',
        animation: 'blink 1s step-end infinite',
      }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}