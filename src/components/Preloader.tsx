import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StudioLogo } from "./icons/CustomIcons";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 10);
        if (newProgress >= 100) {
          clearInterval(timer);
          
          // Keep the loader visible for a moment after reaching 100%
          setTimeout(() => {
            setLoading(false);
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, 150);
    
    return () => clearInterval(timer);
  }, []);
  
  if (!loading) return null;
  
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            transition: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
          className="text-purple-500 mb-8"
        >
          <StudioLogo size={80} strokeWidth={1} />
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-purple-400 mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Entering Game World...
        </motion.h2>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          />
        </div>
        
        <div className="text-gray-400 mt-3 text-sm">{progress}%</div>
        
        <div className="text-gray-500 mt-8 text-xs md:text-sm max-w-md text-center">
          <span className="text-purple-400 font-mono">&lt;/&gt;</span> Loading assets and initializing environment...
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
