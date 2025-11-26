import React from "react";

function Skillbar({ skill, value }) {
  return (
    <div className="my-4">
      <div className="flex justify-between mb-1">
        <span className="ms-5 font-medium">{skill}</span>
        <span className="me-5 font-medium">{value}%</span>
      </div>

      <div className="w-full h-3 bg-[#1a1a1a] rounded-xl overflow-hidden mx-5">
        <div
          className="h-full rounded-xl bg-gradient-to-r from-[#2b4fc5] to-[#5883ce]"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Skillbar;
