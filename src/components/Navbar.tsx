
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Logo animation variants
  const logoTextChars = "OjDevelop Studio".split("");
  
  // Colors for gradient animation
  const gradientColors = [
    "rgb(93, 135, 255)", // blue
    "rgb(172, 82, 255)", // purple
    "rgb(255, 82, 194)", // pink
    "rgb(172, 82, 255)", // purple
    "rgb(93, 135, 255)", // blue
  ];
  
  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-xl py-2" : "bg-transparent py-4"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.div 
            className="relative flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo image - now circular and stable */}
            <div
              className="mr-3 relative rounded-full overflow-hidden border-2 border-purple-500 flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
            >
              <img 
                src="/lovable-uploads/a07fed4f-8b06-4bb7-aeec-57326509f48d.png" 
                alt="OjDevelop Studio" 
                className="w-full h-full object-cover"
              />
              
              {/* Static glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-md -z-10 bg-purple-500/40"
              />
            </div>
            
            {/* Animated text */}
            <div className="flex items-center">
              {logoTextChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: i * 0.05,
                    duration: 0.3,
                    ease: "easeOut" 
                  }}
                  className="text-2xl font-extrabold"
                  style={{
                    marginRight: char === " " ? "0.5rem" : "0rem",
                    textShadow: "0 0 5px rgba(255,255,255,0.3)",
                    fontFamily: "'Audiowide', 'Orbitron', sans-serif",
                  }}
                >
                  <motion.span
                    animate={{
                      color: gradientColors,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: i * 0.2 % 2,
                    }}
                  >
                    {char}
                  </motion.span>
                </motion.span>
              ))}
            </div>
            
            {/* Glowing effect */}
            <motion.div 
              className="absolute -inset-1 rounded-full bg-blue-500/20 blur-lg -z-10"
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [0.9, 1.05, 0.9],
                background: [
                  "rgba(93, 135, 255, 0.3)",
                  "rgba(172, 82, 255, 0.3)",
                  "rgba(255, 82, 194, 0.3)",
                  "rgba(172, 82, 255, 0.3)",
                  "rgba(93, 135, 255, 0.3)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900 border-t border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLinks mobile />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <>
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link 
            key={link.name} 
            to={link.path}
            className={`${mobile ? "w-full text-center py-2" : ""} relative group`}
          >
            <span className={`${
              isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
            } transition-colors`}>
              {link.name}
            </span>
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            {!isActive && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
