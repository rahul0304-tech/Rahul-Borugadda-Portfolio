import React from 'react';
import { motion } from 'framer-motion';

const PortfolioIntro = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className="w-80 h-80 flex items-center justify-center"
      >
        {/* Custom Portfolio Logo with Rahul's name in Netflix style */}
        <svg width="100%" height="100%" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
          {/* R */}
          <motion.path 
            d="M 50,40 v 120 h 20 v -50 h 10 l 20,50 h 25 l -25,-55 c 15,-5 25,-20 25,-35 c 0,-20 -15,-40 -45,-40 h -30 z M 70,60 h 10 c 10,0 15,5 15,15 c 0,10 -5,15 -15,15 h -10 z"
            fill="#E50914"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          {/* A */}
          <motion.path 
            d="M 155,40 l 40,120 h -22 l -8,-25 h -35 l -8,25 h -22 l 40,-120 z M 138,115 h 25 l -12,-40 z"
            fill="#E50914"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
          {/* H */}
          <motion.path 
            d="M 210,40 v 120 h 20 v -50 h 30 v 50 h 20 v -120 h -20 v 50 h -30 v -50 z"
            fill="#E50914"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          />
          {/* U */}
          <motion.path 
            d="M 310,40 v 90 c 0,10 10,30 35,30 c 25,0 35,-20 35,-30 v -90 h -20 v 90 c 0,5 -5,15 -15,15 c -10,0 -15,-10 -15,-15 v -90 z"
            fill="#E50914"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
          />
          {/* L */}
          <motion.path 
            d="M 410,40 v 120 h 65 v -20 h -45 v -100 z"
            fill="#E50914"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
          />
          {/* Red line underneath */}
          <motion.line 
            x1="50" 
            y1="170" 
            x2="475" 
            y2="170" 
            stroke="#E50914" 
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default PortfolioIntro;