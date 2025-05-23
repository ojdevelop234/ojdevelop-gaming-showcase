
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, Github, Globe, MessageSquare } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/c77fb9d0-be3f-41dc-86d8-309de40b43a9.png" 
                alt="OjDevelop Studio" 
                className="w-10 h-10 mr-2" 
              />
              <span className="text-xl font-bold text-purple-400">OjDevelop Studio</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Crafting immersive digital worlds and memorable gaming experiences through creative coding and thoughtful game design.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://discord.gg/pcUnY3W2" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <MessageSquare size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com/ojdevelop234" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://www.fiverr.com/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Globe size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">3D Game Development</li>
              <li className="text-gray-400">2D Game Development</li>
              <li className="text-gray-400">Game Environment Design</li>
              <li className="text-gray-400">Visual Effects (VFX)</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">San Francisco, CA</p>
            <p className="text-gray-400 mb-4">United States</p>
            <p className="text-gray-400">contact@ojdevelop.com</p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} OjDevelop Studio. All rights reserved.
          </p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
          >
            <ArrowUp size={20} className="text-purple-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
