import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import profileImageLight from 'figma:asset/557d0c31e4caec9ddb601385d11b3d8387342704.png';

const profileImageDark = '/profile-dark.png';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1D5cha3Avy/" },
    { icon: Github, href: "https://github.com/ThanojBuddhima" },
    { icon: Instagram, href: "https://www.instagram.com/thanoj_b_20/" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/thanojbuddhima" },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 relative bg-background">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center mt-8">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-4 text-foreground">
            Hey, I'm Thanoj <span className="inline-block animate-bounce">👋</span>
          </h3>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Software Engineer
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm a FIT undergraduate at the University of Moratuwa, passionate about creating efficient, scalable, and user-focused software solutions.
          </p>
        </motion.div>

        {/* Centered Profile Image (No Blobs) */}
        <motion.div 
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ImageWithFallback
            src={isDarkMode ? profileImageDark : profileImageLight}
            alt="Thanoj Buddhima"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Social Icons (Centered below image) */}
        <motion.div 
          className="flex gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground text-background hover:bg-[#FF6B35] transition-colors flex items-center justify-center shadow-sm"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-[#FF6B35] text-white rounded-md font-medium text-sm hover:bg-[#e55a2b] transition-colors flex items-center gap-2"
          >
            Hire Me
          </button>
          
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Thanoj_Buddhima_CV.pdf';
              link.download = 'Thanoj_Buddhima_CV.pdf';
              link.click();
            }}
            className="px-6 py-2.5 bg-[#FF6B35] text-white rounded-md font-medium text-sm hover:bg-[#e55a2b] transition-colors flex items-center gap-2"
          >
            Download CV
          </button>
        </motion.div>

      </div>
    </section>
  );
}