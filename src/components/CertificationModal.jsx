import React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';

const CertificationModal = ({ isOpen, onClose, certification }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="bg-[#181818] text-white border-gray-800 max-w-3xl overflow-y-auto max-h-[80vh] scroll-smooth transition-all duration-300 ease-in-out"
        aria-describedby="certification-description"
      >
        <div className="relative">
          {certification.certificateImage ? (
            <img 
              src={certification.certificateImage} 
              alt={certification.name} 
              className="w-full h-52 object-cover rounded-md" 
            />
          ) : (
            <div className="w-full h-52 bg-gradient-to-r from-gray-900 to-black rounded-md flex items-center justify-center">
              <i className={`${certification.icon} text-6xl text-red-600`}></i>
            </div>
          )}
        </div>
        
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white">
              {certification.name}
            </DialogTitle>
            <Badge variant="outline" className="bg-red-600 text-white border-none">
              {certification.issuedBy}
            </Badge>
          </div>
          <p className="text-gray-400 text-sm mt-1">{certification.date}</p>
        </DialogHeader>
        
        <div className="space-y-5" id="certification-description">
          {certification.description && (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
              <p className="text-gray-400">{certification.description}</p>
            </div>
          )}
          
          {certification.skillsAcquired && certification.skillsAcquired.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Skills Acquired</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {certification.skillsAcquired.map((skill, index) => (
                  <div key={index} className="flex items-center bg-gray-800 rounded px-3 py-2">
                    <i className="fas fa-check text-red-600 mr-2"></i>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {certification.credentialLink && (
            <div className="pt-4 border-t border-gray-800">
              <h3 className="text-lg font-semibold mb-2 text-white">Verification</h3>
              <p className="text-gray-400 text-sm mb-3">
                This certification can be verified through the issuer's credential verification system.
              </p>
              <Button 
                variant="destructive"
                className="bg-red-600 hover:bg-red-700 flex items-center"
                onClick={() => window.open(certification.credentialLink || '', '_blank')}
              >
                <i className="fas fa-external-link-alt mr-2"></i> Verify Credential
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            <i className="fas fa-certificate mr-1"></i> Issued by {certification.issuedBy}
          </p>
          
          <Button 
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationModal;