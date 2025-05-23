
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating?: number;
  };
  index: number;
}

const AnimatedTestimonialCard = ({ testimonial, index }: TestimonialProps) => {
  // Default to 5 stars if no rating is provided
  const rating = testimonial.rating || 5;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
      whileHover={{ y: -10 }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 blur-md -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      
      <div className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors duration-300 p-6 rounded-lg">
        <div className="pt-2">
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-purple-500/50"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h4 className="text-lg font-medium text-purple-300">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Star 
                  size={16} 
                  className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'} mr-1`} 
                />
              </motion.div>
            ))}
          </div>
          
          <p className="italic text-gray-300">"{testimonial.content}"</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedTestimonialCard;
