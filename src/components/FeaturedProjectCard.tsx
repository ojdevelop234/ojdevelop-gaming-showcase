
import { useState, memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    demoUrl: string;
    detailedDescription?: string;
  };
}

const FeaturedProjectCard = memo(({ project }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-lg group h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative h-64 md:h-72 w-full overflow-hidden">
          <img
            alt={project.title}
            src={project.image}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            width="100%"
            height="100%"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <motion.span 
              className="text-xs font-medium bg-purple-600/90 inline-block py-1 px-2 rounded-md mb-2 self-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.category}
            </motion.span>
            
            <motion.h3 
              className="text-xl font-semibold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-sm text-gray-300 overflow-hidden"
              style={{ 
                maxHeight: isHovered ? '80px' : '0px',
                opacity: isHovered ? 1 : 0,
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
              }}
            >
              {project.description}
            </motion.p>
            
            <motion.div
              className="mt-3 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={project.demoUrl}
                className="inline-flex items-center text-xs font-medium bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1" /> Demo
              </motion.a>
              
              <motion.button
                onClick={() => setIsDialogOpen(true)}
                className="inline-flex items-center text-xs font-medium border border-purple-500/50 hover:bg-purple-500/20 px-3 py-1.5 rounded transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Info className="w-3.5 h-3.5 mr-1" /> Details
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-purple-400">{project.title}</DialogTitle>
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
              <p className="text-gray-300">{project.detailedDescription || project.description}</p>
            </div>
            
            <div className="flex justify-end">
              <Button 
                asChild
                size="sm"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={16} /> View Demo
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
});

FeaturedProjectCard.displayName = "FeaturedProjectCard";

export default FeaturedProjectCard;
