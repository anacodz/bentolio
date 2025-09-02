import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import ThreeCube from './ThreeCube';

const Navbar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // GMT+5:30 in milliseconds
      const istTime = new Date(now.getTime() + istOffset);
      
      const hours = istTime.getUTCHours().toString().padStart(2, '0');
      const minutes = istTime.getUTCMinutes().toString().padStart(2, '0');
      const seconds = istTime.getUTCSeconds().toString().padStart(2, '0');
      
      setTime(`${hours}:${minutes}:${seconds} IST`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#EEDDD3] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01] mb-4">
      <div className="p-4 md:p-6 flex justify-between items-center">
        {/* <a 
          href="#hero" 
          className="font-medium text-base md:text-lg text-[#111827] hover:text-[#111827]/80 transition-colors duration-300"
        >
        </a>
         */}

        <div className="hidden md:flex items-center space-x-4">
          <div className="font-medium text-sm text-[#111827]">
            {time}
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-[#111827]">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;