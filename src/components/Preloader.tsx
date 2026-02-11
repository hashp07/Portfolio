import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Floating particle component
const Particle: React.FC<{ delay: number; x: number; y: number; size: number }> = ({ delay, x, y, size }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
      y: [0, -80],
    }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

// Scanning line effect
const ScanLine: React.FC = () => (
  <motion.div
    className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-[1]"
    initial={{ top: "0%" }}
    animate={{ top: ["0%", "100%", "0%"] }}
    exit={{ opacity: 0 }} // <--- ADD THIS
    transition={{ duration: 2, repeat: Infinity, ease: "linear", opacity: { duration: 0.2 }}}
  />
);

// Grid background
const GridBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
    {/* Radial glow */}
    <motion.div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.06), transparent 60%)',
      }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// Corner brackets decoration
const CornerBrackets: React.FC = () => (
  <>
    {/* Top-left */}
    <motion.div
      className="absolute top-[20%] left-[15%] w-8 h-8 border-l-2 border-t-2 border-primary/30"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    />
    {/* Top-right */}
    <motion.div
      className="absolute top-[20%] right-[15%] w-8 h-8 border-r-2 border-t-2 border-primary/30"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    />
    {/* Bottom-left */}
    <motion.div
      className="absolute bottom-[20%] left-[15%] w-8 h-8 border-l-2 border-b-2 border-primary/30"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.5 }}
    />
    {/* Bottom-right */}
    <motion.div
      className="absolute bottom-[20%] right-[15%] w-8 h-8 border-r-2 border-b-2 border-primary/30"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
    />
  </>
);

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const text1 = "Portfolio";
  const text2 = ".start()";

  // Generate particles once
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
      })),
    []
  );

  useEffect(() => {
    const typeTimer = setTimeout(() => setIsTypingComplete(true), 1500);
    const closeTimer = setTimeout(() => setLoading(false), 3200);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 800);

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(closeTimer);
      clearInterval(glitchInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
    exit: {
      opacity: 0,
      scale: 2,
      filter: "blur(20px)",
      transition: { duration: 1, ease: [0.87, 0, 0.13, 1] as const },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 12 },
    },
  };

  const shutterVariants = {
    initial: { height: "50vh" },
    exit: {
      height: "0vh",
      transition: { duration: 1.2, ease: [0.87, 0, 0.13, 1] as const },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none overflow-hidden">
          {/* TOP SHUTTER */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-background z-0 border-b border-primary/5"
            variants={shutterVariants}
            initial="initial"
            exit="exit"
          />

          {/* BOTTOM SHUTTER */}
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-background z-0 border-t border-primary/5"
            variants={shutterVariants}
            initial="initial"
            exit="exit"
          />

          {/* GRID BACKGROUND */}
          <GridBackground />

          {/* SCAN LINE */}
          <ScanLine />

          {/* PARTICLES */}
          {particles.map((p) => (
            <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
          ))}

          {/* CORNER BRACKETS */}
          <CornerBrackets />

          {/* CENTER CONTENT */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* TYPING TEXT with glitch */}
            <h1
              className="text-3xl md:text-6xl font-mono font-bold tracking-tight text-foreground flex gap-1 md:gap-2 relative"
              style={{
                textShadow: glitch
                  ? '2px 0 hsl(var(--secondary)), -2px 0 hsl(var(--destructive))'
                  : 'none',
                transform: glitch
                  ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`
                  : 'none',
              }}
            >
              {/* Part 1: "Portfolio" */}
              <span className="flex" style={{ perspective: '500px' }}>
                {text1.split("").map((char, i) => (
                  <motion.span key={`t1-${i}`} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Part 2: ".start()" */}
              <motion.span
                className="flex"
                style={{ perspective: '500px' }}
                animate={{
                  color: isTypingComplete
                    ? 'hsl(var(--primary))'
                    : 'hsl(var(--secondary))',
                  textShadow: isTypingComplete
                    ? '0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)'
                    : '0 0 10px hsl(var(--secondary) / 0.3)',
                }}
                transition={{ duration: 0.4 }}
              >
                {text2.split("").map((char, i) => (
                  <motion.span key={`t2-${i}`} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </motion.span>

              {/* Blinking cursor */}
              <motion.span
                className="text-primary ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              >
                _
              </motion.span>
            </h1>

            {/* PROGRESS BAR */}
            <div className="mt-8 w-48 h-[2px] bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--primary)))',
                  boxShadow: '0 0 15px hsl(var(--primary) / 0.6)',
                }}
                initial={{ width: "0%" }}
                animate={{ width: isTypingComplete ? "100%" : "0%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* STATUS TEXT */}
            <motion.p
              className="mt-4 text-xs font-mono text-primary/70 uppercase tracking-[0.3em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isTypingComplete ? 1 : 0,
                y: isTypingComplete ? 0 : 10,
              }}
              transition={{ duration: 0.5 }}
            >
              {'> '}System Online
            </motion.p>

            {/* Hex codes decoration */}
            <motion.div
              className="mt-6 flex gap-4 text-[10px] font-mono text-muted-foreground/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingComplete ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              <span>0x7F3A</span>
              <span>•</span>
              <span>INIT_OK</span>
              <span>•</span>
              <span>v2.0.1</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
