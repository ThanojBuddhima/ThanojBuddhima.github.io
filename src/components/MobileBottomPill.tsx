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
      className="fixed pointer-events-auto" 
      style={{ 
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: 'calc(env(safe-area-inset-bottom, 16px) + 16px)', 
        width: 'calc(100% - 32px)',
        maxWidth: '380px',
        height: '66px',
        zIndex: 999999, 
        backgroundColor: 'rgba(20, 20, 20, 0.95)', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 8px'
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center justify-center h-full touch-manipulation transition-all duration-300"
            style={{ 
              color: isActive ? '#FFB03A' : 'rgba(255, 255, 255, 0.55)',
              flex: 1
            }}
            aria-label={item.label}
          >
            <div style={{
              transition: 'all 0.3s ease',
              transform: isActive ? 'scale(1.15)' : 'scale(1)',
            }}>
              <Icon strokeWidth={isActive ? 2.5 : 2} size={24} />
            </div>
          </button>
        );
      })}
    </div>
  );
}
