import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HorizontalScrollSection = ({ title, id, children }) => {
  const containerRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  // Add scrollbar hiding styles globally (should apply to all scroll sections)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none !important;
      }
      .hide-scrollbar {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle scroll events to show/hide buttons
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      
      if (leftButtonRef.current) {
        leftButtonRef.current.style.opacity = isAtStart ? '0.4' : '0.9';
        leftButtonRef.current.style.pointerEvents = isAtStart ? 'none' : 'auto';
      }
      
      if (rightButtonRef.current) {
        rightButtonRef.current.style.opacity = isAtEnd ? '0.4' : '0.9';
        rightButtonRef.current.style.pointerEvents = isAtEnd ? 'none' : 'auto';
      }
    };

    // Initialize button visibility
    handleScroll();
    
    // Add scroll listener
    container.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative group">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-white/90 group-hover:text-white transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          <div 
            ref={leftButtonRef}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white cursor-pointer opacity-40 group-hover:opacity-70 transition-opacity z-10 hover:bg-red-600 shadow-lg"
            onClick={() => scroll('left')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xl">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </div>
          
          <div className="relative overflow-hidden">
            <motion.div 
              ref={containerRef}
              className="flex space-x-5 overflow-x-auto hide-scrollbar pb-4 scroll-smooth -mx-1 px-1 py-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {children}
            </motion.div>
          </div>
          
          <div 
            ref={rightButtonRef}
            className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white cursor-pointer opacity-40 group-hover:opacity-70 transition-opacity z-10 hover:bg-red-600 shadow-lg"
            onClick={() => scroll('right')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xl">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;