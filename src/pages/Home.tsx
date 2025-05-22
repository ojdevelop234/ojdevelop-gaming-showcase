
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Users, Award, Rocket, Layout, Gamepad2, Braces, Cpu, PenTool, CheckCircle2, ExternalLink, Info } from "lucide-react";
import SkillSection from "@/components/SkillSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

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
      icon: <CheckCircle2 className="w-10 h-10 text-white" />
    },
    {
      title: "Launch & Support",
      description: "Game release with continued support and updates.",
      icon: <Rocket className="w-10 h-10 text-white" />
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
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1)',
              filter: 'brightness(0.4)'
            }}
          />
          
          {/* Animated 3D grid */}
          <div className="absolute inset-0 z-0 perspective-1000">
            <div className="h-full w-full transform-style-3d">
              {[...Array(10)].map((_, row) => (
                <div key={`grid-row-${row}`} className="relative w-full" style={{ height: '10%' }}>
                  {[...Array(10)].map((_, col) => (
                    <motion.div
                      key={`grid-${row}-${col}`}
                      className="absolute border border-purple-500/10"
                      style={{ 
                        height: '100%', 
                        width: '10%',
                        left: `${col * 10}%`,
                      }}
                      animate={{
                        opacity: [0.1, 0.2, 0.1],
                        rotateX: [0, 5, 0],
                        rotateY: [0, 10, 0],
                      }}
                      transition={{ 
                        duration: 3 + (row + col) % 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Animated particles */}
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
              {["01", "10", "</>", "[]", "&&", "||", "=>", "class", "const", "function"][i % 10]}
            </motion.div>
          ))}
        </div>
        
        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl"
          style={{ opacity, y }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Welcome to </span>
            <span className="text-purple-400 relative inline-block">
              OjDevelop Studio
              {/* Underline animation */}
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-purple-400"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-3xl font-light mb-8 text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting Immersive Digital Worlds & Gaming Experiences
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We're a passionate team of game developers dedicated to creating extraordinary 
            interactive experiences that captivate and inspire players worldwide.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-6 h-auto"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                variant="outline" 
                className="text-lg border-purple-500 text-purple-400 hover:bg-purple-500/20 px-6 py-6 h-auto"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

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
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">About OjDevelop Studio</h2>
            <p className="text-lg mb-8 text-gray-300">
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Link to="/portfolio">Explore Our Portfolio</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedCard
              icon={<Rocket className="h-12 w-12 text-purple-400 mb-4" />}
              title="Innovation"
              content="We continuously explore new technologies and techniques to create unique gaming experiences that stand out in the market."
            />
            
            <AnimatedCard
              icon={<Award className="h-12 w-12 text-purple-400 mb-4" />}
              title="Quality"
              content="We're committed to excellence in every aspect of our work, from concept to deployment and beyond."
            />
            
            <AnimatedCard
              icon={<Users className="h-12 w-12 text-purple-400 mb-4" />}
              title="Collaboration"
              content="We work closely with our clients, valuing transparent communication and partnership throughout the development process."
            />
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section - Using our new component */}
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
      
      {/* Process Section - Using our new component */}
      <ProcessSection process={process} />
      
      {/* Featured Projects Section */}
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
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg"
              >
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </motion.div>
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
      
      {/* CTA Section */}
      <section id="cta" className="py-24 px-4 relative">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 z-0" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7)' }}
        />
        
        {/* Interactive particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-purple-500/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
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
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gray-800/80 backdrop-blur-sm p-12 rounded-2xl border border-gray-700 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 z-0 opacity-30"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{ 
                backgroundSize: '200% 200%',
              }}
            />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-purple-400">Ready to Bring Your Game to Life?</h2>
              <p className="text-lg mb-8 text-gray-300">
                Let's collaborate to create an exceptional gaming experience that captivates and engages players.
                Our team is ready to turn your vision into reality.
              </p>
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild
                    className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-6 h-auto"
                  >
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild
                    variant="outline" 
                    className="text-lg border-purple-500 text-purple-400 hover:bg-purple-500/20 px-6 py-6 h-auto"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Animated Card Component
const AnimatedCard = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
      whileHover={{ y: -10 }}
    >
      {/* Glowing border */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <Card className="bg-gray-800 border-gray-700 h-full relative z-10">
        <CardHeader>
          {icon}
          <CardTitle className="text-xl text-purple-300">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            {content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Animated Service Card Component
const AnimatedServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
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
      
      <Card className="bg-gray-800 border-gray-700 h-full hover:border-purple-500 transition-colors duration-300 z-10 relative">
        <CardHeader className="pb-2">
          {service.icon}
          <CardTitle className="text-xl mt-4 text-purple-300">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400 text-base">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
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
      
      <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors duration-300">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-purple-500/50"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h4 className="text-lg font-medium text-purple-300">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <p className="italic text-gray-300">"{testimonial.content}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Home;
