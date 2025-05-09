import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-black text-center py-6">
        <h1 className="text-4xl font-bold text-white mb-6">
          HYBE LATIN AMERICA – DATA HUB (alpha)
        </h1>
        <div className="relative mx-auto max-w-md">
          <div className="bg-yellow-400 text-black font-bold py-2 px-8 text-xl relative">
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-black"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-transparent border-l-black"></div>
            <h2 className="relative z-10 text-center">PRIVATE DATA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;