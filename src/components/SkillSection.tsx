
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

const SkillSection = ({
  skills
}: {
  skills: Skill[];
}) => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Skills & Expertise</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300">
            Our technical proficiency across game development technologies and tools.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-purple-500 transition-colors duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-purple-300">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
