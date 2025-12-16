import { GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate MERN stack developer currently pursuing B.Tech in Computer Science 
              at D. Y. Patil College of Engineering, Kolhapur. With a CGPA of 8.49, I combine 
              academic excellence with practical development experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              As the Technical Co-Ordinator (Lead) of the Silicon CSE Committee, I collaborate 
              with teams to ensure seamless integration of tools, software, and technical resources. 
              I'm dedicated to creating efficient solutions that make a real impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">8.49</p>
                <p className="text-muted-foreground">CGPA</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-xl flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Education</h3>
                <p className="text-muted-foreground">B. Tech (CSE) - D. Y. Patil College of Engineering</p>
                <p className="text-sm text-muted-foreground">June 2022 – June 2026</p>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-xl flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Leadership</h3>
                <p className="text-muted-foreground">Technical Co-Ordinator (Lead)</p>
                <p className="text-sm text-muted-foreground">Silicon CSE Committee</p>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-xl flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Certifications</h3>
                <p className="text-muted-foreground">Java Foundation, Frontend Development, AWS Solutions Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
