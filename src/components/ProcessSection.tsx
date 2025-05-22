
import { motion } from "framer-motion";
import { Code, PenTool, Layout, CheckCircle2, Rocket } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ProcessSection = ({ process }: { process: ProcessStep[] }) => {
  return (
    <section id="process" className="py-24 px-4 bg-gray-850 bg-opacity-30 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-400">Our Development Process</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            We follow a structured approach to ensure quality, efficiency, and success for every project.
          </p>
        </motion.div>
        
        {/* Background grid line effect */}
        <div className="absolute inset-0 -z-10 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px w-full bg-purple-500"
              style={{ top: `${i * 5}%` }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scaleX: [1, 1.05, 1] 
              }}
              transition={{ 
                duration: 3 + i % 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px h-full bg-purple-500"
              style={{ left: `${i * 5}%` }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scaleY: [1, 1.05, 1] 
              }}
              transition={{ 
                duration: 2 + i % 5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-600/0 via-purple-600 to-purple-600/0 -translate-x-1/2 hidden md:block" />
          
          {process.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row items-center mb-16 md:mb-24 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Process step number */}
              <motion.div 
                className="absolute -left-8 top-1/3 text-7xl font-bold text-gray-800 z-0 hidden md:block"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                0{index + 1}
              </motion.div>
              
              {/* Step indicator */}
              <motion.div 
                className={`flex items-center justify-center w-24 h-24 rounded-2xl ${
                  index % 2 === 0 ? "bg-purple-600" : "bg-blue-600"
                } text-white mb-6 md:mb-0 relative z-10`}
                whileHover={{ 
                  rotate: 5, 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(126, 34, 206, 0.5)"
                }}
              >
                {/* Pulsing background */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-purple-500/50 z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.3, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  {step.icon}
                </div>
              </motion.div>
              
              {/* Step connector for desktop */}
              {index < process.length - 1 && (
                <motion.div 
                  className="absolute left-12 top-24 w-1 h-16 bg-gradient-to-b from-purple-600 to-transparent hidden md:block"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                />
              )}
              
              {/* Step content */}
              <motion.div 
                className={`md:ml-8 text-center md:text-left ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-3">{step.title}</h3>
                <p className="text-gray-400 max-w-md">{step.description}</p>
                
                {/* Tech keywords */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  {["Unity", "Unreal", "Blender", "3DS Max", "Photoshop", "Substance"].slice(0, 2 + index).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {/* Decorative circles */}
              <motion.div 
                className={`absolute w-3 h-3 rounded-full bg-purple-500 hidden md:block 
                  ${index % 2 === 0 ? "left-1/2 -translate-x-1/2" : "right-0"}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
