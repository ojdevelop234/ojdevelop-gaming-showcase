
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Enhanced project type
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  detailedDescription?: string;
  demoUrl?: string;
  repoUrl?: string;
  completionDate?: string;
  timeline?: string;
  cost?: string;
  screenshots?: string[];
}

// Expanded projects data with 6 categories and 6 projects each
const projectsData: Project[] = [
  // 2D Game Category
  {
    id: 1,
    title: "Pixel Adventure",
    description: "Retro-style platformer with modern mechanics and beautiful pixel art.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "2D Game",
    technologies: ["Unity", "C#", "Photoshop", "Aseprite"],
    detailedDescription: "A comprehensive 2D platformer featuring multiple worlds, power-ups, and challenging boss battles with hand-crafted pixel art animations.",
    demoUrl: "#",
    completionDate: "March 2024",
    timeline: "4 months",
    cost: "$15,000",
    screenshots: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"]
  },
  {
    id: 2,
    title: "Magic Kingdom",
    description: "Fantasy RPG with spell casting and magical creatures.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
    category: "2D Game",
    technologies: ["Unity", "C#", "Spine2D", "Adobe Illustrator"],
    detailedDescription: "An immersive RPG featuring a rich storyline, character progression, and dynamic spell-casting system.",
    demoUrl: "#",
    completionDate: "January 2024",
    timeline: "6 months",
    cost: "$22,000",
    screenshots: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176"]
  },
  {
    id: 3,
    title: "Neon Runner",
    description: "High-speed endless runner with cyberpunk aesthetics.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    category: "2D Game",
    technologies: ["Unity", "C#", "After Effects", "Photoshop"],
    detailedDescription: "Fast-paced endless runner featuring neon-lit environments and dynamic obstacle generation.",
    demoUrl: "#",
    completionDate: "February 2024",
    timeline: "3 months",
    cost: "$12,000",
    screenshots: ["https://images.unsplash.com/photo-1563089145-599997674d42"]
  },
  {
    id: 4,
    title: "Space Shooter",
    description: "Classic arcade-style space shooter with modern graphics.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06",
    category: "2D Game",
    technologies: ["Godot", "GDScript", "Blender", "GIMP"],
    detailedDescription: "A tribute to classic arcade shooters with enhanced graphics and progressive difficulty.",
    demoUrl: "#",
    completionDate: "December 2023",
    timeline: "2 months",
    cost: "$8,000",
    screenshots: ["https://images.unsplash.com/photo-1446776653964-20c1d3a81b06"]
  },
  {
    id: 5,
    title: "Puzzle Quest",
    description: "Mind-bending puzzle game with unique mechanics.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5",
    category: "2D Game",
    technologies: ["Unity", "C#", "Adobe XD", "Illustrator"],
    detailedDescription: "An innovative puzzle game featuring gravity manipulation and time-based challenges.",
    demoUrl: "#",
    completionDate: "November 2023",
    timeline: "5 months",
    cost: "$18,000",
    screenshots: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5"]
  },
  {
    id: 6,
    title: "Card Master",
    description: "Strategic card game with collectible elements.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    category: "2D Game",
    technologies: ["Unity", "C#", "Photoshop", "Spine2D"],
    detailedDescription: "A strategic card battle game with deck building mechanics and online multiplayer.",
    demoUrl: "#",
    completionDate: "October 2023",
    timeline: "7 months",
    cost: "$25,000",
    screenshots: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"]
  },

  // 3D Game Category
  {
    id: 7,
    title: "Cosmic Odyssey",
    description: "Space exploration adventure with procedurally generated planets.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "3D Game",
    technologies: ["Unity", "C#", "Blender", "Substance Painter"],
    detailedDescription: "An epic space exploration game featuring vast procedurally generated universes and deep crafting systems.",
    demoUrl: "#",
    completionDate: "April 2024",
    timeline: "8 months",
    cost: "$35,000",
    screenshots: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"]
  },
  {
    id: 8,
    title: "Medieval Conquest",
    description: "Third-person action RPG set in medieval times.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    category: "3D Game",
    technologies: ["Unreal Engine", "C++", "Maya", "ZBrush"],
    detailedDescription: "An immersive medieval RPG with realistic combat mechanics and castle siege warfare.",
    demoUrl: "#",
    completionDate: "March 2024",
    timeline: "10 months",
    cost: "$45,000",
    screenshots: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96"]
  },
  {
    id: 9,
    title: "Racing Thunder",
    description: "High-octane racing game with customizable vehicles.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    category: "3D Game",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    detailedDescription: "Adrenaline-pumping racing game featuring dynamic weather and extensive car customization.",
    demoUrl: "#",
    completionDate: "February 2024",
    timeline: "6 months",
    cost: "$28,000",
    screenshots: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    id: 10,
    title: "Dungeon Depths",
    description: "First-person dungeon crawler with horror elements.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
    category: "3D Game",
    technologies: ["Unreal Engine", "Blueprint", "Maya", "Substance Designer"],
    detailedDescription: "A atmospheric dungeon crawler featuring procedural level generation and immersive horror elements.",
    demoUrl: "#",
    completionDate: "January 2024",
    timeline: "7 months",
    cost: "$32,000",
    screenshots: ["https://images.unsplash.com/photo-1551103782-8ab07afd45c1"]
  },
  {
    id: 11,
    title: "Sky Pirates",
    description: "Aerial combat game with steampunk aesthetics.",
    image: "https://images.unsplash.com/photo-1614624532317-60ea3c9d5058",
    category: "3D Game",
    technologies: ["Unity", "C#", "Blender", "Substance Painter"],
    detailedDescription: "Steampunk-inspired aerial combat featuring customizable airships and epic sky battles.",
    demoUrl: "#",
    completionDate: "December 2023",
    timeline: "5 months",
    cost: "$24,000",
    screenshots: ["https://images.unsplash.com/photo-1614624532317-60ea3c9d5058"]
  },
  {
    id: 12,
    title: "Mech Warrior",
    description: "Giant robot combat simulator with customization.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "3D Game",
    technologies: ["Unreal Engine", "C++", "Maya", "ZBrush"],
    detailedDescription: "Intense mech combat simulation with detailed customization and tactical gameplay.",
    demoUrl: "#",
    completionDate: "November 2023",
    timeline: "9 months",
    cost: "$40,000",
    screenshots: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e"]
  },

  // Game Environment Category
  {
    id: 13,
    title: "Ancient Temple",
    description: "Mystical temple environment with dynamic lighting.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Game Environment",
    technologies: ["Unreal Engine", "Maya", "Substance Designer", "World Creator"],
    detailedDescription: "Atmospheric ancient temple featuring advanced lighting systems and environmental storytelling.",
    demoUrl: "#",
    completionDate: "March 2024",
    timeline: "4 months",
    cost: "$20,000",
    screenshots: ["https://images.unsplash.com/photo-1531297484001-80022131f5a1"]
  },
  {
    id: 14,
    title: "Cyberpunk City",
    description: "Futuristic cityscape with neon lighting and rain effects.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
    category: "Game Environment",
    technologies: ["Unity", "Blender", "Substance Painter", "Houdini"],
    detailedDescription: "A detailed cyberpunk metropolis featuring dynamic weather and interactive holographic displays.",
    demoUrl: "#",
    completionDate: "February 2024",
    timeline: "6 months",
    cost: "$30,000",
    screenshots: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176"]
  },
  {
    id: 15,
    title: "Fantasy Forest",
    description: "Enchanted woodland with magical creatures and effects.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    category: "Game Environment",
    technologies: ["Unreal Engine", "SpeedTree", "Substance Designer", "Maya"],
    detailedDescription: "Lush fantasy forest environment with procedural vegetation and magical particle effects.",
    demoUrl: "#",
    completionDate: "January 2024",
    timeline: "5 months",
    cost: "$25,000",
    screenshots: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e"]
  },
  {
    id: 16,
    title: "Desert Wasteland",
    description: "Post-apocalyptic desert with dynamic sand storms.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Game Environment",
    technologies: ["Unity", "World Creator", "Substance Designer", "Houdini"],
    detailedDescription: "Expansive wasteland environment featuring dynamic weather systems and destructible structures.",
    demoUrl: "#",
    completionDate: "December 2023",
    timeline: "4 months",
    cost: "$22,000",
    screenshots: ["https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"]
  },
  {
    id: 17,
    title: "Space Station",
    description: "Detailed sci-fi space station interior and exterior.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06",
    category: "Game Environment",
    technologies: ["Unreal Engine", "Maya", "Substance Painter", "Marmoset Toolbag"],
    detailedDescription: "High-tech space station featuring modular design and realistic zero-gravity physics.",
    demoUrl: "#",
    completionDate: "November 2023",
    timeline: "7 months",
    cost: "$35,000",
    screenshots: ["https://images.unsplash.com/photo-1446776653964-20c1d3a81b06"]
  },
  {
    id: 18,
    title: "Medieval Village",
    description: "Authentic medieval settlement with period-accurate details.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    category: "Game Environment",
    technologies: ["Unity", "Blender", "Substance Designer", "World Creator"],
    detailedDescription: "Historically accurate medieval village featuring detailed architecture and atmospheric lighting.",
    demoUrl: "#",
    completionDate: "October 2023",
    timeline: "6 months",
    cost: "$28,000",
    screenshots: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96"]
  },

  // Game VFX Category
  {
    id: 19,
    title: "Explosion Pack",
    description: "Realistic explosion effects for various scenarios.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    category: "Game VFX",
    technologies: ["Unity", "Houdini", "After Effects", "Substance Designer"],
    detailedDescription: "Comprehensive explosion effects package featuring realistic physics and particle dynamics.",
    demoUrl: "#",
    completionDate: "March 2024",
    timeline: "3 months",
    cost: "$15,000",
    screenshots: ["https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"]
  },
  {
    id: 20,
    title: "Magic Spells",
    description: "Fantasy spell effects with particle systems.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
    category: "Game VFX",
    technologies: ["Unreal Engine", "Niagara", "Houdini", "Photoshop"],
    detailedDescription: "Magical spell effects featuring complex particle interactions and dynamic lighting.",
    demoUrl: "#",
    completionDate: "February 2024",
    timeline: "4 months",
    cost: "$18,000",
    screenshots: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176"]
  },
  {
    id: 21,
    title: "Weather Systems",
    description: "Dynamic weather effects including rain, snow, and storms.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    category: "Game VFX",
    technologies: ["Unity", "VFX Graph", "Houdini", "Substance Designer"],
    detailedDescription: "Complete weather system featuring realistic precipitation and atmospheric effects.",
    demoUrl: "#",
    completionDate: "January 2024",
    timeline: "5 months",
    cost: "$22,000",
    screenshots: ["https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"]
  },
  {
    id: 22,
    title: "Weapon Effects",
    description: "Muzzle flashes, bullet trails, and impact effects.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Game VFX",
    technologies: ["Unreal Engine", "Cascade", "After Effects", "Maya"],
    detailedDescription: "High-quality weapon effects package featuring realistic ballistics and impact dynamics.",
    demoUrl: "#",
    completionDate: "December 2023",
    timeline: "3 months",
    cost: "$16,000",
    screenshots: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e"]
  },
  {
    id: 23,
    title: "Portal Effects",
    description: "Sci-fi portal and teleportation effects.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06",
    category: "Game VFX",
    technologies: ["Unity", "Shader Graph", "Houdini", "Substance Designer"],
    detailedDescription: "Stunning portal effects featuring complex shader work and particle interactions.",
    demoUrl: "#",
    completionDate: "November 2023",
    timeline: "4 months",
    cost: "$20,000",
    screenshots: ["https://images.unsplash.com/photo-1446776653964-20c1d3a81b06"]
  },
  {
    id: 24,
    title: "Energy Shields",
    description: "Protective barrier and shield effects.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
    category: "Game VFX",
    technologies: ["Unreal Engine", "Niagara", "Maya", "Photoshop"],
    detailedDescription: "Dynamic energy shield effects with reactive damage visualization and electric arcs.",
    demoUrl: "#",
    completionDate: "October 2023",
    timeline: "3 months",
    cost: "$14,000",
    screenshots: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176"]
  },

  // Roblox Game Category
  {
    id: 25,
    title: "Adventure Island",
    description: "Tropical adventure game with treasure hunting.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
    category: "Roblox Game",
    technologies: ["Roblox Studio", "Lua", "Blender", "Photoshop"],
    detailedDescription: "Tropical adventure featuring treasure hunting, boat racing, and multiplayer exploration.",
    demoUrl: "#",
    completionDate: "March 2024",
    timeline: "4 months",
    cost: "$12,000",
    screenshots: ["https://images.unsplash.com/photo-1559827260-dc66d52bef19"]
  },
  {
    id: 26,
    title: "Space Tycoon",
    description: "Build and manage your own space empire.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06",
    category: "Roblox Game",
    technologies: ["Roblox Studio", "Lua", "UI Design", "DataStore"],
    detailedDescription: "Economic simulation game where players build space stations and manage galactic trade routes.",
    demoUrl: "#",
    completionDate: "February 2024",
    timeline: "5 months",
    cost: "$16,000",
    screenshots: ["https://images.unsplash.com/photo-1446776653964-20c1d3a81b06"]
  },
  {
    id: 27,
    title: "Racing Championship",
    description: "High-speed racing with customizable vehicles.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    category: "Roblox Game",
    technologies: ["Roblox Studio", "Lua", "Vehicle Physics", "GUI Design"],
    detailedDescription: "Competitive racing game featuring custom tracks, vehicle upgrades, and tournament systems.",
    demoUrl: "#",
    completionDate: "January 2024",
    timeline: "3 months",
    cost: "$10,000",
    screenshots: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    id: 28,
    title: "Zombie Survival",
    description: "Survive waves of zombies with friends.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
    category: "Roblox Game",
    technologies: ["Roblox Studio", "Lua", "AI Programming", "Sound Design"],
    detailedDescription: "Cooperative survival game featuring wave-based gameplay, weapon crafting, and base building.",
    demoUrl: "#",
    completionDate: "December 2023",
    timeline: "4 months",
    cost: "$14,000",
    screenshots: ["https://images.unsplash.com/photo-1551103782-8ab07afd45c1"]
  },
  {
    id: 29,
    title: "Magic Academy",
    description: "Learn spells and explore a magical school.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
    category: "Roblox Game",
    technologies: ["Roblox Studio", "Lua", "Animation", "Particle Effects"],
    detailedDescription: "Role-playing game set in a magical academy with spell learning and house competitions.",
    demoUrl: "#",
    completionDate: "November 2023",
    timeline: "6 months",
    cost: "$18,000",
    screenshots: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176"]
  },
  {
    id: 30,
    title: "City Builder",
    description: "Create and manage your own virtual city.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f",
    category: "Roblox Game",
    technologies: ["Roblox Studio", "Lua", "Economy System", "Building Tools"],
    detailedDescription: "City management simulation with economic systems, zoning, and citizen happiness mechanics.",
    demoUrl: "#",
    completionDate: "October 2023",
    timeline: "7 months",
    cost: "$20,000",
    screenshots: ["https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f"]
  },

  // Animations Category
  {
    id: 31,
    title: "Character Animations",
    description: "Complete character animation set for action games.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Animations",
    technologies: ["Maya", "Motion Capture", "Unity", "Blender"],
    detailedDescription: "Comprehensive character animation package featuring combat, movement, and emotive animations.",
    demoUrl: "#",
    completionDate: "March 2024",
    timeline: "5 months",
    cost: "$25,000",
    screenshots: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e"]
  },
  {
    id: 32,
    title: "Creature Animations",
    description: "Fantasy creature movement and behavior animations.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    category: "Animations",
    technologies: ["Maya", "ZBrush", "Unity", "Motion Builder"],
    detailedDescription: "Realistic creature animations featuring natural movement patterns and behavioral states.",
    demoUrl: "#",
    completionDate: "February 2024",
    timeline: "6 months",
    cost: "$30,000",
    screenshots: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96"]
  },
  {
    id: 33,
    title: "Vehicle Animations",
    description: "Mechanical animations for various vehicles.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    category: "Animations",
    technologies: ["Maya", "3ds Max", "Unity", "Substance Painter"],
    detailedDescription: "Detailed mechanical animations for cars, aircraft, and futuristic vehicles.",
    demoUrl: "#",
    completionDate: "January 2024",
    timeline: "4 months",
    cost: "$20,000",
    screenshots: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    id: 34,
    title: "Weapon Animations",
    description: "Realistic weapon handling and firing animations.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Animations",
    technologies: ["Maya", "Motion Capture", "Unity", "Blender"],
    detailedDescription: "Precise weapon animations featuring realistic recoil, reload, and handling mechanics.",
    demoUrl: "#",
    completionDate: "December 2023",
    timeline: "3 months",
    cost: "$15,000",
    screenshots: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e"]
  },
  {
    id: 35,
    title: "UI Animations",
    description: "Smooth interface transitions and micro-interactions.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Animations",
    technologies: ["After Effects", "Unity", "CSS", "JavaScript"],
    detailedDescription: "Polished UI animations enhancing user experience with smooth transitions and feedback.",
    demoUrl: "#",
    completionDate: "November 2023",
    timeline: "2 months",
    cost: "$8,000",
    screenshots: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6"]
  },
  {
    id: 36,
    title: "Cinematic Animations",
    description: "High-quality cutscene and story animations.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
    category: "Animations",
    technologies: ["Maya", "Motion Capture", "After Effects", "Unity Timeline"],
    detailedDescription: "Cinematic quality animations for game cutscenes and promotional materials.",
    demoUrl: "#",
    completionDate: "October 2023",
    timeline: "8 months",
    cost: "$40,000",
    screenshots: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176"]
  }
];

// Categories for filter
const categories = ["All", "2D Game", "3D Game", "Game Environment", "Game VFX", "Roblox Game", "Animations"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
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
                <ProjectCard 
                  project={project} 
                  onViewDetails={() => setSelectedProject(project)}
                />
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
      
      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      
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
