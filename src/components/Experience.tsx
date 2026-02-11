import { Briefcase, Calendar, MapPin, ExternalLink, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'MUSING QUILLS',
      role: 'Full Stack Developer Intern',
      period: 'Present',
      location: 'BELGAUM, India',
      description: 'Contributing to the design, development, and maintenance of responsive web applications. Collaborated with senior developers to implement user-centric features using modern web technologies.',
      // Added projects section for your internship
      projects: [
        { name: 'Tier2digihouse', link: 'https://tier2digihouse.com' },
        { name: 'RIZZ Academy', link: 'https://rizzacademy.in' }
      ]
    },
    {
      company: 'EdTech India Institute of Bombay',
      role: 'Full Stack Developer',
      period: 'June 2025 – October 2025',
      location: 'Kolhapur, India',
      description: 'Building an AI-powered mock interview platform (PrepInterview) that simulates real interview scenarios, providing personalized feedback and performance insights.',
      
    },
    {
      company: 'SOFTTRON',
      role: 'Software Developer and IT (Android Development)',
      period: 'June 2024 – July 2024',
      location: 'Kolhapur, India',
      description: 'Developed Code M8, an Android application enabling students to collaborate for hackathons, form teams, and connect with members having similar skills.',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-3 h-3 -translate-x-[5px] bg-primary rounded-full ring-4 ring-background" />

              <div className="group bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{exp.role}</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.company}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Projects Section */}
                {exp.projects && (
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Globe size={14} className="text-primary" />
                      Featured Projects:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-medium hover:bg-primary hover:text-white transition-all duration-200 border border-border"
                        >
                          {project.name}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;