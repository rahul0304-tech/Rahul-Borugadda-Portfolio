import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleResumeClick = () => {
    window.open('/ATS_RAHUL_RESUME.pdf', '_blank');
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-red-600 text-3xl font-bold">RAHUL</span>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white hover:text-red-600 transition-colors"
          >
            {mobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-white hover:text-red-600 transition-colors">Projects</a>
          <a href="#certifications" className="text-white hover:text-red-600 transition-colors">Certifications</a>
          <a href="#internships" className="text-white hover:text-red-600 transition-colors">Internships</a>
          <a href="#activities" className="text-white hover:text-red-600 transition-colors">Activities</a>
          <a href="#tech-stack" className="text-white hover:text-red-600 transition-colors">Tech Stack</a>
          <a href="#contact" className="text-white hover:text-red-600 transition-colors">Contact</a>
          <Button 
            variant="destructive" 
            className="bg-red-600 hover:bg-red-700" 
            onClick={handleResumeClick}
          >
            Resume
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-black w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <a 
              href="#projects" 
              className="text-white hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#certifications" 
              className="text-white hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Certifications
            </a>
            <a 
              href="#internships" 
              className="text-white hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Internships
            </a>
            <a 
              href="#activities" 
              className="text-white hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Activities
            </a>
            <a 
              href="#tech-stack" 
              className="text-white hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tech Stack
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="destructive" 
              className="bg-red-600 hover:bg-red-700" 
              onClick={handleResumeClick}
            >
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
