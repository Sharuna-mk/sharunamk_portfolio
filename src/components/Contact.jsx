import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY  = 'your_public_key'

function Contact() {
  const [formDetails, setFormDetails] = useState({ name: "", email: "", message: "" });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onformUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    setStatus({});

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: formDetails.name,
      email: formDetails.email,
      message: formDetails.message,
    }, PUBLIC_KEY)
    .then(() => {
      setButtonText('Send');
      setStatus({ success: true, message: '✓ Message sent successfully!' });
      setFormDetails({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setButtonText('Send');
      setStatus({ success: false, message: '✗ Something went wrong. Try again.' });
    });
  };

  const contactItems = [
    {
      label: 'Email',
      detail1: 'sharunamk3@gmail.com',
      detail2: null,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'Phone',
      detail1: '+91 9995844514',
      detail2: null,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.84a16 16 0 007.25 7.25l.97-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      )
    },
    {
      label: 'Location',
      detail1: 'Kannur, Kerala',
      detail2: 'India',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      detail1: 'linkedin.com/in/sharuna-m-k',
      detail2: null,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
          <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  return (
    <div id="connect" className="min-h-screen px-4 py-20 flex flex-col items-center justify-center">

      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-3! py-1! text-[11px] tracking-widest uppercase text-teal-400 border border-teal-400/25 rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Let's Talk
        </span>
        <h2 className="text-4xl font-extrabold text-white tracking-tight mt-5!">
          Get in <span className="text-teal-400">Touch</span>
        </h2>
      </div>

      {/* Two column layout */}
      <div className="flex flex-wrap justify-center gap-12 w-full max-w-5xl mt-10!">

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4!">
            <label className="block font-medium mb-1 text-teal-400 text-xs tracking-widest uppercase">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={formDetails.name}
              onChange={(e) => onformUpdate('name', e.target.value)}
              className="px-3 py-3! placeholder:ps-2 border border-[#1a2e2e] bg-[#081212] w-full outline-none rounded-xl text-sm text-slate-200 placeholder-[#2d4444] focus:border-teal-400/40 focus:ring-2 focus:ring-teal-400/10 transition-all"
            />
          </div>

          <div className="mb-4!">
            <label className="block font-medium mb-1 text-teal-400 text-xs tracking-widest uppercase">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formDetails.email}
              onChange={(e) => onformUpdate('email', e.target.value)}
              className="px-3  py-3! placeholder:ps-2 border border-[#1a2e2e] bg-[#081212] w-full outline-none rounded-xl text-sm text-slate-200 placeholder-[#2d4444] focus:border-teal-400/40 focus:ring-2 focus:ring-teal-400/10 transition-all"
            />
          </div>

          <div className="mb-4!">
            <label className="block font-medium mb-1 text-teal-400 text-xs tracking-widest uppercase">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="message.."
              value={formDetails.message}
              onChange={(e) => onformUpdate('message', e.target.value)}
              className="px-3 py-2.5 placeholder:ps-2 border border-[#1a2e2e] bg-[#081212] rounded-xl w-full outline-none text-sm text-slate-200 placeholder-[#2d4444] focus:border-teal-400/40 focus:ring-2 focus:ring-teal-400/10 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="mb-4 w-full rounded-xl bg-teal-400 px-6! py-3! text-sm font-bold uppercase tracking-widest text-[#080e0e] hover:bg-teal-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(45,212,191,0.2)] active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            {buttonText}
          </button>

          {status.message && (
            <p className={`text-center text-sm ${status.success ? 'text-teal-400' : 'text-red-400'}`}>
              {status.message}
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="w-full max-w-md flex flex-col justify-center gap-6">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-start gap-5">
              <div className="shrink-0 inline-block rounded-xl bg-teal-400/10 p-4 text-teal-400">
                {item.icon}
              </div>
              <div>
                <p className="mb-1 font-bold text-white">{item.label}</p>
                <p className="text-[#4a7070] text-sm">{item.detail1}</p>
                {item.detail2 && <p className="text-[#4a7070] text-sm">{item.detail2}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Contact;