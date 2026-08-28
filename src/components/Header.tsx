import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileDevice?: boolean;
}

export function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Articles', id: 'articles' },
    { label: 'Achievements', id: 'projects-achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Thanoj_Buddhima_CV.pdf';
    link.download = 'Thanoj_Buddhima_CV.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-300">
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="font-bold text-2xl tracking-tight text-foreground">thanoj</span>
          <span className="font-bold text-2xl tracking-tight bg-[#FF6B35] text-background px-1">Buddhima</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8 ml-auto mr-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors pb-1 ${
                activeSection === link.id
                  ? 'text-foreground border-b-2 border-[#FF6B35]'
                  : 'text-foreground/80 hover:text-[#FF6B35] border-b-2 border-transparent'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 text-foreground transition-colors hover:text-[#FF6B35]"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          


          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 items-end">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => scrollToSection(link.id), 100);
                  }}
                  className={`text-right font-medium text-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-[#FF6B35]'
                      : 'text-foreground hover:text-[#FF6B35]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}