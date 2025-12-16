// import { ExternalLink, Github } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import projectDineview from '@/assets/project-dineview.jpg';
// import projectBilling from '@/assets/project-billing.jpg';
// import projectHandeye from '@/assets/project-handeye.jpg';
// import projectInboxshield from '@/assets/project-inboxshield.jpg';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Dineview - AR Restaurant System',
//       description: 'An Augmented Reality (AR) menu system for restaurants to enhance customer engagement and simplify menu navigation. Users can view 3D models of dishes and interact with them through mobile devices.',
//       tech: ['MongoDB', 'Express', 'React', 'Node.js'],
//       image: projectDineview,
//     },
//     {
//       title: 'Electricity Billing System',
//       description: 'A scalable automated billing system processing 100+ monthly bills with 99.9% accuracy, reducing manual effort by 60%. Features separate admin and customer modules with MySQL integration.',
//       tech: ['Java', 'SQL', 'Swing Framework', 'REST APIs'],
//       image: projectBilling,
//     },
//     {
//       title: 'HandEye - Sign Language Detection',
//       description: 'A CNN-based sign language recognition system with 95% accuracy on gestures, leveraging a curated 5,000-image dataset. Reduces processing latency by 20% with plans for NLP integration.',
//       tech: ['Python', 'TensorFlow', 'CNN'],
//       image: projectHandeye,
//     },
//     {
//       title: 'InboxShield - Spam Email Detection',
//       description: 'Machine learning system to accurately classify emails as spam or legitimate, using data-driven algorithms that analyze email content and metadata, adapting to new spam techniques.',
//       tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
//       image: projectInboxshield,
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-card">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="group relative bg-secondary rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
//             >
//               {/* Project Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-background text-xs rounded-full text-muted-foreground"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <Button variant="outline" size="sm" className="gap-2">
//                     <Github size={16} />
//                     Code
//                   </Button>
//                   <Button variant="outline" size="sm" className="gap-2">
//                     <ExternalLink size={16} />
//                     Demo
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


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
      // >>> MODIFICATION: Added GitHub Link property
      githubLink: 'https://github.com/hashp07/Projects/tree/main/AR-Restaurant', // REPLACE WITH ACTUAL LINK
      demoLink: 'https://dine-view.vercel.app', // Placeholder for Demo link
    },
    {
      title: 'Electricity Billing System',
      description: 'A scalable automated billing system processing 100+ monthly bills with 99.9% accuracy, reducing manual effort by 60%. Features separate admin and customer modules with MySQL integration.',
      tech: ['Java', 'SQL', 'Swing Framework', 'REST APIs'],
      image: projectBilling,
      // >>> MODIFICATION: Added GitHub Link property
      githubLink: 'https://github.com/hashp07/Electricity-Billing-System', // REPLACE WITH ACTUAL LINK
      demoLink: 'https://github.com/hashp07/Electricity-Billing-System', // Placeholder for Demo link
    },
    {
      title: 'HandEye - Sign Language Detection',
      description: 'A CNN-based sign language recognition system with 95% accuracy on gestures, leveraging a curated 5,000-image dataset. Reduces processing latency by 20% with plans for NLP integration.',
      tech: ['Python', 'TensorFlow', 'CNN'],
      image: projectHandeye,
      // >>> MODIFICATION: Added GitHub Link property
      githubLink: 'https://github.com/hashp07/Projects/tree/main/Sign%20Detection%20Language%202', // REPLACE WITH ACTUAL LINK
      demoLink: 'https://github.com/hashp07/Projects/tree/main/Sign%20Detection%20Language%202', // Placeholder for Demo link
    },
    {
      title: 'InboxShield - Spam Email Detection',
      description: 'Machine learning system to accurately classify emails as spam or legitimate, using data-driven algorithms that analyze email content and metadata, adapting to new spam techniques.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      image: projectInboxshield,
      // >>> MODIFICATION: Added GitHub Link property
      githubLink: 'https://github.com/hashp07/Spam-Mail-Detection', // REPLACE WITH ACTUAL LINK
      demoLink: 'https://github.com/hashp07/Spam-Mail-Detection', // Placeholder for Demo link
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-secondary rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* >>> MODIFICATION: "Code" button now links to GitHub */}
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View code for ${project.title} on GitHub`}
                    >
                        <Github size={16} />
                        Code
                    </a>
                  </Button>
                  
                  {/* >>> MODIFICATION: "Demo" button now links to Demo (placeholder used) */}
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo for ${project.title}`}
                    >
                        <ExternalLink size={16} />
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