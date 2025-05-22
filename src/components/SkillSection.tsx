
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

const SkillSection = ({ skills }: { skills: Skill[] }) => {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-850 bg-opacity-30">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-400">Our Technology Stack</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            We leverage cutting-edge technologies and industry-standard tools to create exceptional gaming experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <motion.span 
                  className="text-sm text-purple-400 font-mono"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {/* Animated particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute top-0 h-full w-1 bg-white rounded-full"
                      animate={{
                        left: ["0%", "100%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.6,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
