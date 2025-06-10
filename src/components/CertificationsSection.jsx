import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import CertificationCard from './CertificationCard';
import CertificationModal from './CertificationModal';

const CertificationsSection = ({ certifications }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique certification issuers for filtering
  const issuers = ["All", ...Array.from(new Set(certifications.map(cert => cert.issuedBy)))] 

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.issuedBy === selectedCategory);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCertificationClick = (certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const scroll = (direction) => {
    const container = document.getElementById('certifications-scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        {/* Category Pills */}
        <motion.div 
          className="mb-8 flex overflow-x-auto pb-2 space-x-2 hide-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {issuers.map((issuer, index) => (
            <Button
              key={index}
              variant={selectedCategory === issuer ? "destructive" : "outline"}
              className={`whitespace-nowrap px-4 py-1 rounded-full ${
                selectedCategory === issuer 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              onClick={() => handleCategorySelect(issuer)}
            >
              {issuer}
            </Button>
          ))}
        </motion.div>
        
        {/* Horizontal Scrollable Certifications */}
        <div className="relative">
          {/* Left Scroll Button */}
          <div 
            className="absolute top-0 bottom-0 left-0 w-16 bg-black/50 flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={() => scroll('left')}
          >
            <i className="fas fa-chevron-left text-2xl"></i>
          </div>
          
          {/* Scrollable Container */}
          <motion.div 
            id="certifications-scroll-container"
            className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filteredCertifications.map((certification) => (
              <CertificationCard 
                key={certification.id} 
                certification={certification}
                onClick={() => handleCertificationClick(certification)} 
              />
            ))}
          </motion.div>
          
          {/* Right Scroll Button */}
          <div 
            className="absolute top-0 bottom-0 right-0 w-16 bg-black/50 flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={() => scroll('right')}
          >
            <i className="fas fa-chevron-right text-2xl"></i>
          </div>
        </div>

        {/* Empty State */}
        {filteredCertifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-gray-400 text-lg">No certifications found from this issuer.</p>
          </div>
        )}
      </div>

      {/* Certification Modal */}
      {selectedCertification && (
        <CertificationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          certification={selectedCertification}
        />
      )}
    </section>
  );
};

export default CertificationsSection;