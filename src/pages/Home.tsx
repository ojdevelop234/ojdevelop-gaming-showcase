
import { useState, useEffect, Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gamepad2, Layout, PenTool, Code, Cpu, Braces } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";

// Lazy load components for better performance
const FeaturedProjectCard = lazy(() => import("@/components/FeaturedProjectCard"));

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  
  const skills = [
    { name: "Unity 3D", level: 92 },
    { name: "Unreal Engine", level: 88 },
    { name: "C#", level: 90 },
    { name: "C++", level: 82 },
    { name: "3D Modeling", level: 78 },
    { name: "Game Design", level: 95 },
    { name: "VFX", level: 85 },
    { name: "Roblox Development", level: 80 }
  ];
  
  const services = [
    {
      title: "3D Game Development",
      description: "Full-cycle development of immersive 3D games with cutting-edge graphics and engaging gameplay.",
      icon: <Gamepad2 className="w-12 h-12 text-purple-400" />
    },
    {
      title: "2D Game Development",
      description: "Crafting captivating 2D experiences from casual mobile games to complex side-scrollers.",
      icon: <Layout className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Game Environment Design",
      description: "Creating stunning, immersive game worlds with attention to detail and atmospheric elements.",
      icon: <PenTool className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Visual Effects (VFX)",
      description: "Spectacular visual effects that enhance gameplay and elevate the player experience.",
      icon: <Code className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Roblox Game Development",
      description: "Custom Roblox experiences designed for broad appeal and community engagement.",
      icon: <Cpu className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Custom Game Solutions",
      description: "Tailored game development solutions for specific needs, platforms, and audiences.",
      icon: <Braces className="w-12 h-12 text-purple-400" />
    }
  ];

  const process = [
    {
      title: "Concept & Planning",
      description: "We start by defining your vision, requirements, and game mechanics.",
      icon: <PenTool className="w-10 h-10 text-white" />
    },
    {
      title: "Design & Prototyping",
      description: "Creating the visual style and developing a playable prototype.",
      icon: <Layout className="w-10 h-10 text-white" />
    },
    {
      title: "Development",
      description: "Building the game with regular updates and milestone reviews.",
      icon: <Code className="w-10 h-10 text-white" />
    },
    {
      title: "Testing & QA",
      description: "Rigorous quality assurance to ensure a polished product.",
      icon: <Gamepad2 className="w-10 h-10 text-white" />
    },
    {
      title: "Launch & Support",
      description: "Game release with continued support and updates.",
      icon: <Cpu className="w-10 h-10 text-white" />
    }
  ];
  
  const featuredProjects = [
    {
      id: 1,
      title: "Cosmic Odyssey",
      description: "A space exploration adventure with procedurally generated planets.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "3D Game",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "Pixel Warriors",
      description: "Retro-style action platformer with modern gameplay mechanics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "2D Game",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Ancient Realms",
      description: "Immersive fantasy environments with realistic lighting and physics.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      category: "Game Environments",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Particle Mayhem",
      description: "Next-gen visual effects system for explosive game moments.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      category: "Game VFX",
      demoUrl: "#"
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Indie Game Publisher",
      content: "The team at OjDevelop Studio transformed our concept into a stunning game that exceeded all expectations. Their technical prowess and creativity are unmatched.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Game Studio Director",
      content: "We've collaborated with OjDevelop on multiple projects, and they consistently deliver exceptional quality. Their attention to detail and innovative solutions make them an invaluable partner.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "AR/VR Developer",
      content: "The visual effects created by OjDevelop Studio for our VR experience were groundbreaking. They have a deep understanding of what makes immersive experiences truly memorable.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section with uploaded image */}
      <HeroSection />
      
      {/* About Section - New component with timeline animation */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillSection skills={skills} />
      
      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">What We Offer</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              From concept to release, we provide comprehensive game development services to bring your vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedServiceCard
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <ProcessSection process={process} />
      
      {/* Featured Projects Section - Fixed performance issues */}
      <section id="projects" className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">Featured Projects</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-8">
              Explore some of our best work across different game categories.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Suspense fallback={<div className="h-80 bg-gray-800 animate-pulse rounded-lg col-span-full"></div>}>
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </Suspense>
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 text-white rounded-md font-medium text-sm
                transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                View All Projects
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gray-850 bg-opacity-30">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">What Our Clients Say</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Hear from the studios and clients we've had the pleasure of working with.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedTestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - New enhanced component */}
      <CallToAction />
      
      <Footer />
    </div>
  );
};

// Animated Service Card Component
const AnimatedServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ 
          backgroundSize: '200% 200%', 
          filter: 'blur(8px)', 
        }}
      />
      
      <div className="bg-gray-800 border-gray-700 h-full hover:border-purple-500 transition-colors duration-300 z-10 relative p-6 rounded-lg">
        <div className="pb-2">
          {service.icon}
          <h3 className="text-xl mt-4 text-purple-300 font-semibold">{service.title}</h3>
        </div>
        <div>
          <p className="text-gray-400 text-base">{service.description}</p>
        </div>
        
        {/* Animated corner accent */}
        <motion.div 
          className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
          animate={{ 
            rotate: isHovered ? 90 : 0,
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L3 12H7V21H17V12H21L12 3Z" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated Testimonial Card Component
const AnimatedTestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
      whileHover={{ y: -10 }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 blur-md -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      
      <div className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors duration-300 p-6 rounded-lg">
        <div className="pt-2">
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-purple-500/50"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h4 className="text-lg font-medium text-purple-300">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <p className="italic text-gray-300">"{testimonial.content}"</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
