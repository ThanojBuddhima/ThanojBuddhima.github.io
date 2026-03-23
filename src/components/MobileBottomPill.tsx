import { House, User, Flame, Mail } from 'lucide-react';
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
    const sectionIds = ['hero', 'about', 'projects-achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', icon: House, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects-achievements', icon: Flame, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div 
      className="fixed left-0 right-0 pointer-events-auto shadow-lg" 
      style={{ 
        bottom: 0, 
        zIndex: 999999, 
        backgroundColor: 'rgba(10, 10, 10, 0.95)', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div 
        className="flex justify-around items-center w-full" 
        style={{ 
          height: '70px', 
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingTop: '4px'
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center justify-center h-full w-full touch-manipulation transition-colors"
              style={{ color: isActive ? '#FFB03A' : 'rgba(255, 255, 255, 0.6)' }}
            >
              <Icon size={24} style={{ marginBottom: '4px', opacity: isActive ? 1 : 0.8 }} />
              <span style={{ fontSize: '0.65rem', fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
