import { House, Flame, Settings } from 'lucide-react';
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
    <div 
      className="fixed flex justify-center left-0 right-0 pointer-events-none" 
      style={{ bottom: '1.5rem', zIndex: 999999 }}
    >
      <div className="relative" style={{ width: '320px', height: '70px' }}>
        {/* SVG Background */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.5))' }}
        >
          <svg viewBox="0 0 320 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.05))' }}>
            <path d="M20 70C8.95431 70 0 61.0457 0 50V35V20C0 8.95431 8.9543 0 20 0H31.7583C41.229 0 49.3304 6.5583 51.4883 15.8647C54.836 30.3013 67.893 41 83.5 41C99.107 41 112.164 30.3013 115.512 15.8647C117.67 6.5583 125.771 0 135.242 0H300C311.046 0 320 8.95431 320 20V50C320 61.0457 311.046 70 300 70H20Z" fill="#000000" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          </svg>
        </div>

        {/* Interactive Layer */}
        <div className="absolute inset-0 flex items-center justify-between w-full h-full pointer-events-none">
          
          {/* Floating Active Button */}
          <div 
            className="absolute pointer-events-auto" 
            style={{ left: '83px', top: '14px', transform: 'translateX(-50%) translateY(-8px)' }}
          >
            <button 
              type="button"
              onClick={() => scrollToSection('hero')}
              className="rounded-full flex items-center justify-center transition-colors touch-manipulation"
              style={{ 
                width: '48px', height: '48px',
                backgroundColor: activeSection === 'hero' ? '#000000' : 'transparent',
                color: activeSection === 'hero' ? '#FFB03A' : 'rgba(255,255,255,0.8)'
              }}
              aria-label="Home"
            >
              <House fill="currentColor" strokeWidth={2} size={22} style={{ opacity: activeSection === 'hero' ? 1 : 0.8 }} />
            </button>
          </div>

        {/* Right side items */}
        <div 
          className="flex w-full justify-between items-center h-full pointer-events-auto" 
          style={{ paddingLeft: '135px', paddingRight: '2rem', marginTop: '4px' }}
        >
          
          <button
            type="button"
            onClick={() => scrollToSection('projects-achievements')}
            className="flex items-center justify-center p-2 transition-colors touch-manipulation hover:text-white"
            style={{ color: activeSection === 'projects-achievements' ? 'white' : 'rgba(255,255,255,0.8)' }}
            aria-label="Projects"
          >
            <Flame fill="currentColor" size={24} style={{ opacity: activeSection === 'projects-achievements' ? 1 : 0.8 }} />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="flex items-center justify-center p-2 transition-colors touch-manipulation hover:text-white"
            style={{ color: activeSection === 'about' ? 'white' : 'rgba(255,255,255,0.8)' }}
            aria-label="Settings/About"
          >
            <Settings fill="currentColor" size={24} style={{ opacity: activeSection === 'about' ? 1 : 0.8 }} />
          </button>
          
        </div>
      </div>
    </div>
    </div>
  );
}
