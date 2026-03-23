import { useEffect, useState } from 'react';
import { House, UserRound, Trophy, Mail } from 'lucide-react';

export function BottomBar() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', id: 'hero', icon: House },
    { label: 'About', id: 'about', icon: UserRound },
    { label: 'Projects', id: 'projects-achievements', icon: Trophy },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
      <div
        className="mx-auto grid max-w-md grid-cols-4 px-3 py-3"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center gap-1 rounded-md py-2 text-xs transition-colors ${
                isActive ? 'text-[#FF6B35]' : 'text-foreground/70 hover:text-foreground'
              }`}
              aria-label={`Go to ${item.label}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}