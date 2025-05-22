
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Code, Github, Linkedin, Mail, User, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [resumeClicked, setResumeClicked] = useState(false);
  
  const handleResumeDownload = () => {
    setResumeClicked(true);
    toast({
      title: "Resume download started",
      description: "Thank you for your interest in my resume!",
    });
    
    // Reset the button state after animation completes
    setTimeout(() => setResumeClicked(false), 1000);
  };

  const skills = [
    { name: "Unity 3D", level: 90 },
    { name: "Unreal Engine", level: 85 },
    { name: "C#", level: 88 },
    { name: "C++", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "3D Modeling", level: 70 },
    { name: "Game Design", level: 92 },
    { name: "Version Control", level: 82 }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Cosmic Odyssey",
      description: "A space exploration game with procedurally generated planets and an immersive storyline.",
      technologies: ["Unity 3D", "C#", "Shader Graph"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      demoUrl: "https://example.com/cosmic-odyssey",
      repoUrl: "https://github.com/yourusername/cosmic-odyssey"
    },
    {
      id: 2,
      title: "Dungeon Crawler",
      description: "A classic dungeon crawler with modern graphics and roguelike elements.",
      technologies: ["Unreal Engine", "C++", "Blueprints"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      demoUrl: "https://example.com/dungeon-crawler",
      repoUrl: "https://github.com/yourusername/dungeon-crawler"
    },
    {
      id: 3,
      title: "Strategy Commander",
      description: "A turn-based strategy game with dynamic AI opponents and multiplayer functionality.",
      technologies: ["Unity 3D", "C#", "Photon Networking"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      demoUrl: "https://example.com/strategy-commander",
      repoUrl: "https://github.com/yourusername/strategy-commander"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <motion.section 
        id="about" 
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="md:w-1/3"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-purple-500 rounded-full opacity-30 blur-lg"></div>
              <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                <User size={80} className="text-purple-400" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-400">About Me</h2>
            <p className="text-lg mb-6">
              I'm a passionate game developer with over 5 years of experience creating immersive and engaging experiences. 
              My journey began with a fascination for how games blend art, technology, and storytelling into interactive experiences.
              I've worked on various projects ranging from indie mobile games to larger PC titles, always striving to push 
              the boundaries of what's possible.
            </p>
            <p className="text-lg mb-8">
              With expertise in Unity and Unreal Engine, I specialize in gameplay programming, 
              physics systems, and creating intuitive player controllers. I'm constantly expanding my skills and staying 
              updated with the latest game development trends and technologies.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleResumeDownload}
                className={`bg-purple-600 hover:bg-purple-700 text-white ${resumeClicked ? 'animate-pulse' : ''}`}
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-gray-850 bg-opacity-30 rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Skills & Expertise</h2>
        
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
      </motion.section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-gray-850 bg-opacity-30 rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <div className="space-y-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-purple-400">Connect With Me</CardTitle>
                  <CardDescription>Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <motion.a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a 
                    href="https://youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Youtube size={24} />
                  </motion.a>
                  <motion.a 
                    href="mailto:info@gamedeveloper.com" 
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Mail size={24} />
                  </motion.a>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-400">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2">Game Developer & Creative Technologist</p>
      </footer>
    </div>
  );
};

export default Index;
