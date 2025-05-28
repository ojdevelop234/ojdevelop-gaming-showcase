
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
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const logoTextChars = "OjDevelop Studio".split("");
  
  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-xl py-2" : "bg-transparent py-4"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.div 
            className="relative flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Simplified logo */}
            <div
              className="mr-3 relative rounded-full overflow-hidden border-2 border-purple-500 flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
            >
              <img 
                src="/lovable-uploads/a07fed4f-8b06-4bb7-aeec-57326509f48d.png" 
                alt="OjDevelop Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Simplified animated text */}
            <div className="flex items-center">
              {logoTextChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: i * 0.03,
                    duration: 0.2
                  }}
                  className="text-xl md:text-2xl font-bold text-purple-400"
                  style={{
                    marginRight: char === " " ? "0.5rem" : "0rem",
                    fontFamily: "'Audiowide', 'Orbitron', sans-serif",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
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
            className="text-white focus:outline-none transition-colors duration-200"
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
          transition={{ duration: 0.2 }}
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
            } transition-colors duration-200`}>
              {link.name}
            </span>
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {!isActive && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-200" />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
