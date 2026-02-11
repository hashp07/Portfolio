import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added 'FolderOpen' for Projects so 'Briefcase' can be used for Experience
import { User, Code, Briefcase, Home, Mail, Menu, X, FolderOpen } from 'lucide-react';
import logoLight from '@/assets/logos1.png'; 

const navLinks = [
  { name: 'About', href: '#about', icon: <User size={22} /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase size={22} /> }, // Added Experience
  { name: 'Projects', href: '#projects', icon: <FolderOpen size={22} /> },    // Changed to Folder icon
  { name: 'Skills', href: '#skills', icon: <Code size={22} /> },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to change animation direction
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ---------------------------------------------------------
  // 🔧 RESPONSIVE CONFIGURATION
  // ---------------------------------------------------------
  const containerClasses = isMobile
    ? "fixed top-24 left-4 right-4 h-16 flex-row px-4 justify-between" // Mobile: Horizontal
    : "fixed top-6 left-1 bottom-6 w-16 flex-col py-12 items-center justify-between"; // Desktop: Vertical

  const navContainerClasses = isMobile 
    ? "flex-row gap-3 w-full justify-center" // Reduced gap slightly for mobile to fit 5 items
    : "flex-col gap-6 w-full";

  // Animation Variants based on device
  const menuVariants = {
    hidden: isMobile ? { y: -50, opacity: 0 } : { x: -100, opacity: 0 },
    visible: { 
      y: 0, 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: isMobile ? { y: -50, opacity: 0 } : { x: -100, opacity: 0 }
  };

  return (
    <>
      {/* 1. Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-[60] p-3 rounded-full bg-[#10121f] border border-white/10 text-white shadow-2xl"
      >
        <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.div>
      </button>

      {/* 2. The Navigation Capsule */}
      <AnimatePresence mode="wait">
        {(isMobileMenuOpen || !isMobile) && (
          <motion.header
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className={`z-50 bg-[#0a0a0c]/90 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl flex ${containerClasses}`}
          >
            {/* Logo */}
            <motion.a 
              href="/" 
              whileHover="hover"
              whileTap="tap"
              className="relative group flex items-center justify-center shrink-0"
            >
              <motion.img 
                src={logoLight} 
                alt="Logo" 
                className="h-10 w-auto z-10 relative"
                variants={{
                  hover: { scale: 0.85, y: -5, filter: "brightness(1.2) contrast(1.1)" },
                  tap: { scale: 0.95 }
                }}
              />
              <motion.div 
                variants={{ hover: { scale: 2, opacity: 0.6 }}}
                className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10"
              />
            </motion.a>

            {/* Navigation Links (Home, About, Experience, Projects, Skills) */}
            <nav className={`flex relative items-center ${navContainerClasses}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group relative p-2 flex justify-center rounded-xl transition-colors duration-300"
                >
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute inset-0 bg-primary/10 rounded-xl -z-10 border border-primary/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <motion.span 
                    animate={{ 
                      color: hoveredLink === link.name ? '#4d91ff' : '#94a3b8',
                      scale: hoveredLink === link.name ? 1.2 : 1 
                    }}
                    className="block relative z-10"
                  >
                    {link.icon}
                  </motion.span>

                  {/* Desktop Tooltip */}
                  <AnimatePresence>
                    {hoveredLink === link.name && !isMobile && (
                      <motion.span
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 60, scale: 1 }} 
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1a1a1e] border border-white/10 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg shadow-2xl pointer-events-none whitespace-nowrap z-50 ml-2"
                      >
                        {link.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              ))}
            </nav>

            {/* Bottom/Right Contact Button (Mail Icon) */}
             <motion.div className="relative group shrink-0">
               <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 className="p-3.5 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-[0_0_20px_rgba(77,145,255,0.3)] relative z-10"
               >
                 <Mail size={20} />
               </motion.button>
               <div className="absolute inset-0 bg-primary/40 rounded-2xl animate-ping group-hover:hidden" />
             </motion.div>

          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;