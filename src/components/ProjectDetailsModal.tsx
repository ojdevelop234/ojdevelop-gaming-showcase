
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, DollarSign, ExternalLink, Camera } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category?: string;
  detailedDescription?: string;
  demoUrl?: string;
  repoUrl?: string;
  completionDate?: string;
  timeline?: string;
  cost?: string;
  screenshots?: string[];
}

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl text-purple-400 mb-2">{project.title}</DialogTitle>
          {project.category && (
            <Badge className="bg-purple-600 text-white w-fit">{project.category}</Badge>
          )}
        </DialogHeader>
        
        <div className="grid gap-8 py-6">
          {/* Main Project Image */}
          <motion.div 
            className="relative h-80 w-full overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-2 rounded-lg text-sm bg-gray-700 text-purple-300 border border-purple-500/30"
                      whileHover={{ scale: 1.05, backgroundColor: "rgb(107 33 168 / 0.2)" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Screenshots</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        className="relative h-32 overflow-hidden rounded-lg group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={screenshot} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Project Details */}
              <motion.div
                className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Project Details</h3>
                <div className="space-y-4">
                  {project.completionDate && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-sm text-gray-400">Completion Date</p>
                        <p className="text-white font-medium">{project.completionDate}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.timeline && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-sm text-gray-400">Development Timeline</p>
                        <p className="text-white font-medium">{project.timeline}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.cost && (
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-sm text-gray-400">Project Investment</p>
                        <p className="text-white font-medium">{project.cost}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {project.demoUrl && (
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium h-12"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={18} /> 
                      View Live Demo
                    </a>
                  </Button>
                )}
                
                {project.repoUrl && (
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-purple-500/50 hover:bg-purple-500/20 text-purple-400 h-12"
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      View Source Code
                    </a>
                  </Button>
                )}
              </motion.div>

              {/* Additional Info */}
              <motion.div
                className="p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <p className="text-sm text-gray-300 italic">
                  "This project showcases our expertise in {project.category?.toLowerCase()} development, 
                  delivering high-quality results within the specified timeline and budget."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
