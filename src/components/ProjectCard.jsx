import React from 'react';

const ProjectCard = ({ project, position }) => {
  return (
    <div
      className="absolute bottom-40 transition-all duration-500 hover:scale-105"
      style={{ left: `${position}px` }}
    >
      <div className="w-56 h-36 bg-yellow-400 border-4 border-yellow-600 rounded-lg p-4 cursor-pointer hover:bg-yellow-300 transition-colors duration-200">
        <h3 className="font-bold text-lg text-yellow-900 mb-2">{project.title}</h3>
        <p className="text-sm text-yellow-800 mb-3">{project.description}</p>
        
        <div className="flex gap-2 flex-wrap items-center">
          {project.tech.map((tech, i) => {
  const iconName = project.icons && project.icons[i] ? project.icons[i] : null;
  return (
    <div key={i} className="flex items-center gap-1 bg-yellow-200 text-yellow-900 px-2 py-1 rounded">
      {iconName && (
        <img
          src={`/assets/images/${iconName}`}
          alt={iconName.replace('.png', '')}
          className="w-5 h-5 object-contain"
          loading="lazy"
        />
      )}
      <span className="text-xs">{tech}</span>
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
