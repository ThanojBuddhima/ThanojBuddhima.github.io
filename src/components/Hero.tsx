import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import profileImageLight from 'figma:asset/557d0c31e4caec9ddb601385d11b3d8387342704.png';

const profileImageDark = '/profile-dark.png';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  const roles = ['UI & UX Designer', 'Web Developer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < role.length) {
          setDisplayedText(role.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden w-full px-4 sm:px-6 lg:px-8 pt-20">
      {/* Large Background Text - Only rendered on large screens and above */}
      {windowWidth >= 1024 && (
        <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            <span
              className="text-[40vw] md:text-[17rem] lg:text-[20rem] xl:text-[23rem]"
              style={{
                WebkitTextStroke: '2px rgba(255, 107, 53, 0.25)', // Increased thickness for better visibility
                color: 'transparent',
                lineHeight: 0.9,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                paddingRight: '6rem',
              }}
            >
              THANOJ BUDDHIMA
            </span>
            <span
              className="text-[40vw] md:text-[17rem] lg:text-[20rem] xl:text-[23rem]"
              style={{
                WebkitTextStroke: '2px rgba(255, 107, 53, 0.25)', // Synchronized thickness
                color: 'transparent',
                lineHeight: 0.9,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                paddingRight: '6rem',
              }}
            >
              THANOJ BUDDHIMA
            </span>
          </motion.div>
        </div>
      )}

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', marginBottom: '4px' }}>Hi I am</p>
            <h2 style={{ color: '#FF6B35', fontSize: '2rem', fontWeight: 'bold', marginBottom: '12px' }}>Thanoj Buddhima</h2>
            <div className="mb-4 md:mb-6 h-[80px] sm:h-[100px] md:h-[130px] lg:h-[160px] flex items-center w-full overflow-hidden">
              <h1 className="text-foreground text-2xl sm:text-5xl md:text-6xl lg:text-6xl flex items-center break-words max-w-full leading-tight">
                <span className="inline-block min-w-0 break-words">{displayedText || '\u00A0'}</span>
                <span className="inline-block w-[3px] bg-[#FF6B35] ml-2 animate-pulse flex-shrink-0" style={{ height: '0.8em' }}></span>
              </h1>
            </div>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', marginBottom: '24px', maxWidth: '500px', lineHeight: '1.6' }}>
              A software developer passionate about clean architecture and efficient systems. I build digital products that are as functional as they are beautiful.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#FF6B35] text-white rounded-md transition-all"
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C66' }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Right Side - Profile Image & Social */}
          <motion.div
            className="flex flex-col items-center order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Image with 3D effect */}
            <div className="relative mb-4 md:mb-6 w-64 h-64 md:w-80 md:h-80">
              <motion.div 
                ref={imageRef}
                className="w-full h-full rounded-full overflow-hidden border-4 border-border bg-card cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                animate={imageLoaded ? {
                  rotateY: mousePosition.x * 15,
                  rotateX: -mousePosition.y * 15,
                } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 15,
                }}
              >
                <ImageWithFallback
                  src={isDarkMode ? profileImageDark : profileImageLight}
                  alt="Thanoj Buddhima"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <motion.a
                href="mailto:thanojbuddhima2003@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thanojbuddhima"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/ThanojBuddhima"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1D5cha3Avy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/thanoj_b_20/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}