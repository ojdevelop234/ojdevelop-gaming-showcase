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
    technologies: ["Unity", "C#", "Procedural Generation"]
  },
  {
    id: 2,
    title: "Pixel Warriors",
    description: "Retro-style action platformer with modern gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "2D Game",
    technologies: ["Unity", "C#", "Pixel Art"]
  },
  {
    id: 3,
    title: "Ancient Realms",
    description: "Fantasy environments with realistic lighting and physics simulations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Game Environments",
    technologies: ["Unreal Engine", "C++", "Environment Design"]
  },
  {
    id: 4,
    title: "Particle Mayhem",
    description: "Next-gen visual effects system for explosive game moments.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    category: "Game VFX",
    technologies: ["Unity", "Shader Graph", "VFX"]
  },
  {
    id: 5,
    title: "Dungeon Crawler",
    description: "Procedurally generated dungeons with roguelike elements.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
    category: "3D Game",
    technologies: ["Unity", "C#", "AI"]
  },
  {
    id: 6,
    title: "Neon Racer",
    description: "Futuristic racing game with dynamic tracks and physics.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    category: "3D Game",
    technologies: ["Unreal Engine", "Blueprint", "Physics"]
  },
  {
    id: 7,
    title: "Strategy Command",
    description: "Real-time strategy game with advanced AI opponents.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    category: "Strategy",
    technologies: ["Unity", "C#", "AI"]
  },
  {
    id: 8,
    title: "VR Experience",
    description: "Immersive virtual reality adventure set in alien worlds.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    category: "VR",
    technologies: ["Unity", "C#", "VR"]
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

// Custom CTA for Portfolio page with new beautiful styling
const PortfolioCallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/10 to-purple-900/20"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-2xl blur-sm opacity-30"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-purple-500/20">
              {/* Header with gradient text */}
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: '200% auto' }}
              >
                Ready to Bring Your Game to Life?
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                From indie concepts to AAA experiences, we're here to transform your vision into an unforgettable gaming adventure.
              </motion.p>
              
              {/* CTA Button with reduced size */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center"
              >
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Button 
                      size="sm"
                      className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 h-10 text-sm font-medium rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Let's Create Together
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                      
                      {/* Animated shine effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
