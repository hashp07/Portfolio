import { GraduationCap, Award, Users, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants for the container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
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
          {/* Left Column: Text and Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-6">
              I'm a passionate MERN stack developer currently pursuing B.Tech in Computer Science 
              at D. Y. Patil College of Engineering, Kolhapur. With a CGPA of 8.49, I combine 
              academic excellence with practical development experience.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
              As the Technical Co-Ordinator (Lead) of the Silicon CSE Committee, I collaborate 
              with teams to ensure seamless integration of tools, software, and technical resources. 
              I'm dedicated to creating efficient solutions that make a real impact.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="group bg-secondary p-4 rounded-lg border border-transparent hover:border-primary/50 transition-all duration-300">
                <p className="text-3xl font-bold text-primary">8.49</p>
                <p className="text-muted-foreground">CGPA</p>
              </div>
              <div className="group bg-secondary p-4 rounded-lg border border-transparent hover:border-primary/50 transition-all duration-300">
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-muted-foreground">Projects</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Experience Cards */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="bg-secondary p-6 rounded-xl flex gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Education</h3>
                <p className="text-muted-foreground">B. Tech (CSE) - D. Y. Patil College of Engineering</p>
                <p className="text-sm text-muted-foreground">June 2022 – June 2026</p>
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={itemVariants} className="bg-secondary p-6 rounded-xl flex gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Leadership</h3>
                <p className="text-muted-foreground">Technical Co-Ordinator (Lead)</p>
                <p className="text-sm text-muted-foreground">Silicon CSE Committee</p>
              </div>
            </motion.div>

            {/* Certifications - UPDATED FOR MOBILE GRID */}
            <motion.div 
              variants={itemVariants} 
              className="bg-secondary p-6 rounded-xl flex flex-col gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="flex gap-4 items-center border-b border-border/50 pb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-xl">Certifications</h3>
              </div>

              {/* UPDATED: grid-cols-2 ensures 2 columns on mobile */}
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -2 }}
                    // UPDATED LOGIC:
                    // col-span-2: Spans full width on mobile (for the center item)
                    // md:col-span-2 md:w-1/2 md:mx-auto: Centers it on desktop
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg bg-background/50 border border-border hover:border-primary/50 hover:bg-background transition-all group ${
                      cert.isCenter ? "col-span-2 md:col-span-2 md:mx-auto md:w-1/2" : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors truncate mr-2">
                      {cert.name}
                    </span>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary opacity-50 group-hover:opacity-100 shrink-0" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;