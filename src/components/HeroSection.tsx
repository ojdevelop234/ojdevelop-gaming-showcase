
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

  // Game development terms for the typing animation
  const gameDevelopmentTerms = [
    "Game concept & design",
    "High-quality 2D/3D assets",
    "Smooth gameplay mechanics",
    "Cross-platform support",
    "Clean, optimized code",
    "UI/UX design",
    "Multiplayer",
    "Monetization options",
    "Regular updates & communication",
    "Testing & bug fixing",
    "Post-launch support",
    "Store publishing help"
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
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
          mixBlendMode: "overlay"
        }}
      />
      
      {/* Animated particles/code fragments */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-500/30 text-xs md:text-sm font-mono"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1
            }}
            animate={{ 
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {["{", "}", "()", "[]", "&&", "||", "=>", "class", "const", "function"][i % 10]}
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
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <TypedText 
            texts={gameDevelopmentTerms} 
            className="text-lg md:text-xl"
            typingSpeed={80}
            deletingSpeed={30}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
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
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-3xl font-light mb-8 text-gray-300">
            Game Developers & Interactive Experience Creator
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting immersive digital worlds and memorable gaming experiences
          through creative coding and thoughtful game design.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          {/* Updated button with new animations */}
          <Button 
            onClick={handleScrollToProjects}
            size="sm"
            className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 px-5 py-1 h-9 group"
            variant="default"
            asChild
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <span className="relative z-10 inline-flex items-center">
                <span>View My Work</span>
                <motion.span
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="ml-1"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </span>
              
              {/* Animated background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
              />
            </motion.div>
          </Button>
          
          {/* Second button */}
          <Button 
            variant="outline" 
            size="sm"
            className="relative overflow-hidden border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 px-5 py-1 h-9"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            asChild
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <span className="relative z-10 inline-flex items-center">
                <Code className="mr-2" size={16} />
                <span>Get In Touch</span>
              </span>
              
              {/* Border glow animation */}
              <motion.span
                className="absolute inset-0 border-2 border-purple-400 rounded-md"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(167, 139, 250, 0)", "0 0 8px rgba(167, 139, 250, 0.5)", "0 0 0px rgba(167, 139, 250, 0)"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Glint animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
              />
            </motion.div>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-purple-400 flex justify-center">
          <motion.div 
            className="w-2 h-3 bg-purple-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
