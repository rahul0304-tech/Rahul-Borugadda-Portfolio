import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, zIndex: 10, shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      onClick={onClick}
    >
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs bg-red-600 text-white px-2.5 py-1 rounded-full font-medium">{project.category}</span>
          {project.githubLink && project.githubLink !== '' && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-red-400 text-sm flex items-center transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fab fa-github mr-1"></i> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;