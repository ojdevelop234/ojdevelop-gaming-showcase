
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Discord, Fiverr, StudioLogo } from "@/components/icons/CustomIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Studio Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <StudioLogo className="text-purple-400" size={28} />
              </motion.div>
              <h3 className="text-xl font-bold text-purple-400">OjDevelop Studio</h3>
            </div>
            <p className="max-w-xs">
              Creating immersive gaming experiences and pushing the boundaries of interactive entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-purple-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">Contact</h3>
            <p>
              <a href="mailto:ojdevelop3@gmail.com" className="hover:text-purple-400 transition-colors">
                ojdevelop3@gmail.com
              </a>
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-6 pt-4">
              <SocialIcon href="https://discord.com/" icon={<Discord />} color="#5865F2" />
              <SocialIcon href="https://github.com/" icon={<Github />} color="#f5f5f5" />
              <SocialIcon href="https://fiverr.com/" icon={<Fiverr />} color="#1DBF73" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>© 2025 OjDevelop Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
    whileHover={{ scale: 1.2 }}
    style={{ color }}
  >
    {/* Pulsing circle */}
    <motion.div
      className="absolute inset-0 rounded-full -z-10 opacity-0 group-hover:opacity-100"
      style={{ backgroundColor: `${color}30` }}
      animate={{
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    {/* Icon */}
    {icon}
  </motion.a>
);

export default Footer;
