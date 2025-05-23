
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Projects data
const projectsData = [
  {
    id: 1,
    title: "Cosmic Odyssey",
    description: "A space exploration adventure with procedurally generated planets.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "3D Game",
    tags: ["Unity", "C#", "Procedural Generation"]
  },
  {
    id: 2,
    title: "Pixel Warriors",
    description: "Retro-style action platformer with modern gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "2D Game",
    tags: ["Unity", "C#", "Pixel Art"]
  },
  {
    id: 3,
    title: "Ancient Realms",
    description: "Fantasy environments with realistic lighting and physics simulations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Game Environments",
    tags: ["Unreal Engine", "C++", "Environment Design"]
  },
  {
    id: 4,
    title: "Particle Mayhem",
    description: "Next-gen visual effects system for explosive game moments.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    category: "Game VFX",
    tags: ["Unity", "Shader Graph", "VFX"]
  },
  {
    id: 5,
    title: "Dungeon Crawler",
    description: "Procedurally generated dungeons with roguelike elements.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
    category: "3D Game",
    tags: ["Unity", "C#", "AI"]
  },
  {
    id: 6,
    title: "Neon Racer",
    description: "Futuristic racing game with dynamic tracks and physics.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    category: "3D Game",
    tags: ["Unreal Engine", "Blueprint", "Physics"]
  },
  {
    id: 7,
    title: "Strategy Command",
    description: "Real-time strategy game with advanced AI opponents.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    category: "Strategy",
    tags: ["Unity", "C#", "AI"]
  },
  {
    id: 8,
    title: "VR Experience",
    description: "Immersive virtual reality adventure set in alien worlds.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    category: "VR",
    tags: ["Unity", "C#", "VR"]
  }
];

// Categories for filter
const categories = ["All", "3D Game", "2D Game", "Game Environments", "Game VFX", "Strategy", "VR"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Filter projects based on active category
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  useEffect(() => {
    // Set loaded after initial render for animations
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0 blur-sm" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420')",
            backgroundSize: 'cover'
          }}
        />
        
        <motion.div 
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Our <span className="text-purple-400">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Dive into our showcase of game development projects, highlighting our technical skills and creative vision.
          </p>
        </motion.div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  activeCategory === category 
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* Empty state when no projects match filter */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl text-gray-400 mb-4">No projects in this category yet</h3>
              <Button 
                onClick={() => setActiveCategory("All")} 
                variant="outline"
                size="sm"
                className="border-purple-500 text-purple-400"
              >
                View All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Custom CTA Section */}
      <PortfolioCallToAction />
      
      <Footer />
    </div>
  );
};

// Custom CTA for Portfolio page
const PortfolioCallToAction = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background with gradient and animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-0"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: "linear" 
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-800/60 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/30 shadow-lg">
            <motion.h3 
              className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% auto' }}
            >
              Ready for Your Next Gaming Project?
            </motion.h3>
                
            <motion.p 
              className="text-gray-300 mb-6 text-center max-w-xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Let's create something amazing together. Get in touch to discuss your game development needs.
            </motion.p>
              
            <div className="flex justify-center">
              <Link to="/contact">
                <Button 
                  size="sm"
                  variant="default"
                  className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-xs px-4 py-1 h-8"
                  asChild
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <span className="relative z-10">Contact Us</span>
                    
                    {/* Glint animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
