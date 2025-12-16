// import { useState } from 'react';
// import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!formData.name || !formData.email || !formData.message) {
//       toast({
//         title: "Error",
//         description: "Please fill in all fields",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);
    
//     // Create mailto link
//     const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
//     const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
//     window.location.href = `mailto:harshparab865@gmail.com?subject=${subject}&body=${body}`;
    
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Email client opened!",
//         description: "Please send the email from your mail application.",
//       });
//       setFormData({ name: '', email: '', message: '' });
//     }, 1000);
//   };

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/hashp07', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://linkedin.com/in/harsh-parab2446', label: 'LinkedIn' },
//     { icon: Mail, href: 'mailto:harshparab865@gmail.com', label: 'Email' },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-card">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Get In <span className="gradient-text">Touch</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//           {/* Left side - Info */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
//             <p className="text-muted-foreground mb-8 leading-relaxed">
//               I'm always interested in hearing about new projects and opportunities. 
//               Whether you have a question or just want to say hi, feel free to get in touch!
//             </p>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
//                   <Mail size={18} className="text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Email</p>
//                   <a href="mailto:harshparab865@gmail.com" className="text-primary hover:underline">
//                     harshparab865@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
//                   <MapPin size={18} className="text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Location</p>
//                   <p>India</p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-muted-foreground mb-4">Connect on Social</p>
//               <div className="flex gap-4">
//                 {socialLinks.map((link) => (
//                   <a
//                     key={link.label}
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
//                     aria-label={link.label}
//                   >
//                     <link.icon size={20} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right side - Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm mb-2">Name</label>
//               <Input
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className="bg-secondary border-border focus:border-primary"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm mb-2">Email</label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your@email.com"
//                 className="bg-secondary border-border focus:border-primary"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm mb-2">Message</label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message..."
//                 rows={5}
//                 className="bg-secondary border-border focus:border-primary resize-none"
//               />
//             </div>

//             <Button 
//               type="submit" 
//               className="w-full glow gap-2" 
//               size="lg"
//               disabled={isSubmitting}
//             >
//               <Send size={18} />
//               {isSubmitting ? 'Opening mail...' : 'Send Message'}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
//import { error } from 'console';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_fc3hkao',
        'template_a1v5tsl',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'frncj3zsanxsXAZw8'
      );

      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log(error)
      toast({
        title: 'Failed to Send',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hashp07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/harsh-parab2446', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXxmPRwBpvXgpTbwfqhGsqqzBHVrpMPKZkRgVNMlnMlNcWBkPQSwNKMrvBVwcCWWVlkSq', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to get in touch!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:harshparab865@gmail.com"
                    className="text-primary hover:underline"
                  >
                    harshparab865@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">Connect on Social</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              className="w-full gap-2"
              size="lg"
              disabled={isSubmitting}
            >
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
