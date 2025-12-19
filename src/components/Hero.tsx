import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import profileImageLight from 'figma:asset/557d0c31e4caec9ddb601385d11b3d8387342704.png';
import profileImageDark from '../assets/profile-dark.jpg';

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
  const imageRef = useRef<HTMLDivElement>(null);

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
    <section id="hero" className="min-h-screen pt-24 pb-12 md:pb-0 flex items-center bg-background relative overflow-hidden w-full">
      {/* Large Background Text - Visible on all screens */}
      <div className="absolute inset-0 flex items-end md:items-center justify-center pointer-events-none select-none overflow-hidden pb-32 md:pb-0">
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
            className="text-[12rem] sm:text-[15rem] md:text-[17rem] lg:text-[20rem] xl:text-[23rem]"
            style={{
              WebkitTextStroke: '2px rgba(255, 107, 53, 0.35)',
              color: 'transparent',
              lineHeight: 1.15,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              paddingRight: '4rem',
            }}
          >
            THANOJ BUDDHIMA
          </span>
          <span
            className="text-[12rem] sm:text-[15rem] md:text-[17rem] lg:text-[20rem] xl:text-[23rem]"
            style={{
              WebkitTextStroke: '2px rgba(255, 107, 53, 0.35)',
              color: 'transparent',
              lineHeight: 1.15,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              paddingRight: '4rem',
            }}
          >
            THANOJ BUDDHIMA
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8 box-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <p className="text-muted-foreground mb-1">Hi I am</p>
            <h2 className="text-[#FF6B35] text-4xl md:text-5xl mb-4">Thanoj Buddhima</h2>
            <div className="mb-4 md:mb-6 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] flex items-center w-full">
              <h1 className="text-foreground text-3xl sm:text-5xl md:text-6xl lg:text-7xl flex items-center break-words max-w-full">
                <span className="inline-block min-w-0 break-words">{displayedText}</span>
                <span className="inline-block w-1 h-6 sm:h-12 md:h-16 lg:h-20 bg-[#FF6B35] ml-1 animate-pulse flex-shrink-0"></span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg mb-4 md:mb-6 max-w-xl leading-relaxed">
              A software developer passionate about clean architecture and efficient systems. I build digital products that are as functional as they are beautiful.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF7A50] transition-all"
              whileHover={{ scale: 1.05 }}
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