import React, { useEffect, useState } from 'react'
import Skillbar from './Skillbar'
import Circular from './Circular'

function Skills() {

  const[technical,setTechnical]=useState(true)
  const[soft,setSoft]=useState(false)


  return (
    <div>
        <h1 className="scroll-reveal mt-30 text-4xl text-center font-bold text-gradient bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-700 bg-clip-text text-transparent mt-8">
        My SKills
      </h1>

         <div className='text-white flex flex-row justify-center items-center gap-4 py-6 mt-5'>
        <button className='w-30  border-white px-4 py-2 cursor-pointer text-md font-bold
        hover:bg-white hover:text-black hover:border-black ' onClick={()=>{setTechnical(true)
          setSoft(false)
        }}
        >Technical</button>
        <button  className='w-30  border-white px-4 py-2 cursor-pointer text-md font-bold
        hover:bg-white hover:text-black hover:border-black ' onClick={()=>{setSoft(true) 
          setTechnical(false)
        }}>Soft</button>
        
      </div>
        {technical && (
  <div className="w-full flex flex-col items-center justify-center mt-8 text-white">
    <h3 className="text-center text-2xl font-bold mb-6">Technical Skills</h3>

    <div className="flex flex-col md:flex-row w-full max-w-7xl gap-15 mt-10">
     
      <div className="flex-1 flex flex-col space-y-5">
        <h4 className="text-center text-xl font-semibold">Frontend Development</h4>
        <Skillbar skill="React.js" value={95} />
        <Skillbar skill="JavaScript (ES6+)" value={90} />
        <Skillbar skill="Bootstrap" value={95} />
        <Skillbar skill="Tailwind CSS" value={89} />
        <Skillbar skill="HTML" value={98} />
        <Skillbar skill="CSS" value={95} />
      </div>

      
      <div className="flex-1 flex flex-col space-y-5 ms-10">
        <h4 className="text-center text-xl font-semibold">Tools & Version Control</h4>
        <Skillbar skill="Git" value={99} />
        <Skillbar skill="GitHub" value={98} />
        <Skillbar skill="VS Code" value={98} />
         <Skillbar skill="npm" value={96} />
      </div>
      <div className="flex-1 flex flex-col space-y-5 ms-10">
        <h4 className="text-center text-xl font-semibold">Libraries & Tools</h4>
        <Skillbar skill="Material UI" value={98} />
        <Skillbar skill="React Router" value={95} />
         <Skillbar skill="Axios" value={92} />
        <Skillbar skill="React Hook Form / Yup" value={85} />
        
      </div>
    </div>
  </div>
)}

       
   {soft && (
  <div className="w-full flex flex-col items-center mt-8 text-white">
    <h3 className="text-2xl font-bold text-center mb-6">Soft Skills</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-25 mt-5 w-full max-w-xl">
      <Circular value={94} label="Adaptability" />
      <Circular value={94} label="Communication" />
      <Circular value={92} label="Teamwork & Collaboration" />
      <Circular value={93} label="Creativity & Innovation" />
      <Circular value={80} label="Time Management" />
    </div>
  </div>
)}

           
          </div>
       
  
  )
}

export default Skills
