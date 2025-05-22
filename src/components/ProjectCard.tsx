
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Info } from "lucide-react";
import { useState } from "react";

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
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden flex flex-col bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          {project.category && (
            <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {project.category}
            </span>
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl text-purple-400">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-xs bg-gray-700 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-3">
          {project.demoUrl && (
            <Button asChild variant="default" className="flex-1 bg-purple-600 hover:bg-purple-700">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" size={16} /> Demo
              </a>
            </Button>
          )}
          
          {project.detailedDescription && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <Button 
                onClick={() => setIsDialogOpen(true)} 
                variant="outline" 
                className="flex-1 border-gray-600 hover:bg-gray-700"
              >
                <Info className="mr-2" size={16} /> Details
              </Button>
              <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-purple-400">{project.title}</DialogTitle>
                  <DialogDescription className="text-gray-300">{project.category || ""}</DialogDescription>
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
                  
                  {project.demoUrl && (
                    <div className="flex justify-end">
                      <Button asChild className="bg-purple-600 hover:bg-purple-700">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" size={16} /> View Demo
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}
          
          {project.repoUrl && !project.detailedDescription && (
            <Button asChild variant="outline" className="flex-1 border-gray-600 hover:bg-gray-700">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Info className="mr-2" size={16} /> Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
