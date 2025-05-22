
import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CallToAction = ({
  title = "Ready to Bring Your Game to Life?",
  description = "Let's collaborate to create an exceptional gaming experience that captivates and engages players.",
  primaryButtonText = "View Our Work",
  primaryButtonLink = "/portfolio",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
}: CallToActionProps) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        aria-hidden="true"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
              ],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div key={`row-${i}`} className="border-t border-purple-500/10" />
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={`col-${i}`} className="border-l border-purple-500/10" />
          ))}
        </div>
      </div>
      
      {/* Content container */}
      <div 
        className="container mx-auto max-w-4xl relative z-10"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="relative bg-gray-800/40 backdrop-blur-md rounded-2xl p-10 md:p-12 overflow-hidden border border-gray-700"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Spotlight effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  300px circle at ${mouseX}px ${mouseY}px,
                  rgba(139, 92, 246, 0.15),
                  transparent 80%
                )
              `,
            }}
            whileHover={{ opacity: 1 }}
          />
          
          {/* Content */}
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                onMouseEnter={() => setHoveredButton("primary")}
                onMouseLeave={() => setHoveredButton(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  size="sm"
                  className="relative overflow-hidden bg-purple-600 border-2 border-transparent hover:bg-purple-700 font-medium px-6"
                >
                  <Link to={primaryButtonLink}>
                    {/* Button glint effect */}
                    {hoveredButton === "primary" && (
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                    )}
                    {primaryButtonText}
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                onMouseEnter={() => setHoveredButton("secondary")}
                onMouseLeave={() => setHoveredButton(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  size="sm"
                  variant="outline" 
                  className="relative overflow-hidden border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 px-6"
                >
                  <Link to={secondaryButtonLink}>
                    {/* Button glint effect */}
                    {hoveredButton === "secondary" && (
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-20" 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                    )}
                    {secondaryButtonText}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
