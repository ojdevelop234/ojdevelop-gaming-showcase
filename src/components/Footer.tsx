
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Discord, Fiverr } from "@/components/icons/CustomIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Studio Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">OjDevelop Studio</h3>
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
            <div className="flex space-x-4 pt-2">
              <motion.a 
                href="https://discord.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Discord className="text-[#5865F2] hover:opacity-80 transition-opacity" />
              </motion.a>
              <motion.a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="text-[#f5f5f5] hover:opacity-80 transition-opacity" />
              </motion.a>
              <motion.a 
                href="https://fiverr.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <Fiverr className="text-[#1DBF73] hover:opacity-80 transition-opacity" />
              </motion.a>
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

export default Footer;
