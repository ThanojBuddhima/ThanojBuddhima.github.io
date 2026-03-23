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
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-[60] lg:hidden">
      <div
        className="flex items-center justify-center bg-background/90 backdrop-blur-lg border border-border/60 shadow-xl rounded-full px-3 py-2 max-w-md mx-auto"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors focus:outline-none ${
                  isActive
                    ? 'text-[#FF6B35] bg-background/5 shadow-sm'
                    : 'text-foreground/70 hover:text-foreground hover:bg-background/5'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                <Icon size={18} />
                <span className="text-[11px] mt-1">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
