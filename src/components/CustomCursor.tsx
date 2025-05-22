
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateCursorType = () => {
      const hoveredElement = document.querySelectorAll(":hover");
      const isHoveringClickable = Array.from(hoveredElement).some(el => {
        const cursor = window.getComputedStyle(el).cursor;
        return cursor === 'pointer';
      });
      setIsPointer(isHoveringClickable);
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateCursorType);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateCursorType);
    };
  }, []);
  
  return (
    <>
      {/* Hide default cursor */}
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          cursor: none !important;
        }
        * {
          cursor: none !important;
        }
      `}} />
      
      {/* Main cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-purple-500/30 backdrop-blur-sm z-[9999] pointer-events-none"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-500 z-[9999] pointer-events-none"
        animate={{
          x: position.x - 1,
          y: position.y - 1
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 30
        }}
      />
      
      {/* Cursor trail */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-500/30 z-[9998] pointer-events-none"
          animate={{
            x: position.x - 1,
            y: position.y - 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: i * 0.02,
          }}
          style={{ opacity: 1 - i * 0.15 }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
