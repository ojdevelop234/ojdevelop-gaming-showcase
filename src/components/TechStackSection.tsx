
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Code, PenTool } from "lucide-react";

type TechItem = {
  name: string;
}

type TechCardProps = {
  title: string;
  icon: React.ReactNode;
  items: TechItem[];
  index: number;
}

const TechStackSection = () => {
  const gameEngines = [
    { name: "Unity" },
    { name: "Unreal Engine" },
    { name: "Godot" },
    { name: "Custom Engines" }
  ];
  
  const designTools = [
    { name: "Blender" },
    { name: "Maya" },
    { name: "Photoshop" },
    { name: "Substance Painter" }
  ];
  
  const programmingLanguages = [
    { name: "C#" },
    { name: "C++" },
    { name: "Blueprint" },
    { name: "JavaScript" }
  ];

  return (
    <section id="tech-stack" className="py-24 px-4 relative overflow-hidden bg-gray-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-20 pointer-events-none">
        {Array.from({ length: 400 }).map((_, i) => (
          <div 
            key={i} 
            className="border-t border-l border-purple-500/10"
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-400 font-['Orbitron',sans-serif]">Tools & Tech Stack</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Our arsenal of cutting-edge tools and technologies that power our game development process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TechCard 
            title="Game Engines" 
            icon={<Gamepad2 className="w-12 h-12 text-purple-400" />}
            items={gameEngines}
            index={0}
          />
          
          <TechCard 
            title="Design Tools" 
            icon={<PenTool className="w-12 h-12 text-purple-400" />}
            items={designTools}
            index={1}
          />
          
          <TechCard 
            title="Programming" 
            icon={<Code className="w-12 h-12 text-purple-400" />}
            items={programmingLanguages}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ title, icon, items, index }: TechCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glowing border */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-70 group-hover:opacity-100 blur-sm transition-all duration-300"
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: isHovered ? 3 : 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg h-full border border-gray-700/50 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 grid grid-cols-[repeat(10,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] opacity-20 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="border-t border-l border-purple-500/20"
            />
          ))}
        </div>

        <div className="relative">
          <div className="flex items-center justify-center mb-4 bg-gray-900/50 w-20 h-20 rounded-full mx-auto">
            {icon}
          </div>
          
          <h3 className="text-xl text-center font-['Orbitron',sans-serif] text-purple-300 font-semibold mb-6 tracking-wider">
            {title}
          </h3>
          
          <ul className="space-y-3">
            {items.map((item, i) => (
              <motion.li 
                key={i}
                className="flex items-center px-3 py-2 bg-gray-900/50 rounded-md border border-gray-700/50 group/item hover:bg-gray-700/30 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
              >
                <div className="mr-3 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-gray-300 font-['Orbitron',sans-serif] text-sm tracking-wider group-hover/item:text-white transition-colors">
                  {item.name}
                </span>
                
                {/* Right glowing dot */}
                <div className="ml-auto">
                  <motion.div 
                    className="w-2 h-2 bg-purple-500 rounded-full"
                    animate={{ 
                      boxShadow: isHovered ? '0 0 8px 2px rgba(168, 85, 247, 0.8)' : '0 0 0px 0px rgba(168, 85, 247, 0)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStackSection;
