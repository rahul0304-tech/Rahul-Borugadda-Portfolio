import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InternshipModal from './InternshipModal';
import { Badge } from './ui/badge';

const InternshipCard = ({ internship, onClick }) => {
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
        className="flex flex-col w-full sm:w-80 bg-[#181818] rounded-lg overflow-hidden p-6 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.03, zIndex: 10 }}
        onClick={handleClick}
      >
        {internship.companyLogo && (
          <div className="flex items-center justify-center mb-6">
            <img 
              src={internship.companyLogo} 
              alt={internship.company} 
              className="h-16 w-auto object-contain max-h-16"
            />
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
          <h3 className="text-xl font-bold text-white mb-1 sm:mb-0">{internship.role}</h3>
          <Badge className="bg-red-600 text-xs font-normal px-2 py-1 rounded-full">{internship.duration}</Badge>
        </div>
        
        <p className="text-gray-400 text-sm mb-4">{internship.company}</p>
        
        <div className="border-t border-gray-800 pt-4 mb-4 flex-grow">
          <p className="text-gray-300 text-sm mb-2 font-medium">Highlights:</p>
          <ul className="text-gray-400 text-sm list-disc pl-5 space-y-1">
            {internship.description.slice(0, 2).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {internship.description.length > 2 && (
              <li className="text-red-600 cursor-pointer hover:underline">
                <span>+{internship.description.length - 2} more...</span>
              </li>
            )}
          </ul>
        </div>
        
        {internship.skillsGained && internship.skillsGained.length > 0 && (
          <div className="mt-auto pt-4">
            <p className="text-gray-300 text-sm mb-2 font-medium">Skills Gained:</p>
            <div className="flex flex-wrap gap-2">
              {internship.skillsGained.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full">
                  {skill}
                </Badge>
              ))}
              {internship.skillsGained.length > 3 && (
                <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full">
                  +{internship.skillsGained.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="text-center mt-6">
          <span className="text-red-600 text-sm font-medium hover:underline flex items-center justify-center">
            View Details <i className="fas fa-chevron-right text-xs ml-2"></i>
          </span>
        </div>
      </motion.div>
      
      <InternshipModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        internship={internship}
      />
    </>
  );
};

export default InternshipCard;