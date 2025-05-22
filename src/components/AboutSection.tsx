
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Award, 
  Users, 
  Star, 
  Heart, 
  Zap 
} from "lucide-react";

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Parallax effect for the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Timeline animations
  const timeline = [
    {
      year: "2020",
      title: "Studio Founded",
      description: "OjDevelop Studio was established with a vision to create exceptional gaming experiences."
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Released our debut game 'Cosmic Odyssey' to critical acclaim."
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Doubled our team size and opened a second development office."
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received multiple industry awards for innovation and game design."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding into VR/AR gaming and interactive entertainment experiences."
    }
  ];
  
  // Core values animation cards
  const coreValues = [
    {
      icon: <Star className="h-8 w-8 text-purple-400" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from concept to final delivery."
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-400" />,
      title: "Passion",
      description: "Our team is fueled by a genuine passion for creating memorable gaming experiences."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to stay ahead of the curve."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-400">About OjDevelop Studio</h2>
        </motion.div>
        
        {/* Main Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Story</h3>
            <p className="text-lg mb-6 text-gray-300">
              Founded in 2020, OjDevelop Studio is a creative powerhouse of designers, developers, 
              and artists dedicated to crafting exceptional gaming experiences. We combine technical 
              expertise with artistic vision to create games that push boundaries and captivate players.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Our team brings together decades of combined experience in game development, 
              with expertise spanning multiple platforms, genres, and technologies. 
              We're passionate about innovation, quality, and delivering experiences that leave 
              a lasting impression.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Mission</h3>
            <p className="text-lg mb-8 text-gray-300">
              To create immersive, innovative gaming experiences that inspire players and push the 
              boundaries of interactive entertainment, while fostering a collaborative and creative 
              work environment.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                asChild
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 transform transition-all duration-300"
              >
                <Link to="/portfolio">Explore Our Portfolio</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right column - Image with Parallax */}
          <motion.div 
            className="relative h-[500px] rounded-lg overflow-hidden"
            style={{ y: imageY }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Main image */}
            <div className="relative h-full w-full rounded-lg overflow-hidden group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 z-10"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
              />
              <img 
                src="/lovable-uploads/ffeffba4-c81d-4d58-81da-0f9ed94832eb.png"
                alt="Game character in dark armor with sword"
                className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Animated overlay */}
              <motion.div 
                className="absolute inset-0 border-2 border-purple-400/50 rounded-lg z-20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-purple-300">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px -10px rgba(139, 92, 246, 0.3)"
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 p-3 rounded-full bg-purple-500/10 inline-block">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-purple-300">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Timeline Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center text-purple-300">Our Journey</h3>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500/30" />
            
            {/* Timeline events */}
            {timeline.map((event, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'flex-row-reverse justify-start'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <motion.div 
                    className="w-5 h-5 rounded-full bg-purple-500"
                    whileInView={{
                      boxShadow: [
                        "0 0 0 0 rgba(139, 92, 246, 0)",
                        "0 0 0 10px rgba(139, 92, 246, 0.3)",
                        "0 0 0 0 rgba(139, 92, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 1.5, delay: index * 0.15, repeat: 0 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                {/* Content */}
                <div className={`w-5/12 px-4 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800/60 backdrop-blur-sm p-5 rounded-lg border border-gray-700">
                    <span className="text-sm text-purple-400 font-bold">{event.year}</span>
                    <h4 className="text-lg font-bold mb-2 text-purple-300">{event.title}</h4>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Animated particles background */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-purple-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.7,
            }}
            animate={{
              y: [
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
              ],
              x: [
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
              ],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
};

// Features in the component:
// 1. Parallax effect on the profile image
// 2. Animated timeline for the studio's journey
// 3. Core values section with hover animations
// 4. Background particle animations
// 5. Scroll-based reveal for different sections
// 6. Hover effects for interactive elements

export default AboutSection;
