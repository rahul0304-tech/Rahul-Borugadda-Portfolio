import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import InternshipCard from './InternshipCard';
import InternshipModal from './InternshipModal';

const InternshipsSection = ({ 
  internships, 
  title, 
  id,
  filter = () => true
}) => {
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter first by the provided filter function
  const filteredByType = internships.filter(filter);
  
  // Extract unique companies for filtering
  const companies = ["All", ...Array.from(new Set(filteredByType.map(intern => intern.company)))];

  const finalInternships = selectedCompany === "All" 
    ? filteredByType 
    : filteredByType.filter(intern => intern.company === selectedCompany);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleInternshipClick = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  return (
    <section id={id} className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        {/* Company Pills */}
        <motion.div 
          className="mb-8 flex overflow-x-auto pb-2 space-x-2 hide-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {companies.map((company, index) => (
            <Button
              key={index}
              variant={selectedCompany === company ? "destructive" : "outline"}
              className={`whitespace-nowrap px-4 py-1 rounded-full ${
                selectedCompany === company 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              onClick={() => handleCompanySelect(company)}
            >
              {company}
            </Button>
          ))}
        </motion.div>
        
        {/* Internships Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {finalInternships.map((internship) => (
            <InternshipCard 
              key={internship.id} 
              internship={internship} 
              onClick={() => handleInternshipClick(internship)} 
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {finalInternships.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-gray-400 text-lg">No {title.toLowerCase()} found for this filter.</p>
          </div>
        )}
      </div>

      {/* Internship Modal */}
      {selectedInternship && (
        <InternshipModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          internship={selectedInternship}
        />
      )}
    </section>
  );
};

export default InternshipsSection;