import { motion } from 'framer-motion';
import { useState } from 'react';

const ReveventSection4 = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image - Replace with your own */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Mountain landscape with lake"
        className="absolute inset-0 w-full h-full object-cover"
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Frosted Glass Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl mx-4 p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-8 tracking-wider"
        >
          Guidance for Parents
        </motion.h1>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white/90 text-lg md:text-xl leading-relaxed mb-12"
        >
          <p className="mb-4">
            We understand that studying abroad is a family decision. World Wise Scholars ensures parents are informed, involved, and confident throughout the process.
          </p>
          
        </motion.div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center space-x-3 mb-4">
            {/* Icon placeholder - replace with your own */}
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">Do Study</span>
          </div>
          <div className="w-24 h-1 bg-white/30 rounded-full"></div>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
      />
    </div>
  );
};

export default ReveventSection4;