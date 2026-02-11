// import { Helmet } from 'react-helmet-async';
// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
// import Experience from '@/components/Experience';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';

// const Index = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Harsh Parab | MERN Stack Developer Portfolio</title>
//         <meta 
//           name="description" 
//           content="Portfolio of Harsh Parab - A detail-oriented MERN stack developer skilled in React, Node.js, MongoDB, and Java. View my projects and experience." 
//         />
//         <meta name="keywords" content="Harsh Parab, MERN Stack Developer, React Developer, Node.js, Portfolio, Web Developer" />
//       </Helmet>
      
//       <div className="min-h-screen bg-background text-foreground">
//         <Navbar />
//         <main className="md:pl-20 transition-all duration-500">
//           <Hero />
//           <About />
//           <Skills />
//           <Projects />
//           <Experience />
//           <Contact />
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Index;

import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { useState } from 'react';

const Index = () => {
   const [showContent, setShowContent] = useState(false);
  return (
    <>
      <Helmet>
        <title>Harsh Parab | MERN Stack Developer Portfolio</title>
        <meta 
          name="description" 
          content="Portfolio of Harsh Parab - A detail-oriented MERN stack developer skilled in React, Node.js, MongoDB, and Java." 
        />
        <meta name="keywords" content="Harsh Parab, MERN Stack Developer, React Developer, Node.js, Portfolio" />
      </Helmet>
      
      <div>
        {!showContent && (
        <div onAnimationEnd={() => setShowContent(true)}>
          <Preloader />
        </div>
      )}
        <Navbar />
        
        {/* FIX: Added 'md:pl-32' to push content right, away from the navbar */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        {/* Footer usually needs the same padding if it's not full width */}
        <div className="md:pl-32">
            <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;