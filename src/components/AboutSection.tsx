
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

const AboutSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.3, 1, 1, 0.3]);
  
  // Timeline animation trigger states
  const [timelineVisible, setTimelineVisible] = useState([false, false, false, false]);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setTimelineVisible([true, false, false, false]);
        
        setTimeout(() => {
          setTimelineVisible([true, true, false, false]);
          
          setTimeout(() => {
            setTimelineVisible([true, true, true, false]);
            
            setTimeout(() => {
              setTimelineVisible([true, true, true, true]);
            }, 800);
          }, 800);
        }, 800);
      }, 400);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);
  
  // Core values animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Particle animation
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const generateParticles = () => {
      return [...Array(25)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 15 + 10,
        opacity: Math.random() * 0.5 + 0.1
      }));
    };
    
    setParticles(generateParticles());
  }, []);
  
  return (
    <section ref={containerRef} id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-500"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
          animate={{
            x: [0, Math.random() * 60 - 30],
            y: [0, Math.random() * 60 - 30],
            opacity: [particle.opacity, particle.opacity/2, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto">
        <AnimatedSectionTitle 
          title="About Our Studio" 
          subtitle="Passionate about creating amazing game experiences that captivate players"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Studio journey timeline */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Our Journey</h3>
              
              <div className="space-y-10 relative">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-[18px] w-1 bg-gradient-to-b from-purple-500/20 via-purple-500/60 to-purple-500/20"></div>
                
                {/* Timeline items */}
                {[
                  {
                    year: "2019",
                    title: "Studio Founded",
                    description: "Started with a small team of passionate developers looking to create innovative games"
                  },
                  {
                    year: "2020",
                    title: "First Major Release",
                    description: "Launched our debut title to critical acclaim and built our core audience"
                  },
                  {
                    year: "2022",
                    title: "Team Expansion",
                    description: "Grew to 15+ developers and established specialized departments"
                  },
                  {
                    year: "2023",
                    title: "International Recognition",
                    description: "Received multiple awards and expanded to global markets"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: timelineVisible[index] ? 1 : 0, 
                      x: timelineVisible[index] ? 0 : -20 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm z-10 relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: timelineVisible[index] ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {index + 1}
                      </motion.div>
                      
                      {/* Pulse effect */}
                      {timelineVisible[index] && (
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-purple-500"
                          animate={{ 
                            scale: [1, 1.8, 1],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                      )}
                    </div>
                    
                    <div>
                      <div className="text-sm text-purple-400 font-medium mb-1">{item.year}</div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mission & Vision */}
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Our Mission & Vision</h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={itemVariants} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-xl font-semibold text-white mb-2">Mission</h4>
                  <p className="text-gray-300">
                    To create innovative gaming experiences that bring joy and excitement to players worldwide,
                    while pushing the boundaries of what games can achieve as an art form and entertainment medium.
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-xl font-semibold text-white mb-2">Vision</h4>
                  <p className="text-gray-300">
                    To become a leading game development studio recognized for crafting immersive worlds, 
                    compelling narratives, and gameplay that resonates with diverse audiences globally.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Studio profile with image */}
          <div>
            <motion.div 
              className="relative mb-10"
              style={{ y, opacity }}
              ref={imageRef}
            >
              <div className="w-full h-[480px] relative rounded-lg overflow-hidden group">
                {/* Image */}
                <motion.img 
                  src="/lovable-uploads/ea23158e-4cd2-4c40-93c5-d52302f8dd03.png"
                  alt="Game Character" 
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                  initial={{ filter: "grayscale(80%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  transition={{ duration: 1.5 }}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    OjDevelop Studio
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    A team of passionate developers and artists dedicated to crafting 
                    unforgettable gaming experiences.
                  </motion.p>
                </div>
                
                {/* Hover decoration */}
                <motion.div 
                  className="absolute inset-0 border-2 border-purple-500 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
            
            {/* Core values */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: "Innovation", description: "We constantly push boundaries to create fresh gaming experiences." },
                  { value: "Quality", description: "We never compromise on the polish and performance of our games." },
                  { value: "Player-First", description: "Our decisions always prioritize the player experience." },
                  { value: "Community", description: "We believe in building and nurturing strong player communities." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800/50 p-5 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">{item.value}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
