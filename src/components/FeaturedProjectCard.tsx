
import { useState, memo } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    demoUrl: string;
  };
}

const FeaturedProjectCard = memo(({ project }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
        <LazyLoadImage
          alt={project.title}
          src={project.image}
          effect="blur"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          width="100%"
          height="100%"
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
          
          <motion.a
            href={project.demoUrl}
            className="mt-3 inline-block text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="flex items-center">
              <span>Details</span>
              <motion.span 
                className="ml-1"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
});

FeaturedProjectCard.displayName = "FeaturedProjectCard";

export default FeaturedProjectCard;
