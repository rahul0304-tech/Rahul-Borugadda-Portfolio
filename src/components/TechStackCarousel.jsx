import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TechItem from './TechItem';
import TechModal from './TechModal';
import { MdOutlineBrush } from 'react-icons/md';

const techStack = [
  {
    id: "react",
    name: "React.js",
    icon: "fab fa-react",
    iconBg: "bg-blue-900",
    iconColor: "text-blue-400",
    description: "A JavaScript library for building user interfaces with a component-based architecture and efficient DOM updates through a virtual DOM.",
    experience: "Used React for multiple web development projects, including the COORDINATE social media application. Proficient with hooks, context API, and state management."
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "fab fa-js",
    iconBg: "bg-yellow-700",
    iconColor: "text-yellow-400",
    description: "A versatile programming language that enables interactive web pages and is an essential part of web applications.",
    experience: "Strong foundation in ES6+ features, asynchronous programming with Promises and async/await, and DOM manipulation."
  },
  {
    id: "css",
    name: "CSS",
    icon: "fab fa-css3-alt",
    iconBg: "bg-blue-800",
    iconColor: "text-blue-400",
    description: "Cascading Style Sheets language used for describing the presentation of a document written in HTML.",
    experience: "Proficient in responsive design, Flexbox, Grid, and CSS frameworks like Tailwind CSS and Bootstrap."
  },
  {
    id: "python",
    name: "Python",
    icon: "fab fa-python",
    iconBg: "bg-blue-700",
    iconColor: "text-yellow-300",
    description: "A high-level programming language known for its readability and versatility in web development, data analysis, AI, and more.",
    experience: "Used Python for data analysis, machine learning projects, web scraping, and backend development with Flask."
  },
  {
    id: "git",
    name: "Git",
    icon: "fab fa-git-alt",
    iconBg: "bg-orange-800",
    iconColor: "text-orange-500",
    description: "A distributed version control system for tracking changes in source code during software development.",
    experience: "Experienced with Git workflows, branching strategies, pull requests, and collaborative development."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "fas fa-database",
    iconBg: "bg-green-900",
    iconColor: "text-green-500",
    description: "A NoSQL database that uses JSON-like documents with optional schemas for storing data.",
    experience: "Designed and implemented MongoDB databases for web applications, with experience in data modeling and aggregation pipelines."
  },
  {
    id: "sql",
    name: "SQL",
    icon: "fas fa-table",
    iconBg: "bg-blue-900",
    iconColor: "text-blue-400",
    description: "A domain-specific language used for managing and querying relational databases.",
    experience: "Proficient in writing complex queries, database design, and data manipulation across various SQL databases."
  },
  {
    id: "figma",
    name: "Figma",
    icon: "fab fa-figma",
    iconBg: "bg-purple-900",
    iconColor: "text-purple-400",
    description: "A collaborative interface design tool used for UI/UX design, prototyping, and design systems.",
    experience: "Created wireframes, mockups, and interactive prototypes for web applications and user interfaces."
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    icon: "", // Clear the old icon class
    iconComponent: MdOutlineBrush, // Assign the React Icon component
    iconBg: "bg-blue-900",
    iconColor: "text-blue-400",
    description: "A raster graphics editor developed by Adobe used for image editing and creation.",
    experience: "Used Photoshop for creating and editing images, designing UI elements, and preparing assets for web projects."
  },
  {
    id: "powerbi",
    name: "Power BI",
    icon: "fas fa-chart-bar",
    iconBg: "bg-yellow-900",
    iconColor: "text-yellow-400",
    description: "A business analytics service by Microsoft that provides interactive visualizations with self-service BI capabilities.",
    experience: "Created interactive dashboards and reports for data analysis during the Data Analyst internship at Indo Euro Synchronization."
  }
];

const TechStackCarousel = () => {
  const containerRef = useRef(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  return (
    <section id="tech-stack" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        
        <div className="relative group">
          <div 
            className="absolute top-0 bottom-0 left-0 w-16 bg-black/50 hidden group-hover:flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={() => scroll('left')}
          >
            <i className="fas fa-chevron-left text-2xl"></i>
          </div>
          
          <motion.div 
            ref={containerRef}
            className="flex space-x-8 overflow-x-auto pb-4 items-center hide-scrollbar scroll-smooth"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {techStack.map((tech) => (
              <TechItem 
                key={tech.id} 
                tech={tech} 
                onClick={() => handleTechClick(tech)} 
              />
            ))}
          </motion.div>
          
          <div 
            className="absolute top-0 bottom-0 right-0 w-16 bg-black/50 hidden group-hover:flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={() => scroll('right')}
          >
            <i className="fas fa-chevron-right text-2xl"></i>
          </div>
        </div>
      </div>

      {/* Tech Modal */}
      {selectedTech && (
        <TechModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tech={selectedTech}
        />
      )}
    </section>
  );
};

export default TechStackCarousel;