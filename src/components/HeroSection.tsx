
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import TypedText from "./TypedText";

const HeroSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Reduced game development terms for better performance
  const gameDevelopmentTerms = [
    "Game concept & design",
    "High-quality 2D/3D assets",
    "Smooth gameplay mechanics",
    "Cross-platform support",
    "Clean, optimized code",
    "UI/UX design"
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: 'url(/lovable-uploads/d1879ba7-bf3f-4dc3-b23d-21f7a8176efe.png)',
          filter: 'brightness(0.25) saturate(1.2)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Simplified grain texture for mobile */}
      <div 
        className="absolute inset-0 z-0 opacity-10 hidden md:block"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
          mixBlendMode: "overlay"
        }}
      />
      
      {/* Reduced animated particles for better performance */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-500/20 text-xs font-mono"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1
            }}
            animate={{ 
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {["{", "}", "()", "[]", "&&", "||", "=>", "class"][i % 8]}
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl"
        onMouseMove={handleMouseMove}
      >
        {/* Typed Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <TypedText 
            texts={gameDevelopmentTerms} 
            className="text-lg md:text-xl"
            typingSpeed={100}
            deletingSpeed={50}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Hi, we're </span>
            <motion.span 
              className="text-purple-400 inline-block"
              whileHover={{ 
                color: "#c4b5fd",
                textShadow: "0 0 15px rgba(196, 181, 253, 0.5)" 
              }}
            >
              Oj Develop Studio
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg md:text-2xl font-light mb-8 text-gray-300">
            Game Developers & Interactive Experience Creator
          </h2>
        </motion.div>

        <motion.p
          className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Crafting immersive digital worlds and memorable gaming experiences
          through creative coding and thoughtful game design.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Simplified button animations */}
          <Button 
            onClick={handleScrollToProjects}
            size="sm"
            className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 px-5 py-2 h-10 group transition-all duration-200"
            variant="default"
          >
            <span className="relative z-10 inline-flex items-center">
              <span>View My Work</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="ml-2"
              >
                →
              </motion.span>
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="relative overflow-hidden border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 px-5 py-2 h-10 transition-all duration-200"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10 inline-flex items-center">
              <Code className="mr-2" size={16} />
              <span>Get In Touch</span>
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Simplified scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-purple-400 flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-purple-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
