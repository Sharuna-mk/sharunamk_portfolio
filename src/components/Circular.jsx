import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'


function Circular({value,label}) {
  return (
    <div>
        <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#E5E5E5",
          pathColor: "url(#circleGradient)",
          trailColor: "#1a1a1a",
          width:"50px",
          height:"50px"
        })}
      />
      
      <svg width="0" height="0">
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#151b65ff" />
            <stop offset="100%" stopColor="#4A90E2" />
          </linearGradient>
        </defs>
      </svg>

      <p style={{
        marginTop: "10px",
        color: "#BFBFBF",
        fontWeight: "600",
      }} className='text-center'>
        {label}
      </p>
      
    </div>
  )
}

export default Circular
