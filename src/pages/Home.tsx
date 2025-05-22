
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Users, Award, Rocket, Layout, Gamepad2, Braces, Cpu, PenTool, CheckCircle2 } from "lucide-react";

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
      icon: <PenTool className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Design & Prototyping",
      description: "Creating the visual style and developing a playable prototype.",
      icon: <Layout className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Development",
      description: "Building the game with regular updates and milestone reviews.",
      icon: <Code className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Testing & QA",
      description: "Rigorous quality assurance to ensure a polished product.",
      icon: <CheckCircle2 className="w-10 h-10 text-purple-400" />
    },
    {
      title: "Launch & Support",
      description: "Game release with continued support and updates.",
      icon: <Rocket className="w-10 h-10 text-purple-400" />
    }
  ];
  
  const featuredProjects = [
    {
      id: 1,
      title: "Cosmic Odyssey",
      description: "A space exploration adventure with procedurally generated planets.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "3D Game"
    },
    {
      id: 2,
      title: "Pixel Warriors",
      description: "Retro-style action platformer with modern gameplay mechanics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "2D Game"
    },
    {
      id: 3,
      title: "Ancient Realms",
      description: "Immersive fantasy environments with realistic lighting and physics.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      category: "Game Environments"
    },
    {
      id: 4,
      title: "Particle Mayhem",
      description: "Next-gen visual effects system for explosive game moments.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      category: "Game VFX"
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
            <span className="text-purple-400">OjDevelop Studio</span>
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
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Rocket className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-xl text-purple-300">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We continuously explore new technologies and techniques to create 
                  unique gaming experiences that stand out in the market.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-xl text-purple-300">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We're committed to excellence in every aspect of our work, 
                  from concept to deployment and beyond.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-xl text-purple-300">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We work closely with our clients, valuing transparent communication 
                  and partnership throughout the development process.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-gray-850 bg-opacity-30">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">Our Technology Stack</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              We leverage cutting-edge technologies and industry-standard tools to create exceptional gaming experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-sm text-purple-400">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-gray-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 h-full hover:border-purple-500 transition-colors duration-300">
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
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" className="py-24 px-4 bg-gray-850 bg-opacity-30">
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
          
          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center mb-12 md:mb-8 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Timeline line */}
                {index < process.length - 1 && (
                  <div className="absolute top-24 md:top-12 left-[39px] md:left-[59px] w-1 h-[calc(100%+32px)] bg-gray-700 hidden md:block"></div>
                )}
                
                {/* Step indicator */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 border-2 border-purple-500 text-white mb-4 md:mb-0 z-10">
                  {step.icon}
                </div>
                
                {/* Step content */}
                <div className="md:ml-8 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-12"
            >
              <Button 
                asChild
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden flex flex-col bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
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
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-purple-300">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="italic text-gray-300">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
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
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gray-800/80 backdrop-blur-sm p-12 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
