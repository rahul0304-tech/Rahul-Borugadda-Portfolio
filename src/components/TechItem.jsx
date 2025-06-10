import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineBrush } from 'react-icons/md'; // Importing a sample React Icon

const TechItem = ({ tech, onClick }) => {
  const IconComponent = tech.iconComponent; // Assuming tech.iconComponent will hold the React Icon component

  return (
    <motion.div 
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <div className={`w-20 h-20 ${tech.iconBg} rounded-full flex items-center justify-center mb-2`}>
        {tech.icon.startsWith('fa') ? (
          <i className={`${tech.icon} text-4xl ${tech.iconColor}`}></i>
        ) : (
          IconComponent && <IconComponent className={`text-4xl ${tech.iconColor}`} />
        )}
      </div>
      <span className="text-sm">{tech.name}</span>
    </motion.div>
  );
};

export default TechItem;