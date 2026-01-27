import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import profileImg from '@/assets/profile.png';
import { useState, useEffect } from 'react'; 
import './Hero.css';

// 1. IMPORT THE FLOATING LINES COMPONENT
import FloatingLines from '@/components/FloatingLines'; 

// --- CUSTOM TYPING HOOK (No change) ---
// Note: This is functional JavaScript and works fine in a .tsx file.
const useTypingEffect = (texts: string[], speed = 70, pause = 900) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? speed / 2 : speed 
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
};
// --- END CUSTOM TYPING HOOK ---

const Hero = () => {
  const jobTitles = ["MERN Stack Developer", "Software Developer"];
  const currentJobTitle = useTypingEffect(jobTitles, 70, 900);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#1A1A2E]">
      
      {/* LAYER 1: STATIC IMAGE (Deepest background layer) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0" 
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* LAYER 2: FLOATING LINES INTEGRATION (Middle background layer) */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ width: '100%', height: '100%' }}
      >
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          mixBlendMode="screen"
          linesGradient={['#4D90FE', '#8892B0', '#CCD6F6']} 
        />
      </div>
      
      {/* Main content wrapper must be z-10 or higher */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto">
          
          {/* Text Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-center lg:text-left max-w-xl"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground/80 mb-2 text-lg text-[#CCD6F6]" 
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white"
            >
              <span className="gradient-text-blue">Harsh Parab</span> 
            </motion.h1>
            
            {/* Typing Effect Applied Here */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-[#8892B0] mb-6 font-medium h-8"
            >
              {currentJobTitle}
              <span className="typing-cursor">|</span> 
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-[#8892B0] max-w-lg mb-8"
            >
              Detail-oriented developer skilled in building robust web solutions with JavaScript, React, Node.js, MongoDB, and Java. Passionate about crafting responsive interfaces and solving complex challenges.
            </motion.p>
            
            {/* Social Links (No changes) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="https://github.com/hashp07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#8892B0]/50 text-[#CCD6F6] flex items-center justify-center hover:bg-[#2A2A4A] transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/harsh-parab2446"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#8892B0]/50 text-[#CCD6F6] flex items-center justify-center hover:bg-[#2A2A4A] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:harshparab865@gmail.com"
                className="w-10 h-10 rounded-full border border-[#8892B0]/50 text-[#CCD6F6] flex items-center justify-center hover:bg-[#2A2A4A] transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </motion.div>

            {/* CTA Buttons (Fixed for single child) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 flex-wrap"
            >
              {/* Blue Primary Button */}
              <Button size="lg" className="bg-[#4D90FE] hover:bg-[#4D90FE]/90 text-white rounded-md font-semibold" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              
              {/* Grey Outline Button (Subdued) */}
              <Button size="lg" variant="outline" className="border-[#8892B0]/50 text-[#CCD6F6] bg-transparent hover:bg-[#2A2A4A] rounded-md font-semibold" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              
              {/* Grey Filled Button (Secondary) */}
              <Button size="lg" variant="secondary" className="bg-[#2A2A4A] text-[#CCD6F6] hover:bg-[#3A3A5A] rounded-md font-semibold" asChild>
                {/* Ensure content inside <a> is clean and treated as one node */}
                <a href="/Harsh_Parab_Resume.pdf" download className="flex items-center gap-2">
                  <Download size={18} /> Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Photo (No changes) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="flex-shrink-0"
          >
            <motion.div
              // Neon Blue Shadow Animation
              animate={{ 
                boxShadow: [
                  "0 0 10px #4D90FE, 0 0 20px #4D90FE", // Subtle start
                  "0 0 20px #4D90FE, 0 0 40px #6AAFFF", // Brighter middle
                  "0 0 10px #4D90FE, 0 0 20px #4D90FE" // Subtle end
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#4D90FE]/50 relative p-1"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <motion.img
                  src={profileImg}
                  alt="Harsh Parab"
                  className="w-full h-full object-cover filter grayscale contrast-[1.1]" 
                  // Grayscale filter for monochromatic look
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Sky Blue Overlay Faint */}
                <div className="absolute inset-0 bg-[#4D90FE]/20 mix-blend-overlay rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;