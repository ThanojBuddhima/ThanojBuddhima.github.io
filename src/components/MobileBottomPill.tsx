import { House, Zap, Settings } from 'lucide-react';
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

  useEffect(() => {
    const navItems = ['hero', 'about', 'projects-achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 

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
    <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-[999999] w-[320px] h-[70px]">
      {/* 
        The SVG Background matching the exact "U" shape cutout from the image. 
        It is purely black, no glassmorphism or borders.
      */}
      <div className="absolute inset-0 w-full h-full drop-shadow-2xl">
        <svg viewBox="0 0 320 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
          <path d="M20 70C8.95431 70 0 61.0457 0 50V35V20C0 8.95431 8.9543 0 20 0H31.7583C41.229 0 49.3304 6.5583 51.4883 15.8647C54.836 30.3013 67.893 41 83.5 41C99.107 41 112.164 30.3013 115.512 15.8647C117.67 6.5583 125.771 0 135.242 0H300C311.046 0 320 8.95431 320 20V50C320 61.0457 311.046 70 300 70H20Z" fill="#0A0A0A"/>
        </svg>
      </div>

      {/* Interactive Layer */}
      <div className="absolute inset-0 flex items-center justify-between w-full h-full pointer-events-none">
        
        {/* Floating Active Button hovering strictly inside the SVG "U" Cutout */}
        <div className="absolute left-[83px] top-[14px] -translate-x-1/2 -translate-y-[8px] pointer-events-auto">
          <button 
            type="button"
            onClick={() => scrollToSection('hero')}
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-colors touch-manipulation ${
              activeSection === 'hero' ? 'bg-[#1a1a1a] text-[#FFB03A]' : 'bg-[#1a1a1a] text-[#FFB03A]'
            }`}
            aria-label="Home"
          >
            <House fill="currentColor" strokeWidth={2.5} size={22} className={activeSection === 'hero' ? 'opacity-100' : 'opacity-80'} />
          </button>
        </div>

        {/* Right side items */}
        <div className="flex w-full pl-[135px] pr-8 justify-between items-center h-full pointer-events-auto mt-[4px]">
          
          <button
            type="button"
            onClick={() => scrollToSection('projects-achievements')}
            className={`flex items-center justify-center p-2 transition-colors touch-manipulation ${
              activeSection === 'projects-achievements' ? 'text-white' : 'text-white/80 hover:text-white'
            }`}
            aria-label="Projects"
          >
            {/* Using drop icon shape to match screenshot */}
            <Zap fill="currentColor" size={24} className={activeSection === 'projects-achievements' ? 'opacity-100' : 'opacity-80'} />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className={`flex items-center justify-center p-2 transition-colors touch-manipulation ${
              activeSection === 'about' ? 'text-white' : 'text-white/80 hover:text-white'
            }`}
            aria-label="Settings/About"
          >
            <Settings fill="currentColor" size={24} className={activeSection === 'about' ? 'opacity-100' : 'opacity-80'} />
          </button>
          
        </div>
      </div>
    </div>
  );
}
