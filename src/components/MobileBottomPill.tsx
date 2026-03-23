import { House, Zap, User, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export function MobileBottomPill() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  // Track active section on scroll to illuminate the correct icon
  useEffect(() => {
    const navItems = ['hero', 'about', 'projects-achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header/buffer

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-[999999] pointer-events-none w-max">
      <div className="relative pointer-events-auto flex items-center bg-[#111] dark:bg-[#111] border border-gray-800 shadow-2xl rounded-full h-[60px] px-6 gap-8">
        
        {/* Home Notch */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`w-[52px] h-[52px] rounded-full border-[4px] border-[#111] flex items-center justify-center shadow-lg transition-colors ${
              activeSection === 'hero' ? 'bg-[#FF6B35] text-white' : 'bg-gray-800 text-gray-400 hover:bg-[#FF6B35] hover:text-white'
            }`}
            aria-label="Home"
          >
            <House size={22} />
          </button>
        </div>

        {/* Spacer */}
        <div className="w-2 shrink-0" />

        {/* About / Profile */}
        <button
          onClick={() => scrollToSection('about')}
          className={`flex items-center justify-center p-2 transition-colors ${
            activeSection === 'about' ? 'text-[#FF6B35]' : 'text-gray-400 hover:text-white'
          }`}
          aria-label="About"
        >
          <User size={24} />
        </button>

        {/* Projects / Explore */}
        <button
          onClick={() => scrollToSection('projects-achievements')}
          className={`flex items-center justify-center p-2 transition-colors ${
            activeSection === 'projects-achievements' ? 'text-[#FF6B35]' : 'text-gray-400 hover:text-white'
          }`}
          aria-label="Projects"
        >
          <Zap size={24} />
        </button>

        {/* Contact */}
        <button
          onClick={() => scrollToSection('contact')}
          className={`flex items-center justify-center p-2 transition-colors ${
            activeSection === 'contact' ? 'text-[#FF6B35]' : 'text-gray-400 hover:text-white'
          }`}
          aria-label="Contact"
        >
          <Mail size={24} />
        </button>
      </div>
    </div>
  );
}
