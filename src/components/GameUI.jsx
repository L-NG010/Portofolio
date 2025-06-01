import React, { useState, useEffect, useRef } from 'react';

const GameUI = ({ projectsCount, scrollPosition }) => {
  const [showInfo, setShowInfo] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Fungsi untuk cek klik di luar dropdown dan tombol hamburger
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showInfo &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowInfo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInfo]);

  return (
    <>
      {/* Controls UI - Hanya tampil di layar >= sm */}
      <div className="hidden sm:block absolute top-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg">
        <p className="text-sm mb-2">Controls:</p>
        <div className="text-xs space-y-1">
          <div className="bg-white bg-opacity-20 px-2 py-1 rounded">← → Arrow Keys</div>
          <div className="bg-white bg-opacity-20 px-2 py-1 rounded">A D Keys</div>
        </div>
      </div>

      {/* Game Info - Desktop */}
      <div className="hidden sm:block absolute top-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg">
        <div className="space-y-1 text-sm">
          <div>⭐ Projects: {projectsCount}</div>
          <div>🌍 World: Lang Punya</div>
          <div>🎯 Stage: {Math.floor(scrollPosition / 300) + 1}-1</div>
        </div>
      </div>

      {/* Game Info - Mobile (Hamburger + Close Button) */}
      <div className="sm:hidden absolute top-4 right-4 z-50">
        {!showInfo && (
          <button
            ref={buttonRef}
            onClick={() => setShowInfo(true)}
            className="text-white bg-black bg-opacity-80 p-2 rounded"
            aria-label="Open game info"
          >
            ☰
          </button>
        )}

        {showInfo && (
          <div
            ref={dropdownRef}
            className="mt-2 bg-black bg-opacity-90 text-white text-sm p-3 rounded shadow-lg relative min-w-[180px]"
          >
            {/* Tombol Close "X" */}
            <button
              onClick={() => setShowInfo(false)}
              className="absolute top-1 right-1 text-white hover:text-red-400 font-bold p-1"
              aria-label="Close game info"
            >
              ✕
            </button>

            <div>⭐ Projects: {projectsCount}</div>
            <div>🌍 World: Lang Punya</div>
            <div>🎯 Stage: {Math.floor(scrollPosition / 300) + 1}-1</div>
          </div>
        )}
      </div>
    </>
  );
};

export default GameUI;
