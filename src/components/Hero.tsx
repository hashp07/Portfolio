// // import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { motion } from 'framer-motion';
// // import heroBg from '@/assets/hero-bg.jpg';
// // import profileImg from '@/assets/profile.png';

// // const Hero = () => {
// //   return (
// //     <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
// //       {/* Background image */}
// //       <div 
// //         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
// //         style={{ backgroundImage: `url(${heroBg})` }}
// //       />
// //       {/* Overlay gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
// //       <div className="container mx-auto px-6 relative z-10">
// //         <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
// //           {/* Text Content */}
// //           <motion.div 
// //             initial={{ x: -100, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
// //             className="text-center lg:text-left"
// //           >
// //             <motion.p 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 }}
// //               className="text-primary mb-4 text-lg"
// //             >
// //               Hello, I'm
// //             </motion.p>
// //             <motion.h1 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.4 }}
// //               className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
// //             >
// //               <span className="gradient-text">Harsh Parab</span>
// //             </motion.h1>
// //             <motion.h2 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.5 }}
// //               className="text-2xl md:text-3xl text-muted-foreground mb-6"
// //             >
// //               MERN Stack Developer
// //             </motion.h2>
// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.6 }}
// //               className="text-lg text-muted-foreground max-w-xl mb-8"
// //             >
// //               Detail-oriented developer skilled in building robust web solutions with JavaScript, React, Node.js, MongoDB, and Java. Passionate about crafting responsive interfaces and solving complex challenges.
// //             </motion.p>
            
// //             {/* Social Links */}
// //             <motion.div 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.7 }}
// //               className="flex justify-center lg:justify-start gap-4 mb-8"
// //             >
// //               <a
// //                 href="https://github.com/harshparab"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
// //               >
// //                 <Github size={20} />
// //               </a>
// //               <a
// //                 href="https://linkedin.com/in/harshparab"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
// //               >
// //                 <Linkedin size={20} />
// //               </a>
// //               <a
// //                 href="mailto:harshparab865@gmail.com"
// //                 className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
// //               >
// //                 <Mail size={20} />
// //               </a>
// //             </motion.div>

// //             {/* CTA Buttons */}
// //             <motion.div 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.8 }}
// //               className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 flex-wrap"
// //             >
// //               <Button size="lg" className="glow" asChild>
// //                 <a href="#contact">Get In Touch</a>
// //               </Button>
// //               <Button size="lg" variant="outline" asChild>
// //                 <a href="#projects">View Projects</a>
// //               </Button>
// //               <Button size="lg" variant="secondary" asChild>
// //                 <a href="/Harsh_Parab_Resume.pdf" download className="flex items-center gap-2">
// //                   <Download size={18} />
// //                   Download Resume
// //                 </a>
// //               </Button>
// //             </motion.div>
// //           </motion.div>

// //           {/* Profile Photo */}
// //           <motion.div
// //             initial={{ x: 100, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
// //             className="flex-shrink-0"
// //           >
// //             <motion.div
// //               animate={{ 
// //                 boxShadow: [
// //                   "0 0 20px hsl(var(--primary) / 0.3)",
// //                   "0 0 40px hsl(var(--primary) / 0.5)",
// //                   "0 0 20px hsl(var(--primary) / 0.3)"
// //                 ]
// //               }}
// //               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// //               className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/50 relative"
// //             >
// //               <motion.img
// //                 src={profileImg}
// //                 alt="Harsh Parab"
// //                 className="w-full h-full object-cover"
// //                 whileHover={{ scale: 1.1 }}
// //                 transition={{ duration: 0.3 }}
// //               />
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         {/* Scroll indicator */}
// //         <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
// //           <a href="#about">
// //             <ArrowDown size={24} className="text-muted-foreground" />
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;




// import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { motion } from 'framer-motion';
// import heroBg from '@/assets/hero-bg.jpg';
// import profileImg from '@/assets/profile.png';
// // Import the CSS file where custom styles are defined
// import './Hero.css'; 

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#1A1A2E]">
//       {/* Background image (Dark, diffused city background) */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" // Low opacity to keep it dark
//         style={{ backgroundImage: `url(${heroBg})` }}
//       />
//       {/* Overlay gradient (Ensures text readability and dark bottom) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A2E]/80 to-[#1A1A2E]" />
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto">
          
//           {/* Text Content */}
//           <motion.div 
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
//             className="text-center lg:text-left max-w-xl"
//           >
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-foreground/80 mb-2 text-lg text-[#CCD6F6]" // Light grey/white text
//             >
//               Hello, I'm
//             </motion.p>
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white"
//             >
//               <span className="gradient-text-blue">Harsh Parab</span> 
//             </motion.h1>
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-2xl md:text-3xl text-[#8892B0] mb-6 font-medium" // Subdued grey
//             >
//               MERN Stack Developer
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="text-lg text-[#8892B0] max-w-lg mb-8"
//             >
//               Detail-oriented developer skilled in building robust web solutions with JavaScript, React, Node.js, MongoDB, and Java. Passionate about crafting responsive interfaces and solving complex challenges.
//             </motion.p>
            
//             {/* Social Links */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               className="flex justify-center lg:justify-start gap-4 mb-8"
//             >
//               <a
//                 href="https://github.com/hashp07"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full border border-[#8892B0]/50 text-[#CCD6F6] flex items-center justify-center hover:bg-[#2A2A4A] transition-all duration-300"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/harsh-parab2446"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full border border-[#8892B0]/50 text-[#CCD6F6] flex items-center justify-center hover:bg-[#2A2A4A] transition-all duration-300"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="mailto:harshparab865@gmail.com"
//                 className="w-10 h-10 rounded-full border border-[#8892B0]/50 text-[#CCD6F6] flex items-center justify-center hover:bg-[#2A2A4A] transition-all duration-300"
//               >
//                 <Mail size={20} />
//               </a>
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 flex-wrap"
//             >
//               {/* Blue Primary Button */}
//               <Button size="lg" className="bg-[#4D90FE] hover:bg-[#4D90FE]/90 text-white rounded-md font-semibold" asChild>
//                 <a href="#contact">Get In Touch</a>
//               </Button>
//               {/* Grey Outline Button (Subdued) */}
//               <Button size="lg" variant="outline" className="border-[#8892B0]/50 text-[#CCD6F6] bg-transparent hover:bg-[#2A2A4A] rounded-md font-semibold" asChild>
//                 <a href="#projects">View Projects</a>
//               </Button>
//               {/* Grey Filled Button (Secondary) */}
//               <Button size="lg" variant="secondary" className="bg-[#2A2A4A] text-[#CCD6F6] hover:bg-[#3A3A5A] rounded-md font-semibold" asChild>
//                 <a href="/Harsh_Parab_Resume.pdf" download className="flex items-center gap-2">
//                   <Download size={18} />
//                   Download Resume
//                 </a>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Profile Photo (With Blue Glow/Faint) */}
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
//             className="flex-shrink-0"
//           >
//             <motion.div
//               // Neon Blue Shadow Animation
//               animate={{ 
//                 boxShadow: [
//                   "0 0 10px #4D90FE, 0 0 20px #4D90FE", // Subtle start
//                   "0 0 20px #4D90FE, 0 0 40px #6AAFFF", // Brighter middle
//                   "0 0 10px #4D90FE, 0 0 20px #4D90FE" // Subtle end
//                 ]
//               }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#4D90FE]/50 relative p-1"
//             >
//               <div className="w-full h-full rounded-full overflow-hidden relative">
//                 <motion.img
//                   src={profileImg}
//                   alt="Harsh Parab"
//                   className="w-full h-full object-cover filter grayscale contrast-[1.1]" 
//                   // Grayscale filter for monochromatic look
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//                 {/* Sky Blue Overlay Faint */}
//                 <div className="absolute inset-0 bg-[#4D90FE]/20 mix-blend-overlay rounded-full"></div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
//           <a href="#about">
//             <motion.div
//               animate={{ y: [0, 10, 0] }} // Bounce effect
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowDown size={32} className="text-[#4D90FE] animate-bounce" />
//             </motion.div>
//           </a>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg2.png';
import profileImg from '@/assets/profile.png';
import { useState, useEffect } from 'react'; // Import necessary React hooks
import './Hero.css';

// --- CUSTOM TYPING HOOK ---
const useTypingEffect = (texts, speed = 70, pause = 900) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        // Deleting phase
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          // Finished deleting, switch to typing mode for the next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        // Typing phase
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === currentText.length) {
          // Finished typing, switch to deleting mode after a pause
          setTimeout(() => setIsDeleting(true), pause);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? speed / 2 : speed // Faster deletion speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
};
// --- END CUSTOM TYPING HOOK ---

const Hero = () => {
  const jobTitles = ["MERN Stack Developer", "Software Developer"];
  const currentJobTitle = useTypingEffect(jobTitles);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#1A1A2E]">
      {/* Background image (Dark, diffused city background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" // Low opacity to keep it dark
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay gradient (Ensures text readability and dark bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A2E]/80 to-[#1A1A2E]" />
      
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
              className="text-foreground/80 mb-2 text-lg text-[#CCD6F6]" // Light grey/white text
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
            
            {/* >>> MODIFICATION: Typing Effect Applied Here */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-[#8892B0] mb-6 font-medium h-8" // Added h-8 to prevent layout shift
            >
              {currentJobTitle}
              {/* Added animated cursor effect */}
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
              
            </motion.div>

            {/* CTA Buttons (No changes) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 flex-wrap"
            >
              {/* Blue Primary Button */}
              <Button size="lg" className="bg-[#12aede] hover:bg-[#12aede]/90 text-white rounded-md font-semibold" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              {/* Grey Outline Button (Subdued) */}
              <Button size="lg" variant="outline" className="border-[#8892B0]/50 text-[#CCD6F6] bg-transparent hover:bg-[#2A2A4A] rounded-md font-semibold" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              {/* Grey Filled Button (Secondary) */}
              <Button size="lg" variant="secondary" className="bg-[#2A2A4A] text-[#CCD6F6] hover:bg-[#3A3A5A] rounded-md font-semibold" asChild>
                <a href="/Harsh_Parab_Resume.pdf" download className="flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
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
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#12aede]/50 relative p-1"
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
                <div className="absolute inset-0 bg-[#12aede]/20 mix-blend-overlay rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;