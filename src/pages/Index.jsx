import React from 'react';
import Background from '../components/Background';
import Character from '../components/Character';
import ProjectCard from '../components/ProjectCard';
import GameUI from '../components/GameUI';
import GameControls from '../components/GameControls';
import Profile from '../components/Profile';
import { useGameLogic } from '../hooks/useGameLogic';
import { projectsData } from '../data/projectsData';

const Index = () => {
  const maxScroll = 900;
  const { scrollPosition, isMoving, direction,jumpOffset , handleScroll } = useGameLogic(maxScroll);

  return (
    <div className="w-full h-screen bg-blue-400 relative overflow-hidden">

      <Profile scrollPosition={scrollPosition} position={100} />
      {/* Background Component */}
      <Background />
      
      {/* Mario Character Component */}
      <Character 
        isMoving={isMoving} 
        direction={direction} 
        scrollPosition={scrollPosition}
        maxScroll={maxScroll}
        jumpOffset={jumpOffset}
      />
      
      {/* Project Cards */}
      {projectsData.map((project) => {
        const cardPosition = project.position - scrollPosition;
        const isVisible = cardPosition > -300 && cardPosition < 1200;
        
        if (!isVisible) return null;

        return (
          <ProjectCard 
            key={project.id} 
            project={project} 
            position={cardPosition} 
          />
        );
      })}

      {/* Game UI Component */}
      <GameUI 
        projectsCount={projectsData.length} 
        scrollPosition={scrollPosition} 
      />
      
      {/* Game Controls Component */}
      <GameControls 
        scrollPosition={scrollPosition}
        maxScroll={maxScroll}
        onScroll={handleScroll}
      />
    </div>
  );
};

export default Index;