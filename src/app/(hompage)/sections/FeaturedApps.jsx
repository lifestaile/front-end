"use client";

import React from "react";
import ToolCard from "../../../components/ui/ToolCard.jsx";
import data from "../../../../public/data.json";
import Link from "next/link";

const FeaturedApps = () => {
  // Ensure featuredTools has a maximum of 5 items to prevent undefined tool props
  const featuredTools = data.tools.slice(0, 5);

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff]">
      <div className="relative z-10 max-w-7xl mx-auto px-8 ">
          <h2 className=" inline-block align-text-bottom text-4xl text-white font:BankGothic Md BT ">
            Featured
          </h2>
      </div>
    
        
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-3 col-span-2 ">
            <div className="w-full h-[300px]">
              <ToolCard tool={featuredTools[0]} />
            </div>
          </div>
          <div className="col-span-1">
              <ToolCard tool={featuredTools[1]} />
          </div>
          <div className="col-start-2 col-span-1">
              <ToolCard tool={featuredTools[2]} />
          </div>
          <div className="col-start-4 col-span-1">
              <ToolCard tool={featuredTools[3]} />
          </div>
        
        <div className="flex justify-end mt-8 ">
          <div className="flex flex-col">
          <Link href="/more" legacyBehavior>
            <a className="text-white font:Square721 BT text-lg flex items-center ">
              See More 
            </a>
        
          </Link>
          <Link href="/more" legacyBehavior>
            <a className="text-white font:Square721 BT flex items-center justify-center">
              →
            </a>
        
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;




