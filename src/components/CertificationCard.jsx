import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificationModal from './CertificationModal';
import { Badge } from './ui/badge';

const CertificationCard = ({ certification, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div 
        className="flex-shrink-0 w-72 bg-[#181818] rounded-md overflow-hidden p-8 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.03, zIndex: 10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
        onClick={handleClick}
      >
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 mb-5 mx-auto">
          <i className={`${certification.icon} text-2xl text-white`}></i>
        </div>
        <h3 className="text-xl font-bold text-center text-white mb-2">{certification.name}</h3>
        <p className="text-gray-400 text-sm text-center mb-1">{certification.issuedBy}</p>
        <p className="text-gray-400 text-xs text-center mb-5">{certification.date}</p>
        
        {certification.skillsAcquired && certification.skillsAcquired.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4">
            {certification.skillsAcquired.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full">
                {skill}
              </Badge>
            ))}
            {certification.skillsAcquired.length > 3 && (
              <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full">
                +{certification.skillsAcquired.length - 3} more
              </Badge>
            )}
          </div>
        )}
        
        <div className="text-center mt-6">
          <span className="text-red-600 text-sm font-medium hover:underline flex items-center justify-center">
            View Details <i className="fas fa-chevron-right text-xs ml-2"></i>
          </span>
        </div>
      </motion.div>
      
      <CertificationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certification={certification}
      />
    </>
  );
};

export default CertificationCard;