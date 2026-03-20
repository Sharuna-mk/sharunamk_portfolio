import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { Link } from 'react-router-dom';

function Projectcard({ imgulr, title, description, gitUrl, previewUrl, filterTag, tagStyle }) {
  return (
    <div className="relative bg-[#0d1717] border border-[#1a2e2e] rounded-2xl overflow-hidden group
                    transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/30 cursor-pointer w-120 ms-10! h-65">

    
      <div className="relative h-50  overflow-hidden">
        <img
          src={imgulr}
          alt={title}
          className="w-full h-full object-cover transition-all duration-400
                     brightness-85 group-hover:opacity-40 group-hover:scale-105"
        />

        <span className={`absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${tagStyle}`}>
          {filterTag === "MERN" ? "Full Stack" : filterTag}
        </span>

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={gitUrl} className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/40 hover:border-teal-400 hover:bg-teal-400/15 transition-all">
            <ImEmbed2 className="w-5 h-5 text-white" />
          </Link>
          <Link to={previewUrl} className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/40 hover:border-teal-400 hover:bg-teal-400/15 transition-all">
            <FaRegEye className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>

      <div className="p-4">
        <h5 className="text-white font-semibold text-base mb-1.5 ps-2! mt-1!">{title}</h5>
        <p className="text-[#4a7070] text-xs leading-relaxed ps-2!">{description}</p>
      </div>

    </div>
  );
}

export default Projectcard;