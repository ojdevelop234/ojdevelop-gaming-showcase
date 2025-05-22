
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Info } from "lucide-react";

// Project categories
const categories = ["All", "3D Game", "2D Game", "Game Environments", "Game VFX", "Roblox Game"];

// Sample project data (5 projects for each category)
const projects = [
  // 3D Games
  {
    id: 1,
    title: "Cosmic Odyssey",
    description: "A space exploration adventure with procedurally generated planets and immersive storyline.",
    category: "3D Game",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Unity", "C#", "HDRP"],
    detailedDescription: "Cosmic Odyssey is an open-world space exploration game where players can discover and explore procedurally generated planets, each with unique environments, creatures, and resources. The game features a compelling narrative about uncovering an ancient alien civilization.",
    demoUrl: "#demo-link"
  },
  {
    id: 2,
    title: "Neon Riders",
    description: "High-speed futuristic racing game with dynamic track generation and multiplayer modes.",
    category: "3D Game",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["Unreal Engine", "C++", "Niagara"],
    detailedDescription: "Neon Riders offers an adrenaline-fueled racing experience set in a cyberpunk future. Players can customize their vehicles, compete in various championship modes, and race against friends in local or online multiplayer modes.",
    demoUrl: "#demo-link"
  },
  {
    id: 3,
    title: "Forgotten Realms",
    description: "Fantasy RPG with expansive world, rich lore, and strategic combat system.",
    category: "3D Game",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Unity", "C#", "Wwise"],
    detailedDescription: "Forgotten Realms is an immersive fantasy RPG where players embark on an epic journey through a world threatened by ancient evil. The game features a deep progression system, companion mechanics, and choices that affect the narrative.",
    demoUrl: "#demo-link"
  },
  {
    id: 4,
    title: "Mech Warriors",
    description: "Tactical mech combat game with customizable robots and destructible environments.",
    category: "3D Game",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    technologies: ["Unreal Engine", "C++", "PhysX"],
    detailedDescription: "In Mech Warriors, players command powerful mechanized suits in tactical combat scenarios. The game features a physics-based destruction system, allowing for strategic environment manipulation during battles.",
    demoUrl: "#demo-link"
  },
  {
    id: 5,
    title: "Deep Dive",
    description: "Underwater exploration game with realistic ocean ecosystems and survival elements.",
    category: "3D Game",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Unity", "C#", "Shader Graph"],
    detailedDescription: "Deep Dive is a visually stunning underwater exploration game where players discover the mysteries of the ocean depths. The game features realistic water physics, diverse marine life, and an oxygen management system.",
    demoUrl: "#demo-link"
  },
  
  // 2D Games
  {
    id: 6,
    title: "Pixel Warriors",
    description: "Retro-style action platformer with modern gameplay mechanics and roguelike elements.",
    category: "2D Game",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Unity", "C#", "Spine"],
    detailedDescription: "Pixel Warriors combines classic pixel art aesthetics with modern gameplay systems. Players choose from multiple character classes, each with unique abilities, as they fight through procedurally generated levels.",
    demoUrl: "#demo-link"
  },
  {
    id: 7,
    title: "Astro Cats",
    description: "Casual physics-based puzzle game featuring adorable space-faring felines.",
    category: "2D Game",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["Unity", "C#", "Box2D"],
    detailedDescription: "Astro Cats is a charming puzzle game where players help cats navigate through space to collect cosmic treats. The game features over 100 handcrafted levels with increasing complexity and unique mechanics.",
    demoUrl: "#demo-link"
  },
  {
    id: 8,
    title: "Dungeon Crawlers",
    description: "Top-down roguelike with pixel art graphics and deep character progression.",
    category: "2D Game",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["GameMaker Studio", "GML"],
    detailedDescription: "Dungeon Crawlers is a challenging roguelike featuring permadeath and procedurally generated dungeons. Players must navigate through increasingly difficult levels while collecting equipment and power-ups.",
    demoUrl: "#demo-link"
  },
  {
    id: 9,
    title: "Rhythm Blitz",
    description: "Music-based action game where attacks and movements sync with the beat.",
    category: "2D Game",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    technologies: ["Unity", "C#", "FMOD"],
    detailedDescription: "Rhythm Blitz combines action gameplay with rhythm mechanics, requiring players to time their attacks, defenses, and movements to the beat of the music. Features an original soundtrack with dynamic difficulty adjustment.",
    demoUrl: "#demo-link"
  },
  {
    id: 10,
    title: "Farm Life",
    description: "Relaxing farming simulation with social elements and seasonal activities.",
    category: "2D Game",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Unity", "C#"],
    detailedDescription: "Farm Life is a cozy farming simulator where players build and maintain their dream farm, interact with townspeople, and participate in seasonal festivals. Features crop growing, animal raising, and crafting systems.",
    demoUrl: "#demo-link"
  },
  
  // Game Environments
  {
    id: 11,
    title: "Ancient Temple",
    description: "Detailed environment asset pack for mystical temple settings with modular components.",
    category: "Game Environments",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Blender", "Substance Painter", "Unity"],
    detailedDescription: "The Ancient Temple environment pack includes over 200 high-quality assets for creating immersive temple scenes. Features include modular architecture pieces, statues, vegetation, and atmospheric effects.",
    demoUrl: "#demo-link"
  },
  {
    id: 12,
    title: "Cyberpunk City",
    description: "Neon-lit futuristic cityscape with interactive elements and ambient life.",
    category: "Game Environments",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["Unreal Engine", "Blender", "Substance Designer"],
    detailedDescription: "This cyberpunk city environment features densely packed buildings with neon signs, holographic advertisements, and ambient citizens. Includes day/night cycle system and weather effects.",
    demoUrl: "#demo-link"
  },
  {
    id: 13,
    title: "Forest Haven",
    description: "Lush forest environment with dynamic lighting and interactive foliage.",
    category: "Game Environments",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Unity", "SpeedTree", "Substance Painter"],
    detailedDescription: "Forest Haven is a realistic forest environment with dynamic time-of-day lighting, interactive vegetation, and ambient wildlife. Perfect for adventure or survival games requiring an immersive natural setting.",
    demoUrl: "#demo-link"
  },
  {
    id: 14,
    title: "Abandoned Station",
    description: "Post-apocalyptic subway station with detailed destruction and atmospheric effects.",
    category: "Game Environments",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Unreal Engine", "Maya", "Quixel"],
    detailedDescription: "This meticulously crafted abandoned station environment features realistic decay, dynamic dust particles, and eerie lighting. Includes modular components for custom level design.",
    demoUrl: "#demo-link"
  },
  {
    id: 15,
    title: "Medieval Village",
    description: "Historically inspired village environment with customizable buildings and NPCs.",
    category: "Game Environments",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    technologies: ["Unity", "Blender", "Substance Painter"],
    detailedDescription: "The Medieval Village pack includes buildings, props, and character models to create an authentic medieval settlement. Features include interior details, working doors, and ambient life simulation.",
    demoUrl: "#demo-link"
  },
  
  // Game VFX
  {
    id: 16,
    title: "Magic Spell Effects",
    description: "Collection of fantasy spell visual effects with element-based variations.",
    category: "Game VFX",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Unity", "VFX Graph", "Shader Graph"],
    detailedDescription: "This VFX pack includes over 50 magical spell effects across fire, water, earth, air, and arcane categories. Each effect is fully customizable with exposed parameters for color, intensity, and duration.",
    demoUrl: "#demo-link"
  },
  {
    id: 17,
    title: "Sci-Fi Weapons",
    description: "Futuristic weapon effects including lasers, plasma, and energy weapons.",
    category: "Game VFX",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["Unreal Engine", "Niagara"],
    detailedDescription: "The Sci-Fi Weapons VFX pack contains high-quality visual effects for futuristic weaponry, including muzzle flashes, impact effects, projectiles, and reload animations.",
    demoUrl: "#demo-link"
  },
  {
    id: 18,
    title: "Elemental Impacts",
    description: "Realistic impact effects for different materials with physics-based reactions.",
    category: "Game VFX",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Unity", "Shader Graph"],
    detailedDescription: "Elemental Impacts provides realistic impact effects for various materials including wood, metal, stone, water, and flesh. Effects include particles, decals, sounds, and physics reactions.",
    demoUrl: "#demo-link"
  },
  {
    id: 19,
    title: "Weather System",
    description: "Dynamic weather effects including rain, snow, fog, and storms with seamless transitions.",
    category: "Game VFX",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    technologies: ["Unity", "VFX Graph", "Shader Graph"],
    detailedDescription: "This comprehensive weather system includes visual effects for various weather conditions, a day/night cycle, and dynamic cloud formations. Features runtime parameter adjustment for intensity and transition control.",
    demoUrl: "#demo-link"
  },
  {
    id: 20,
    title: "Explosion Pack",
    description: "Variety of explosion effects from realistic to stylized with customizable parameters.",
    category: "Game VFX",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Unreal Engine", "Niagara", "Cascade"],
    detailedDescription: "The Explosion Pack features 25 different explosion effects ranging from realistic to stylized. Includes fire, smoke, shockwaves, debris, and sound effects with adjustable parameters.",
    demoUrl: "#demo-link"
  },
  
  // Roblox Games
  {
    id: 21,
    title: "Tycoon Empire",
    description: "Economic simulation where players build and manage their business empire.",
    category: "Roblox Game",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Roblox Studio", "Lua"],
    detailedDescription: "Tycoon Empire is a Roblox game where players start with a small business and expand it into a corporate empire. Features include automated production, staff management, and competitive multiplayer elements.",
    demoUrl: "#demo-link"
  },
  {
    id: 22,
    title: "Adventure Quest",
    description: "RPG adventure game with quests, combat, and character progression.",
    category: "Roblox Game",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Roblox Studio", "Lua"],
    detailedDescription: "Adventure Quest is an immersive RPG experience on Roblox featuring diverse biomes, challenging enemies, and an epic storyline. Players can customize characters, learn skills, and collect rare items.",
    demoUrl: "#demo-link"
  },
  {
    id: 23,
    title: "Speed Racers",
    description: "Multiplayer racing game with customizable vehicles and diverse tracks.",
    category: "Roblox Game",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Roblox Studio", "Lua"],
    detailedDescription: "Speed Racers offers thrilling multiplayer races across various themed tracks. Players can customize their vehicles, unlock upgrades, and compete in seasonal tournaments.",
    demoUrl: "#demo-link"
  },
  {
    id: 24,
    title: "Zombie Survival",
    description: "Cooperative survival game where players defend against zombie hordes.",
    category: "Roblox Game",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    technologies: ["Roblox Studio", "Lua"],
    detailedDescription: "Zombie Survival is an intense cooperative experience where players work together to fortify bases, collect resources, and survive increasingly difficult waves of zombies. Features various character classes and weapon types.",
    demoUrl: "#demo-link"
  },
  {
    id: 25,
    title: "Island Paradise",
    description: "Social simulation game where players build and customize their dream island.",
    category: "Roblox Game",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ["Roblox Studio", "Lua"],
    detailedDescription: "Island Paradise allows players to create their own tropical getaway with extensive building and decoration options. Features include mini-games, social events, and seasonal content updates.",
    demoUrl: "#demo-link"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-purple-400">Our Portfolio</h1>
            <p className="text-lg text-gray-300">
              Explore our diverse collection of game development projects, from immersive 3D worlds to 
              captivating visual effects and everything in between.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-800/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full transition-all ${
                  selectedCategory === category 
                    ? "bg-purple-600 text-white" 
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
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
                      <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 rounded-full text-xs bg-gray-700 text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-3">
                      <Button asChild variant="default" className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" size={16} /> Demo
                        </a>
                      </Button>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1 border-gray-600 hover:bg-gray-700">
                            <Info className="mr-2" size={16} /> Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-3xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-purple-400">{project.title}</DialogTitle>
                            <DialogDescription className="text-gray-300">{project.category}</DialogDescription>
                          </DialogHeader>
                          
                          <div className="grid gap-6 py-4">
                            <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-lg">
                              <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-purple-300 mb-2">Description</h4>
                              <p className="text-gray-300">{project.detailedDescription}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-purple-300 mb-2">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                  <span 
                                    key={index} 
                                    className="px-3 py-1 rounded-full text-sm bg-gray-700 text-purple-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-end">
                              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2" size={16} /> View Demo
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 relative">
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
            <h2 className="text-4xl font-bold mb-6 text-purple-400">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Have a game idea you'd like to bring to life? Let's discuss how we can help turn your vision into reality.
              Our team is ready to tackle your next gaming challenge.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-6 h-auto"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
