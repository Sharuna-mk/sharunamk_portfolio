import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { Link } from 'react-router-dom';

function Projectcard({ imgulr, title, description, gitUrl, previewUrl }) {
  return (
    <div className="relative rounded-xl overflow-hidden group shadow-lg cursor-pointer h-100">
      
 
      <div className=" relative h-50 md:h-60 rounded-t-xl overflow-hidden">
   
               
        <img
          src={imgulr}
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-50"
        />

      
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
          <Link to={gitUrl} className="rounded-full border-2 border-white h-14 w-14 flex items-center justify-center">
            <ImEmbed2 className="h-7 w-7 text-white hover:text-blue-500" />
          </Link>
          <Link to={previewUrl} className="rounded-full border-2 border-white h-14 w-14 flex items-center justify-center">
            <FaRegEye className="h-7 w-7 text-white hover:text-blue-500" />
          </Link>
        </div>
      </div>

     
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      </div>
    
  );
}

export default Projectcard;

