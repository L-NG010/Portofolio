import React from 'react';

const Character = ({ isMoving, direction, scrollPosition, maxScroll, jumpOffset }) => {
  const marioPosition = Math.min((scrollPosition / maxScroll) * 90, 90);

  return (
    <div
      className="absolute bottom-24 transition-all duration-300"
      style={{
        left: `${marioPosition}%`,
        transform: `translateY(-${jumpOffset}px)`
      }}
    >
      <div
        className={`text-6xl transition-transform duration-300 ${isMoving ? 'scale-110' : ''} ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
      >
        😼
      </div>
      {/* Shadow */}
      {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-black opacity-30 rounded-full"></div> */}
    </div>
  );
};

export default Character;
