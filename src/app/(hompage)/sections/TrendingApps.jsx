"use client";

import React, { useState } from "react";
import ToolCard from "../../../components/ui/ToolCard.jsx";
import data from "../../../../public/data.json";

const TrendingApps = () => {
  //button to move to next and previous  
  const [currentIndex, setCurrentIndex] = useState(0);
  const trendingTools = data.tools; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : trendingTools.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < trendingTools.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-[#000000] to-[#5271FF]">
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex items-center">
        
        <div>
          <h2
            className="text-4xl text-white font:BankGothic Md BT 30px w-239px h-50px leading--50px"
            >
            Trending
          </h2>
        </div>
       
        <div
          className="relative flex items-center justify-center w-full"
          style={{
            background: "linear-gradient(180deg, rgba(82, 113, 255, 0.5) 0%, rgba(49, 68, 153, 0) 100%)",
            boxShadow: "inset 0px 4px 44.7px rgba(0, 0, 0, 0.5)",
            borderRadius: "60px",
            padding: "30px",
            marginLeft: "60px",
            marginRight: "50px",
        
     
          }}
        >
          <button
            onClick={handlePrev}
            className="p-2 bg-white rounded-full text-blue-900 hover:bg-gray-200 transition duration-300 absolute left-0 transform -translate-x-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-4">
            {trendingTools.slice(currentIndex, currentIndex + 2).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full text-blue-900 hover:bg-gray-200 transition duration-300 absolute right-0 transform translate-x-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
