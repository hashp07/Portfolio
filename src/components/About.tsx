import { GraduationCap, Award, Users, ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const FloatingIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${50}% ${50}%, rgba(var(--primary-rgb), 0.15), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.6, ease }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
    visible: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { duration: 0.7, ease }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
    visible: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { duration: 0.7, ease }
    }
  };

  return (
    // Changed bg-card to bg-black and text color to white/zinc
    <section id="about" className="py-20 bg-black text-zinc-100 overflow-hidden relative">
      
      {/* Ambient background glow - adjusted opacity for dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
            <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.p variants={slideInLeft} className="text-lg text-zinc-400 mb-6">
              I'm a passionate MERN stack developer currently pursuing B.Tech in Computer Science
              at D. Y. Patil College of Engineering, Kolhapur. With a CGPA of 8.49, I combine
              academic excellence with practical development experience.
            </motion.p>
            <motion.p variants={slideInLeft} className="text-lg text-zinc-400 mb-8">
              As the Technical Co-Ordinator (Lead) of the Silicon CSE Committee, I collaborate
              with teams to ensure seamless integration of tools, software, and technical resources.
              I'm dedicated to creating efficient solutions that make a real impact.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {[
                { value: "8.49", label: "CGPA" },
                { value: "4+", label: "Projects" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  // Changed bg-secondary to bg-white/5 (dark glass effect)
                  className="group bg-white/5 p-4 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.p
                    className="text-3xl font-bold text-cyan-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-zinc-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Education */}
            {/* Changed bg-secondary to bg-zinc-900/50 with border */}
            <GlowCard className="group bg-zinc-900/50 border border-white/10 p-6 rounded-xl flex gap-4 hover:border-cyan-500/30 transition-all">
              <motion.div variants={slideInRight}>
                <div className="flex gap-4">
                  <FloatingIcon className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <GraduationCap className="text-cyan-400" size={24} />
                  </FloatingIcon>
                  <div>
                    <h3 className="font-semibold mb-1 text-zinc-100">Education</h3>
                    <p className="text-zinc-400">B. Tech (CSE) - D. Y. Patil College of Engineering</p>
                    <p className="text-sm text-zinc-500">June 2022 – June 2026</p>
                  </div>
                </div>
              </motion.div>
            </GlowCard>


            {/* Education */}
            {/* Changed bg-secondary to bg-zinc-900/50 with border */}
            <GlowCard className="group bg-zinc-900/50 border border-white/10 p-6 rounded-xl flex gap-4 hover:border-cyan-500/30 transition-all">
              <motion.div variants={slideInRight}>
                <div className="flex gap-4">
                  <FloatingIcon className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <GraduationCap className="text-cyan-400" size={24} />
                  </FloatingIcon>
                  <div>
                    <h3 className="font-semibold mb-1 text-zinc-100">Leadership</h3>
                    <p className="text-zinc-400">Technical Co-Ordinator (Lead)</p>
                    <p className="text-sm text-zinc-500">Silicon CSE Committee</p>
                  </div>
                </div>
              </motion.div>
            </GlowCard>
           

            {/* Certifications */}
            <GlowCard className="group bg-zinc-900/50 border border-white/10 p-6 rounded-xl flex flex-col gap-4 hover:border-cyan-500/30 transition-all">
              <motion.div variants={slideInRight} className="flex flex-col gap-4">
                <div className="flex gap-4 items-center border-b border-white/10 pb-4">
                  <FloatingIcon className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <Award className="text-cyan-400" size={24} />
                  </FloatingIcon>
                  <h3 className="font-semibold text-xl text-zinc-100">Certifications</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[
                    { name: "AWS Solutions", link: "https://drive.google.com/file/d/1GaVjRE_KIZcrqxDR6GzvmirWlgXbOuAU/view?usp=drive_link" },
                    { name: "Frontend Dev", link: "https://drive.google.com/drive/folders/1kmcpfl933XuLk8eAmGH19dj2ZxKb-o7a?usp=sharing" },
                    { name: "MERN Stack", link: "https://drive.google.com/file/d/1p8gFM2fF-GF27qILkYyRn-SPOesow4S9/view?usp=sharing" },
                    { name: "Python", link: "https://drive.google.com/file/d/1i-3IDLMbn8lOLruGZBOF2VI0BegzmkgE/view?usp=sharing" },
                    { name: "Java Foundation", link: "https://drive.google.com/drive/folders/1GhWM-V1JEqR8wWs2PPxt0at-AamwESkU?usp=sharing", isCenter: true }
                  ].map((cert, i) => (
                    <motion.a
                      key={cert.name}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                        transition: { type: "spring", stiffness: 400, damping: 15 }
                      }}
                      whileTap={{ scale: 0.97 }}
                      // Updated button styles for dark mode
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-colors group/cert ${
                        cert.isCenter ? "col-span-2 md:col-span-2 md:mx-auto md:w-1/2" : ""
                      }`}
                    >
                      <span className="text-sm font-medium text-zinc-400 group-hover/cert:text-cyan-400 transition-colors truncate mr-2">
                        {cert.name}
                      </span>
                      <motion.span
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 45 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ExternalLink size={14} className="text-zinc-500 group-hover/cert:text-cyan-400 opacity-50 group-hover/cert:opacity-100 shrink-0 transition-all" />
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;