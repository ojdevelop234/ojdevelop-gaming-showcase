
import { motion } from "framer-motion";

interface AnimatedSectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const AnimatedSectionTitle = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}: AnimatedSectionTitleProps) => {
  return (
    <motion.div 
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative inline-block">
        <motion.h2 
          className={`text-4xl font-bold mb-3 relative z-10 text-purple-400 ${titleClassName}`}
        >
          {title}
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-300/50 via-purple-400 to-purple-300/50"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h2>
        
        {/* Decorative oval/circle animations */}
        <motion.div
          className="absolute -left-4 -top-4 w-8 h-8 border-2 border-purple-500/30 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div
          className="absolute -right-6 -bottom-2 w-5 h-5 border-2 border-purple-500/20 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -180]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      
      {subtitle && (
        <motion.p 
          className={`text-lg max-w-3xl mx-auto text-gray-300 ${subtitleClassName}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedSectionTitle;
