
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-4 bottom-4 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Outer breathing circle */}
          <motion.div
            className="absolute inset-0 bg-purple-600/30 rounded-full -z-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Inner breathing circle */}
          <motion.div
            className="absolute inset-0 bg-purple-600/20 rounded-full -z-10 blur-md"
            animate={{ 
              scale: [1.1, 1.3, 1.1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 2,
              delay: 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.button
            onClick={scrollToTop}
            className="bg-purple-600 text-white rounded-full p-3 shadow-lg hover:bg-purple-700 focus:outline-none"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            aria-label="Scroll to top"
          >
            <ArrowUpCircle size={28} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
