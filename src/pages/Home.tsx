
import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gamepad2, Layout, PenTool, Code, Cpu, Braces } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TechStackSection from "@/components/TechStackSection";

// Lazy load components for better performance
const FeaturedProjectCard = lazy(() => import("@/components/FeaturedProjectCard"));

const Home = () => {
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
      icon: <Gamepad2 className="w-10 h-10 text-purple-400" />
    },
    {
      title: "2D Game Development",
      description: "Crafting captivating 2D experiences from casual mobile games to complex side-scrollers.",
      icon: <Layout className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Game Environment Design",
      description: "Creating stunning, immersive game worlds with attention to detail and atmospheric elements.",
      icon: <PenTool className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Visual Effects (VFX)",
      description: "Spectacular visual effects that enhance gameplay and elevate the player experience.",
      icon: <Code className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Roblox Game Development",
      description: "Custom Roblox experiences designed for broad appeal and community engagement.",
      icon: <Cpu className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Custom Game Solutions",
      description: "Tailored game development solutions for specific needs, platforms, and audiences.",
      icon: <Braces className="w-10 h-10 text-purple-400" />
    }
  ];

  const process = [
    {
      title: "Concept & Planning",
      description: "We start by defining your vision, requirements, and game mechanics.",
      icon: <PenTool className="w-8 h-8 text-white" />
    },
    {
      title: "Design & Prototyping",
      description: "Creating the visual style and developing a playable prototype.",
      icon: <Layout className="w-8 h-8 text-white" />
    },
    {
      title: "Development",
      description: "Building the game with regular updates and milestone reviews.",
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      title: "Testing & QA",
      description: "Rigorous quality assurance to ensure a polished product.",
      icon: <Gamepad2 className="w-8 h-8 text-white" />
    },
    {
      title: "Launch & Support",
      description: "Game release with continued support and updates.",
      icon: <Cpu className="w-8 h-8 text-white" />
    }
  ];
  
  const featuredProjects = [
    {
      id: 1,
      title: "Cosmic Odyssey",
      description: "A space exploration adventure with procedurally generated planets.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "3D Game",
      demoUrl: "#",
      detailedDescription: "Cosmic Odyssey is an immersive space exploration game featuring procedural generation technology that creates unique planets, star systems, and alien species for each player."
    },
    {
      id: 2,
      title: "Pixel Warriors",
      description: "Retro-style action platformer with modern gameplay mechanics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "2D Game",
      demoUrl: "#",
      detailedDescription: "Pixel Warriors combines classic pixel art aesthetics with modern gameplay innovations."
    },
    {
      id: 3,
      title: "Ancient Realms",
      description: "Immersive fantasy environments with realistic lighting and physics.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      category: "Game Environments",
      demoUrl: "#",
      detailedDescription: "Ancient Realms showcases our expertise in creating breathtaking game environments."
    },
    {
      id: 4,
      title: "Particle Mayhem",
      description: "Next-gen visual effects system for explosive game moments.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      category: "Game VFX",
      demoUrl: "#",
      detailedDescription: "Particle Mayhem is a cutting-edge visual effects system designed to create spectacular in-game moments."
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <SkillSection skills={skills} />
      <TechStackSection />
      
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">What We Offer</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300">
              From concept to release, we provide comprehensive game development services to bring your vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      
      <ProcessSection process={process} />
      
      {/* Featured Projects Section */}
      <section id="projects" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Featured Projects</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300 mb-8">
              Explore some of our best work across different game categories.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 col-span-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>
                ))}
              </div>
            }>
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </Suspense>
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white rounded-md font-medium text-sm
                transform transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20"
              >
                View All Projects
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 px-4 bg-gray-850 bg-opacity-30">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">What Our Clients Say</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300">
              Hear from the studios and clients we've had the pleasure of working with.
            </p>
          </motion.div>
          
          <TestimonialsCarousel />
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

// Simplified AnimatedServiceCard Component
const AnimatedServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="bg-gray-800 border border-gray-700 h-full hover:border-purple-500 transition-colors duration-200 z-10 relative p-6 rounded-lg">
        <div className="pb-2">
          {service.icon}
          <h3 className="text-lg md:text-xl mt-4 text-purple-300 font-semibold">{service.title}</h3>
        </div>
        <div>
          <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
