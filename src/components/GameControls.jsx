import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';


const GameControls = ({ scrollPosition, maxScroll, onScroll }) => {
  return (
    <>
      {/* Control Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 items-center">
        <button
          onClick={() => onScroll('left')}
          disabled={scrollPosition === 0}
          className="bg-red-500 hover:bg-red-600 disabled:bg-gray-500 text-white p-3 rounded-full font-bold shadow-lg transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="bg-black bg-opacity-80 text-white px-4 py-2 rounded-full">
          <span className="text-sm font-mono">STAGE {Math.floor(scrollPosition / 300) + 1}-1</span>
        </div>
        
        <button
          onClick={() => onScroll('right')}
          disabled={scrollPosition >= maxScroll}
          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white p-3 rounded-full font-bold shadow-lg transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-black bg-opacity-50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-300"
          style={{ width: `${(scrollPosition / maxScroll) * 100}%` }}
        ></div>
      </div>
    </>
  );
};

export default GameControls;