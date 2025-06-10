import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const TechModal = ({ isOpen, onClose, tech }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#181818] text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{tech.name}</DialogTitle>
        </DialogHeader>
        
        <div className={`w-20 h-20 ${tech.iconBg} rounded-full flex items-center justify-center mb-6 mx-auto`}>
          <i className={`${tech.icon} ${tech.iconColor} text-4xl`}></i>
        </div>
        
        <p className="text-gray-400 mb-6">{tech.description}</p>
        
        <div className="bg-black bg-opacity-40 p-4 rounded">
          <h3 className="text-lg font-bold mb-2">Experience</h3>
          <p className="text-gray-400">{tech.experience}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechModal;