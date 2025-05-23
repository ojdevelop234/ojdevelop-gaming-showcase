
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-0"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: "linear" 
        }}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 100}, ${Math.random() * 200 + 55}, ${Math.random() * 0.5 + 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 10, Math.random() * -30, Math.random() * 10],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/70 backdrop-blur-lg p-8 md:p-12 rounded-xl border border-purple-500/30 shadow-2xl">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% auto' }}
              >
                Ready to Bring Your Game Vision to Life?
              </motion.h2>
                
              <motion.p 
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Let's transform your ideas into captivating gaming experiences that players will love.
                Our team is ready to tackle your next project with creativity and technical expertise.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Button 
                  size="sm"
                  className="relative overflow-hidden px-5 py-1 h-9 bg-purple-600 hover:bg-purple-700"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  asChild
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="relative"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    
                    {/* Glint animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Pulse animation */}
                    <motion.span
                      className="absolute inset-0 bg-purple-500 rounded-md"
                      animate={{ 
                        boxShadow: ["0 0 0px rgba(168, 85, 247, 0)", "0 0 15px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0)"] 
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      style={{ opacity: 0.2 }}
                    />
                  </motion.div>
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="relative overflow-hidden border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 px-5 py-1 h-9"
                  onClick={() => window.open("/portfolio", "_self")}
                  asChild
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <span className="relative z-10">View Our Work</span>
                    
                    {/* Border glow animation */}
                    <motion.span
                      className="absolute inset-0 border-2 border-purple-400 rounded-md"
                      animate={{ 
                        boxShadow: ["0 0 0px rgba(167, 139, 250, 0)", "0 0 8px rgba(167, 139, 250, 0.5)", "0 0 0px rgba(167, 139, 250, 0)"] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Glint animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1 }}
                    />
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
