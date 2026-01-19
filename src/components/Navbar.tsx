import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoLight from '@/assets/logos.png'; 

const navLinks = [
  { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Helper
  const scrollToContact = () => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-dm-sans ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-card py-3' // Black background on scroll
          : 'bg-[#10121f] py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Always Light since background is dark */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={logoLight} 
              alt="Tier2 DigiHouse"
              className="h-20 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Applied DM Sans here
                className="relative group font-dm-sans font-medium transition-colors duration-300 text-white hover:text-gray-300 tracking-wide text-sm md:text-base"
              >
                {link.name}
                {/* Purple Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-[#11b1d9]" />
              </a>
            ))}
            
            {/* Contact Button - Purple */}
            <button
              onClick={scrollToContact}
              // Applied Designer Font here
              className="px-6 py-2.5 rounded-lg font-designer font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 bg-[#4d91ff] text-white shadow-lg hover:shadow-[#7A3F91]/40"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button - White */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-white/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu - Dark Background */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-elevated transition-all duration-300 origin-top ${
            isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                // Applied DM Sans here
                className="block text-white font-dm-sans font-medium py-2 hover:text-[#7A3F91] hover:pl-2 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;