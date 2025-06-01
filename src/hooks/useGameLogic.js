import { useState, useEffect } from 'react';

export const useGameLogic = (maxScroll = 1500) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState('right');

  const [isJumping, setIsJumping] = useState(false);
  const [jumpOffset, setJumpOffset] = useState(0); // Nilai Y offset

  // Gerakan kanan/kiri
  const handleScroll = (newDirection) => {
    setDirection(newDirection);
    setIsMoving(true);

    if (newDirection === 'right' && scrollPosition < maxScroll) {
      setScrollPosition(prev => Math.min(prev + 150, maxScroll));
    } else if (newDirection === 'left' && scrollPosition > 0) {
      setScrollPosition(prev => Math.max(prev - 150, 0));
    }

    setTimeout(() => setIsMoving(false), 300);
  };

  // Fungsi lompat
  const handleJump = () => {
    if (isJumping) return;

    setIsJumping(true);

    let jumpHeight = 0;
    let goingUp = true;

    const jumpInterval = setInterval(() => {
      if (goingUp) {
        jumpHeight += 10;
        if (jumpHeight >= 100) {
          goingUp = false;
        }
      } else {
        jumpHeight -= 10;
        if (jumpHeight <= 0) {
          clearInterval(jumpInterval);
          setIsJumping(false);
          jumpHeight = 0;
        }
      }
      setJumpOffset(jumpHeight);
    }, 30);
  };

  // Keyboard listener
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleScroll('right');
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        handleScroll('left');
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') {
        e.preventDefault();
        handleJump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [scrollPosition, isJumping]);

  return {
    scrollPosition,
    isMoving,
    direction,
    isJumping,
    jumpOffset,
    handleScroll,
    handleJump
  };
};
