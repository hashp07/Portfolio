import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectDineview from '@/assets/project-dineview.jpg';
import projectBilling from '@/assets/project-billing.jpg';
import projectHandeye from '@/assets/project-handeye.jpg';
import projectInboxshield from '@/assets/project-inboxshield.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Dineview - AR Restaurant System',
      description: 'An Augmented Reality (AR) menu system for restaurants to enhance customer engagement and simplify menu navigation. Users can view 3D models of dishes and interact with them through mobile devices.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: projectDineview,
      githubLink: 'https://github.com/hashp07/Projects/tree/main/AR-Restaurant',
      demoLink: 'https://dine-view.vercel.app',
    },
    {
      title: 'Electricity Billing System',
      description: 'A scalable automated billing system processing 100+ monthly bills with 99.9% accuracy, reducing manual effort by 60%. Features separate admin and customer modules with MySQL integration.',
      tech: ['Java', 'SQL', 'Swing Framework', 'REST APIs'],
      image: projectBilling,
      githubLink: 'https://github.com/hashp07/Electricity-Billing-System',
      demoLink: 'https://github.com/hashp07/Electricity-Billing-System',
    },
    {
      title: 'HandEye - Sign Language Detection',
      description: 'A CNN-based sign language recognition system with 95% accuracy on gestures, leveraging a curated 5,000-image dataset. Reduces processing latency by 20% with plans for NLP integration.',
      tech: ['Python', 'TensorFlow', 'CNN'],
      image: projectHandeye,
      githubLink: 'https://github.com/hashp07/Projects/tree/main/Sign%20Detection%20Language%202',
      demoLink: 'https://github.com/hashp07/Projects/tree/main/Sign%20Detection%20Language%202',
    },
    {
      title: 'InboxShield - Spam Email Detection',
      description: 'Machine learning system to accurately classify emails as spam or legitimate, using data-driven algorithms that analyze email content and metadata, adapting to new spam techniques.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      image: projectInboxshield,
      githubLink: 'https://github.com/hashp07/Spam-Mail-Detection',
      demoLink: 'https://github.com/hashp07/Spam-Mail-Detection',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              // >>> KEY CHANGE: Layout Switching
              // 'flex flex-row': Mobile (Side-by-side: Image Left | Text Right)
              // 'md:flex-col': Desktop (Stacked: Image Top | Text Bottom)
              className="group relative bg-secondary rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-row md:flex-col items-stretch"
            >
              {/* Project Image */}
              {/* Mobile: w-32 (Fixed width), h-auto (Stretches to match text height)
                 Desktop: w-full, h-48 (Fixed height banner)
              */}
              <div className="relative w-32 md:w-full md:h-48 shrink-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent md:block hidden" />
              </div>

              {/* Project Content */}
              {/* Added 'flex flex-col justify-between' to ensure buttons stay at bottom */}
              <div className="p-4 md:p-6 flex flex-col justify-between w-full">
                <div>
                  {/* Title: Smaller on mobile */}
                  <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 md:line-clamp-none">
                    {project.title}
                  </h3>
                  
                  {/* Description: Smaller text & clamped to 3 lines on mobile to save space */}
                  <p className="text-muted-foreground mb-3 md:mb-4 leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack: Smaller tags on mobile */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 md:px-3 md:py-1 bg-background text-[10px] md:text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons: Compact size on mobile */}
                <div className="flex gap-2 md:gap-4 mt-auto">
                  <Button asChild variant="outline" size="sm" className="gap-1.5 md:gap-2 h-8 md:h-9 text-xs md:text-sm px-2.5 md:px-4">
                    <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View code for ${project.title} on GitHub`}
                    >
                        <Github size={14} className="md:w-4 md:h-4" />
                        Code
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-1.5 md:gap-2 h-8 md:h-9 text-xs md:text-sm px-2.5 md:px-4">
                    <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo for ${project.title}`}
                    >
                        <ExternalLink size={14} className="md:w-4 md:h-4" />
                        Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;