import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import profileImageLight from 'figma:asset/557d0c31e4caec9ddb601385d11b3d8387342704.webp';

const profileImageDark = '/profile-dark.webp';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ThanojBuddhima" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/thanojbuddhima" },
    { icon: Mail, href: "mailto:thanojbuddhima2003@gmail.com" },
    { icon: Facebook, href: "https://www.facebook.com/share/1D5cha3Avy/" },
    { icon: Instagram, href: "https://www.instagram.com/thanoj_b_20/" },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-background relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Dotted Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-10 text-foreground" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 0)`, 
            backgroundSize: '32px 32px' 
          }} 
        />
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{ 
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #FF6B35 2px, transparent 0)`, 
            backgroundSize: '32px 32px',
            WebkitMaskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            opacity: isHovering ? 1 : 0
          }} 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start order-2 lg:order-1"
        >
          <h3 className="text-xl font-medium mb-3 text-foreground">
            Hey, I'm Thanoj
          </h3>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
            Software Engineer
          </h1>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              I'm Thanoj Buddhima, an undergraduate at the <span className="text-foreground font-medium">Faculty of Information Technology, University of Moratuwa</span>, passionate about creating efficient, scalable, and user-focused software solutions. I thrive on solving complex problems and continuously exploring new technologies to push my skills further.
            </p>
            <p>
              I am a team member of team <a href="https://gmora.dev" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline decoration-[#FF6B35] underline-offset-4 hover:text-[#FF6B35] transition-colors">Gmora</a>. I've also won several hackathons and competitions, gaining hands-on experience in rapid problem-solving, teamwork, and real-world product development.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image and Actions */}
        <motion.div 
          className="flex flex-col items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden">
            <ImageWithFallback
              src={isDarkMode ? profileImageDark : profileImageLight}
              alt="Thanoj Buddhima"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[#FF6B35] transition-colors flex items-center justify-center p-2"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-transparent border border-foreground text-foreground rounded-none font-medium text-sm hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
            >
              Connect
            </button>
            
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Thanoj_Buddhima_CV.pdf';
                link.download = 'Thanoj_Buddhima_CV.pdf';
                link.click();
              }}
              className="px-6 py-2.5 bg-[#FF6B35] text-white rounded-none font-medium text-sm hover:bg-[#e55a2b] transition-colors flex items-center gap-2"
            >
              Download CV
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}