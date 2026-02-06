import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'MUSING QUILLS',
      role: 'Full Stack Developer Intern',
      period: 'Present',
      location: 'BELGAUM, India',
      description: 'Contributing to the design, development, and maintenance of responsive web applications. Collaborated with senior developers and cross-functional teams to implement user-centric features using modern web technologies. Assisted in debugging, performance optimization, and code reviews while adhering to best practices and project timelines.',
    },
    {
      company: 'EdTech India Institute of Bombay',
      role: 'Full Stack Developer',
      period: 'June 2025 – October 2025',
      location: 'Kolhapur, India',
      description: 'Building an AI-powered mock interview platform that simulates real interview scenarios, providing personalized feedback and performance insights. Helps users practice, improve communication skills, and build confidence for actual interviews.',
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-3 h-3 -translate-x-[5px] bg-primary rounded-full ring-4 ring-background" />

              <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{exp.role}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
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
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
