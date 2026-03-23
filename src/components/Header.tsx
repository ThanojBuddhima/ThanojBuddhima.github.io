import { Menu, X, Moon, Sun, Home, User, Flame, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileDevice?: boolean;
}

export function Header({ isDarkMode, toggleDarkMode, isMobileDevice = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close menu first
      setMobileMenuOpen(false);
      // Small delay before scrolling to ensure menu closes smoothly
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero', icon: Home },
    { label: 'About Me', id: 'about', icon: User },
    { label: 'Projects & Achievements', id: 'projects-achievements', icon: Flame },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

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

  const islandClass = "pointer-events-auto bg-background/70 backdrop-blur-xl border border-border/50 rounded-full shadow-sm flex items-center h-14";

  return (
    <motion.header 
      className="fixed left-0 right-0 z-50 pointer-events-none transition-all duration-300 top-4 lg:top-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }} className="relative">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.div 
            className={`cursor-pointer ${islandClass}`}
            style={{ padding: '0 24px', gap: '8px', pointerEvents: 'auto' }}
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold">
              <span className="text-[#FF6B35]">thanoj</span>
              <span className="text-foreground">buddhima</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div 
            className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 ${islandClass}`}
            style={{ padding: '0 32px', gap: '32px', pointerEvents: 'auto' }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative pb-2 transition-colors ${
                  activeSection === item.id 
                    ? 'text-[#FF6B35]' 
                    : 'text-foreground hover:text-[#FF6B35]'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.span
                  animate={{ y: hoveredItem === item.id ? -2 : 0 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  className="inline-block"
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B35] origin-center"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.button>
            ))}
          </div>

          {/* Download CV & Theme Toggle */}
          <div 
            className={`${islandClass} justify-center`}
            style={{ padding: '0 10px', gap: '8px', pointerEvents: 'auto' }}
          >
            {/* Download CV Button */}
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Thanoj_Buddhima_CV.pdf';
                link.download = 'Thanoj_Buddhima_CV.pdf';
                link.click();
              }}
              className="hidden md:block px-6 py-2 bg-[#FF6B35] text-white rounded-full transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C66' }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>

            <motion.button
              onClick={toggleDarkMode}
              className="p-2 transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
              initial={{ color: isDarkMode ? '#A1A1AA' : '#52525B' }}
              animate={{ color: isDarkMode ? '#A1A1AA' : '#52525B' }}
              whileHover={{ scale: 1.1, color: '#FF6B35' }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
            </motion.button>

            {!isMobileDevice && (
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 transition-colors flex items-center justify-center"
                aria-label="Toggle menu"
                initial={{ color: isDarkMode ? '#A1A1AA' : '#52525B' }}
                animate={{ color: isDarkMode ? '#A1A1AA' : '#52525B' }}
                whileHover={{ scale: 1.1, color: '#FF6B35' }}
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
              </motion.button>
            )}
          </div>
        </div>

        {/* Floating Right-Side Navigation Islands */}
        <AnimatePresence>
          {mobileMenuOpen && !isMobileDevice && (
            <motion.div 
              className="lg:hidden absolute top-[72px] right-0 flex flex-col gap-3 items-end pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`${islandClass} px-5 transition-colors group`}
                    style={{ pointerEvents: 'auto', gap: '12px' }}
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon 
                      size={20} 
                      className={`transition-colors ${isActive ? 'text-[#FF6B35]' : 'text-muted-foreground group-hover:text-[#FF6B35]'}`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span 
                      className={`font-medium transition-colors ${isActive ? 'text-[#FF6B35]' : 'text-foreground group-hover:text-[#FF6B35]'}`}
                      style={{ fontSize: '15px' }}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}