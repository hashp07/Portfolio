"use client"
import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface SkillItem {
  name: string;
  icon?: string;
}

// --- 1. Single Orbiting Item Component ---
const OrbitingItem = memo(({ item, angle, radius, size }: { item: SkillItem, angle: number, radius: number, size: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isTextMode = !item.icon;
  
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      className="absolute top-1/2 left-1/2 will-change-transform z-10"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 50 : 10
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative w-full h-full backdrop-blur-md rounded-full border border-white/10
          flex items-center justify-center
          transition-all duration-300 cursor-default
          ${isTextMode ? 'bg-gray-800/90 p-1' : 'bg-gray-900/80 p-2 md:p-3'}
          ${isHovered ? 'scale-125 shadow-[0_0_20px_rgba(6,182,212,0.6)] border-cyan-400 z-50' : 'hover:border-white/30'}
        `}
      >
        {item.icon ? (
          <>
            <img src={item.icon} alt={item.name} className="w-full h-full object-contain pointer-events-none" />
            <div className={`
              absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 
              px-2 md:px-3 py-1 bg-black/90 text-white text-[10px] md:text-xs font-bold rounded-lg border border-white/10
              whitespace-nowrap pointer-events-none transition-all duration-200
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
            `}>
              {item.name}
            </div>
          </>
        ) : (
          <span className="text-[8px] md:text-[10px] font-bold text-center text-white leading-tight select-none">
            {item.name}
          </span>
        )}
      </div>
    </div>
  );
});
OrbitingItem.displayName = 'OrbitingItem';

// --- 2. Background Rings ---
const OrbitPath = memo(({ radius }: { radius: number }) => (
  <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 pointer-events-none transition-all duration-500"
    style={{ width: radius * 2, height: radius * 2 }}
  />
));
OrbitPath.displayName = 'OrbitPath';

// --- 3. Card Component ---
const SkillCard = ({ title, skills, colorClass, time }: { title: string, skills: SkillItem[], colorClass: string, time: number }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to adjust radii
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- CONFIGURATION BASED ON DEVICE ---
  // Mobile: Smaller radii and icon sizes to fit in the box
  // Desktop: Larger radii and icons (Original values)
  const config = isMobile ? {
    innerRadius: 70,
    outerRadius: 110,
    innerSize: 40,
    outerSize: 48
  } : {
    innerRadius: 100,
    outerRadius: 160,
    innerSize: 54,
    outerSize: 64
  };

  const innerSkills = skills.slice(0, 3);
  const outerSkills = skills.slice(3, 6); 

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center h-[400px] md:h-[550px] bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden group hover:border-white/20 transition-all duration-500"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Title */}
      <div className="absolute top-8 md:top-10 z-20 text-center pointer-events-none">
        <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-white transition-colors tracking-wide">
            {title}
        </h3>
        <div className={`h-1 w-10 md:w-12 rounded-full bg-gradient-to-r ${colorClass} mt-2 mx-auto opacity-50 group-hover:opacity-100 transition-opacity`} />
      </div>

      {/* Animation Container */}
      <div className="relative w-full h-full flex items-center justify-center mt-6 md:mt-8">
        
        {/* Center Glow Orb */}
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${colorClass} blur-xl opacity-20 animate-pulse absolute z-0`} />
        
        {/* Paths */}
        <OrbitPath radius={config.innerRadius} />
        <OrbitPath radius={config.outerRadius} />

        {/* Inner Orbit Items */}
        {innerSkills.map((skill, i) => {
          const offset = (i * 2 * Math.PI) / innerSkills.length;
          const speed = 0.6; 
          return <OrbitingItem key={skill.name} item={skill} angle={time * speed + offset} radius={config.innerRadius} size={config.innerSize} />;
        })}

        {/* Outer Orbit Items */}
        {outerSkills.map((skill, i) => {
          const offset = (i * 2 * Math.PI) / outerSkills.length + (Math.PI / 3);
          const speed = -0.4; 
          return <OrbitingItem key={skill.name} item={skill} angle={time * speed + offset} radius={config.outerRadius} size={config.outerSize} />;
        })}

      </div>
    </motion.div>
  );
};

// --- 4. Main Section ---
export default function SkillsSection() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setTime(t => t + 0.01);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const languagesData = {
    title: 'Languages',
    skills: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]
  };

  const frameworksData = {
    title: 'Frameworks',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    ]
  };

  const toolsData = {
    title: 'Tools & DBs',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ]
  };

  const softSkillsData = {
    title: 'Soft Skills',
    skills: [
      { name: 'Leadership' },
      { name: 'Collaboration' },
      { name: 'Problem Solving' },
      { name: 'Prioritization' },
      { name: 'Adaptability' },
      { name: 'Empathy' } 
    ] 
  };

  return (
    <section className="py-24 bg-black min-h-screen text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          <SkillCard 
            title={languagesData.title} 
            skills={languagesData.skills} 
            colorClass="from-cyan-400 to-blue-600" 
            time={time} 
          />

          <SkillCard 
            title={frameworksData.title} 
            skills={frameworksData.skills} 
            colorClass="from-cyan-400 to-blue-600" 
            time={time + 2} 
          />

          <SkillCard 
            title={toolsData.title} 
            skills={toolsData.skills} 
            colorClass="from-cyan-400 to-blue-600" 
            time={time + 4} 
          />

          <SkillCard 
            title={softSkillsData.title} 
            skills={softSkillsData.skills} 
            colorClass="from-cyan-400 to-blue-600" 
            time={time + 1} 
          />

        </div>
      </div>
    </section>
  );
}