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
  return <section id="skills" className="py-24 px-4 bg-gray-850 bg-opacity-30">
      
    </section>;
};
export default SkillSection;