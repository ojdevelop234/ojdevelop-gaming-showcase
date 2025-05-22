
import { useState, memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  demoUrl?: string;
}

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="absolute -inset-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-lg -z-10 transition-all duration-500"
        animate={{ 
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.05 : 1
        }}
      />
      
      <div className="bg-gray-800 border border-gray-700 hover:border-purple-500 rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col">
        {/* Image with animated overlay */}
        <div className="relative h-48 overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.7 }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 0.85 : 0.6 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Category label */}
          <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full z-10">
            {project.category}
          </span>
          
          {/* Animated tech labels */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {["Unity", "C#", "3D"].map((tech, i) => (
              <motion.span 
                key={i} 
                className="px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-md text-xs text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  x: isHovered ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
          
          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button 
              variant="default" 
              size="sm"
              className="flex-1 bg-purple-600 hover:bg-purple-700 transform transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => window.open(project.demoUrl || "#", "_blank")}
            >
              <ExternalLink className="mr-2" size={16} /> Demo
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-purple-500/30 hover:bg-purple-500/20 text-purple-400 transform transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => setIsDialogOpen(true)}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
      
      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Description</h4>
              <p className="text-gray-300">
                {project.description} This project showcases our expertise in {project.category} development
                with cutting-edge graphics and immersive gameplay mechanics. We utilized the latest
                technologies to create a memorable gaming experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["Unity", "C#", "3D Modeling", "VFX", "AI"].map((tech, index) => (
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
              <Button 
                asChild 
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 transform transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <a href={project.demoUrl || "#"} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={16} /> View Demo
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

// Using memo to prevent unnecessary re-renders
export default memo(FeaturedProjectCard);
