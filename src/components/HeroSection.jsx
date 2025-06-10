import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import Profile from "../assets/Passport_Formal.jpg";

const HeroSection = ({ featuredProject }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content: Text & Buttons */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image (Above on Small Screens, Right on Large Screens) */}
          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 lg:hidden rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6"
            variants={itemVariants}
          >
            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            Rahul Borugadda
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium mb-6"
            variants={itemVariants}
          >
            B.Tech in AI & Data Science
          </motion.h2>
          <motion.p className="text-lg sm:text-xl mb-8 max-w-xl" variants={itemVariants}>
            Fullstack Application Developer & Data Analyst with experience in creating responsive web applications and leveraging AI technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" variants={itemVariants}>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-black hover:bg-gray-200 flex items-center w-full sm:w-auto"
              onClick={() => window.open("https://github.com/rahul0304-tech", "_blank")}
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center w-full sm:w-auto"
              onClick={() => window.open("/ATS_RAHUL_RESUME.pdf", "_blank")}
            >
              <i className="fas fa-download mr-2"></i> Resume
            </Button>
            {featuredProject && (
              <Button
                variant="destructive"
                size="lg"
                className="bg-red-600 hover:bg-red-700 flex items-center w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                <i className="fas fa-play mr-2"></i> Featured Project
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* Right Content: Profile Image (Hidden on Small Screens) */}
        <motion.div
          className="hidden lg:flex lg:w-1/2 lg:justify-end"
          variants={itemVariants}
        >
          <div className="w-56 h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {featuredProject && (
        <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={featuredProject} />
      )}
    </section>
  );
};

export default HeroSection;