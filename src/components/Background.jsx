import React from 'react';

const Background = () => {
  return (
    <>
      {/* Sky gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-blue-400 via-blue-300 to-green-400"></div>
        
        {/* Simple clouds */}
        <div className="absolute top-20 left-20 text-6xl">☁️</div>
        <div className="absolute top-32 right-32 text-6xl">☁️</div>
        <div className="absolute top-40 left-1/3 text-6xl">☁️</div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-24 bg-green-600">
        <div className="w-full h-full bg-green-700 border-t-4 border-green-800"></div>
      </div>
    </>
  );
};

export default Background;