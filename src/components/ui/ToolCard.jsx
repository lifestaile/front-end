"use client";

import React, { useState } from "react";

const ToolCard = ({ tool }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center p-4 rounded-lg transition-transform duration-300"
      style={{
        width: "280px",
        height: "180px",
        background: "linear-gradient(180deg, rgba(82, 113, 255, 0.5) 0%, rgba(49, 68, 153, 0) 100%)",
        boxShadow: "inset 0px 4px 44.7px rgba(0, 0, 0, 0.5)",
        borderRadius: "40px",
        transform: hover ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={tool.icon_src} alt={tool.name} className="w-12 h-12 rounded-full" />
      <h3 className="mt-4 text-lg font-semibold text-white text-center truncate" style={{ maxWidth: "100%" }}>
        {tool.name}
      </h3>
      <div className="flex items-center mt-2 absolute bottom-4">
        {hover ? (
          <>
            <button className="p-2 bg-white rounded-full text-blue-900 hover:bg-gray-200 transition duration-300 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="p-2 bg-white rounded-full text-blue-900 hover:bg-gray-200 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.318C8.475-1.074 2 1.424 2 6.132 2 11.122 7.497 15.068 12 21.001 16.503 15.068 22 11.122 22 6.132 22 1.424 15.525-1.074 12 4.318z" />
              </svg>
            </button>
          </>
        ) : (
          <>
            {[...Array(5)].map((star, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < tool.rating ? "white" : "none"}
                viewBox="0 0 24 24"
                stroke="white"
                className="w-5 h-5"
                style={{
                  filter: index < tool.rating ? "drop-shadow(0px 0px 4px white)" : "none",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4l2.09 4.26L19 9.27l-3.5 3.41L16.18 17 12 14.77 7.82 17l1.68-4.32L5 9.27l4.91-.01L12 4z"
                />
              </svg>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ToolCard;



