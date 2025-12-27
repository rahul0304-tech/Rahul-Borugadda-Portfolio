import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TechItem from './TechItem';
import TechModal from './TechModal';
import { MdOutlineBrush } from 'react-icons/md';

const techStack = [
  {
    id: "python",
    name: "Python",
    icon: "fab fa-python",
    iconBg: "bg-blue-900",
    iconColor: "text-yellow-300",
    description: "A high-level programming language widely used in data science, backend development, and AI systems.",
    experience: "Used extensively in data science internships and projects including NLP-based legal text classification, AI SQL Assistant, and multi-agent systems using Google ADK."
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "fab fa-js",
    iconBg: "bg-yellow-700",
    iconColor: "text-yellow-400",
    description: "A core web programming language enabling dynamic and interactive applications.",
    experience: "Used for frontend development in React-based projects and full-stack applications."
  },
  {
    id: "react",
    name: "React.js",
    icon: "fab fa-react",
    iconBg: "bg-blue-900",
    iconColor: "text-blue-400",
    description: "A component-based JavaScript library for building scalable user interfaces.",
    experience: "Built interactive UIs for AI-driven platforms such as Visionary, Merch Master, and data dashboards."
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "fas fa-layer-group",
    iconBg: "bg-gray-900",
    iconColor: "text-white",
    description: "A React framework for building optimized, server-rendered web applications.",
    experience: "Used in the Formula One Data Analytics Platform for building performant, full-stack dashboards."
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "fas fa-code",
    iconBg: "bg-blue-800",
    iconColor: "text-blue-300",
    description: "A statically typed superset of JavaScript that improves code quality and maintainability.",
    experience: "Used in modern frontend projects including Next.js applications for better scalability and type safety."
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "fas fa-paint-brush",
    iconBg: "bg-cyan-900",
    iconColor: "text-cyan-400",
    description: "A utility-first CSS framework for rapid UI development.",
    experience: "Used to design responsive and consistent user interfaces across multiple portfolio projects."
  },
  {
    id: "node",
    name: "Node.js",
    icon: "fab fa-node-js",
    iconBg: "bg-green-900",
    iconColor: "text-green-400",
    description: "A JavaScript runtime for building scalable backend services.",
    experience: "Worked with REST APIs and backend services in full-stack applications."
  },
  {
    id: "express",
    name: "Express.js",
    icon: "fas fa-server",
    iconBg: "bg-gray-800",
    iconColor: "text-gray-300",
    description: "A minimal Node.js framework for building APIs and backend services.",
    experience: "Used for creating RESTful APIs and backend routing logic."
  },
  {
    id: "flask",
    name: "Flask",
    icon: "fas fa-flask",
    iconBg: "bg-gray-900",
    iconColor: "text-gray-300",
    description: "A lightweight Python web framework for building APIs and web services.",
    experience: "Used as backend for AI and data-driven projects including NLP classification and AI agent systems."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "fas fa-database",
    iconBg: "bg-green-900",
    iconColor: "text-green-500",
    description: "A NoSQL document-based database for scalable applications.",
    experience: "Used for data storage in AI-driven platforms and analytics dashboards."
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "fas fa-database",
    iconBg: "bg-blue-900",
    iconColor: "text-blue-300",
    description: "A relational database management system for structured data.",
    experience: "Used in SQL-based data analysis and backend integrations."
  },
  {
    id: "sql",
    name: "SQL",
    icon: "fas fa-table",
    iconBg: "bg-indigo-900",
    iconColor: "text-indigo-300",
    description: "A language for querying and managing relational databases.",
    experience: "Applied in data analysis projects and AI-powered SQL query generation systems."
  },
  {
    id: "google-adk",
    name: "Google ADK",
    icon: "fab fa-google",
    iconBg: "bg-red-900",
    iconColor: "text-red-400",
    description: "Google Agent Development Kit for building autonomous AI agent systems.",
    experience: "Used to architect hierarchical multi-agent systems in Visionary and Merch Master projects."
  },
  {
    id: "git",
    name: "Git & GitHub",
    icon: "fab fa-github",
    iconBg: "bg-gray-900",
    iconColor: "text-white",
    description: "Version control tools for collaborative software development.",
    experience: "Used across all projects for version control, collaboration, and deployment workflows."
  },
  {
    id: "postman",
    name: "Postman",
    icon: "fas fa-paper-plane",
    iconBg: "bg-orange-900",
    iconColor: "text-orange-400",
    description: "An API testing and development tool.",
    experience: "Used for testing REST APIs during backend and full-stack development."
  },
  {
    id: "jupyter",
    name: "Jupyter Notebook",
    icon: "fas fa-book",
    iconBg: "bg-orange-800",
    iconColor: "text-orange-300",
    description: "An interactive computing environment for data analysis and experimentation.",
    experience: "Used during data science internships for analysis, visualization, and model experimentation."
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
