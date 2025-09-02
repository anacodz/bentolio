import React, { useEffect, useState } from 'react';
import { Code, Terminal } from 'lucide-react';
import TechForAll from './TechForAll';

const roles = ["Analyst", "Gen AI", "Consultant"];

const TYPING_SPEED = 75; // ms per character
const DELAY_BETWEEN_ROLES = 300; // ms after a role is fully typed

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayedText.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(roles[roleIndex].slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, DELAY_BETWEEN_ROLES);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayedText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, roleIndex]);

  return (
    <div id="hero" className="h-full p-4 md:p-6 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute -top-8 -right-8 text-[#FADCD9]/20">
        <Code size={100} />
      </div>
      <div className="absolute -bottom-8 -left-8 text-[#FADCD9]/20">
        <Terminal size={100} />
      </div>
      
      <div className="relative z-10">
        <h1 className="custom-hero-h1 text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          <span style={{ color: '#8B5C2A' }}>A</span>nanya <span style={{ color: '#8B5C2A' }}>S</span>ingh
        </h1>
        <div className="overflow-hidden h-10 md:h-12 flex items-center">
          <span className="text-lg md:text-xl font-semibold text-[#111827]/90 py-2 tracking-tight">
            {displayedText}
            <span className="custom-connect-h1 animate-pulse">|</span>
          </span>
        </div>
        {/* <p className="mt-4 text-[#111827]/70 max-w-lg text-sm md:text-base">
          Tech for all, AI for everyone.
        </p> */}
        <TechForAll />
        <div className="mt-6 md:hidden">
          <a 
            href="#projects" 
            className="inline-block px-4 py-2 bg-[#111827] text-[#FFF9F6] rounded-lg font-medium transition-all duration-300 hover:bg-[#111827]/90 hover:translate-y-[-2px] hover:shadow-md text-sm"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;