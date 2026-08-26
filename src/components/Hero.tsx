import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, Code2, Layers, Award, Mail } from 'lucide-react';
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

  const navCards = [
    { label: 'Me', id: 'about', icon: User },
    { label: 'Projects', id: 'projects-achievements', icon: Code2 },
    { label: 'Skills', id: 'skills', icon: Layers },
    { label: 'Awards', id: 'achievements', icon: Award },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 relative bg-background">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center mt-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-4 text-foreground">
            Hey, I'm Thanoj <span className="inline-block animate-bounce">👋</span>
          </h3>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            UI & UX Designer<br />& Web Developer
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Innovation at the intersection of design & code — FIT undergrad @ University of Moratuwa.
          </p>
        </motion.div>

        <motion.div 
          className="relative w-48 h-48 md:w-56 md:h-56 mb-12 rounded-full overflow-hidden border-4 border-background shadow-xl"
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

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full font-medium transition-colors flex items-center gap-2"
          >
            Let's Connect ↗
          </button>
          
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Thanoj_Buddhima_CV.pdf';
              link.download = 'Thanoj_Buddhima_CV.pdf';
              link.click();
            }}
            className="px-8 py-3 bg-card hover:bg-muted text-foreground border border-border rounded-full font-medium transition-colors flex items-center gap-2"
          >
            View Resume ⬇
          </button>
        </motion.div>

      </div>
      
      {/* Bottom Nav Cards */}
      <motion.div 
        className="w-full max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-3 px-4 mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {navCards.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-card border border-border hover:border-[#0A66C2] rounded-2xl transition-all hover:-translate-y-1 shadow-sm"
            >
              <Icon size={24} className="text-[#0A66C2]" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </button>
          );
        })}
      </motion.div>
    </section>
  );
}