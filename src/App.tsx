import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsAndAchievements } from './components/ProjectsAndAchievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBottomPill } from './components/MobileBottomPill';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { isMobile } from 'react-device-detect';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setShowScrollTop(true);
      else setShowScrollTop(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode((s) => !s);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className={`relative w-full min-h-screen bg-background transition-colors duration-300 overflow-x-hidden ${isMobile ? 'pb-28' : ''}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isMobileDevice={isMobile} />
        <Hero isDarkMode={isDarkMode} />
        <About />
        <ProjectsAndAchievements />
        <Contact />
        <Footer />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className={`fixed right-8 z-50 w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center transition-colors ${isMobile ? 'bottom-32' : 'bottom-8'}`}
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C66' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Render the mobile pill completely outside the overflow-hidden wrapper so mobile Safari doesn't accidentally chop it off */}
      {isMobile && <MobileBottomPill />}
    </>
  );
}