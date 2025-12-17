import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trophy, Medal, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import finalistsImage from 'figma:asset/cfed03bcc0c5512b2b4fae97ddc656f2158e9cd2.png';
import runnersUpImage from 'figma:asset/96d693252c70e169c0dde979b13a840edb98b748.png';
import championsImage from 'figma:asset/60f3f527837a45639288596f051f691e3b839f6c.png';

export function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const achievements = [
    {
      title: 'Champions - InnovateX',
      description: 'An intense 6-hour Machine Learning challenge hosted by Zebra Technologies. As Team Gmora, we combined innovation and determination to turn complex ideas into impactful solutions.',
      year: '2025',
      image: championsImage,
      icon: Award,
    },
    {
      title: 'Finalists - UoJCoders - v4.0',
      description: 'Competed as Team \'DualDudes\' alongside Kusal Pabasara at UOJ Coders v4.0, organized by the University of Jaffna.',
      year: '2025',
      image: finalistsImage,
      icon: Trophy,
    },
    {
      title: '1st Runner\'s Up - Hackelite 2.0',
      description: 'Organized by the IEEE WIE Student Branch of the University of Moratuwa. Our team, MetaMind, transformed a raw idea into a polished solution through intense collaboration.',
      year: '2025',
      image: runnersUpImage,
      icon: Medal,
    },
  ];

  // Auto-rotate cards
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, achievements.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + achievements.length) % achievements.length;
    
    if (diff === 0) {
      // Active card - front and center
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
      };
    } else if (diff === 1 || (diff === achievements.length - 1 && direction === -1)) {
      // Next card - slightly behind, to the right
      return {
        x: 40,
        y: 20,
        rotate: 8,
        scale: 0.9,
        opacity: 0.6,
        zIndex: 20,
      };
    } else if (diff === achievements.length - 1 || (diff === 1 && direction === 1)) {
      // Previous card - slightly behind, to the left
      return {
        x: -40,
        y: 20,
        rotate: -8,
        scale: 0.9,
        opacity: 0.6,
        zIndex: 10,
      };
    } else {
      // Hidden cards
      return {
        x: direction > 0 ? 100 : -100,
        y: 40,
        rotate: direction > 0 ? 15 : -15,
        scale: 0.8,
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <section id="achievements" className="min-h-screen py-12 md:py-0 bg-background flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Section Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl text-center">Achievements</h2>
        </motion.div>

        {/* Shuffling Cards Display */}
        <div 
          className="relative min-h-[500px] md:min-h-[440px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 md:left-8 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 md:right-8 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Cards Stack with Shuffle Effect */}
          <div className="relative w-full max-w-2xl mx-auto h-[460px] md:h-[500px]">
            <AnimatePresence initial={false} mode="popLayout">
              {achievements.map((achievement, index) => {
                const style = getCardStyle(index);
                const isActive = (index === currentIndex);
                const IconComponent = achievement.icon;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    initial={{
                      x: direction > 0 ? 200 : -200,
                      y: '-50%',
                      rotate: direction > 0 ? 25 : -25,
                      scale: 0.7,
                      opacity: 0,
                    }}
                    animate={{
                      x: `calc(-50% + ${style.x}px)`,
                      y: `calc(-50% + ${style.y}px)`,
                      rotate: style.rotate,
                      scale: style.scale,
                      opacity: style.opacity,
                    }}
                    exit={{
                      x: direction > 0 ? -200 : 200,
                      y: '-50%',
                      rotate: direction > 0 ? -25 : 25,
                      scale: 0.7,
                      opacity: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      mass: 0.5,
                    }}
                    style={{
                      zIndex: style.zIndex,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <motion.div
                      className="w-full"
                      whileHover={isActive ? { scale: 1.05, rotate: 0 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FF6B35] bg-card h-[380px] md:h-[430px] flex flex-col w-[360px] md:w-[480px]"
                        style={{
                          boxShadow: isActive 
                            ? '0 25px 50px -12px rgba(255, 107, 53, 0.25), 0 0 0 1px rgba(255, 107, 53, 0.1)'
                            : '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        {/* Image Section */}
                        <div className="relative h-[240px] md:h-[280px] overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover"
                          />

                          {/* Icon Badge */}
                          <motion.div
                            className="absolute bottom-4 right-4 w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-[#FF6B35]"
                            whileHover={isActive ? { scale: 1.2, rotate: 360 } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent className="text-white" size={28} />
                          </motion.div>
                        </div>

                        {/* Content Section */}
                        <div className="p-5 md:p-6 bg-card flex-1 flex flex-col">
                          <div className="flex items-center justify-between">
                            <h3 className="text-foreground text-base md:text-lg">
                              {achievement.title}
                            </h3>
                            <span className="text-muted-foreground text-xs md:text-sm px-3 py-1 bg-muted/50 rounded-full">
                              {achievement.year}
                            </span>
                          </div>

                          <div className="flex justify-end mt-4">
                            <motion.button
                              onClick={() => setSelectedAchievement(index)}
                              className="px-6 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF6B35]/90 transition-colors w-full"
                              whileHover={isActive ? { scale: 1.05 } : {}}
                              whileTap={isActive ? { scale: 0.95 } : {}}
                            >
                              See More
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-4">
          {achievements.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[#FF6B35] w-10 h-3'
                  : 'bg-muted-foreground/30 w-3 h-3 hover:bg-muted-foreground/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>

      {/* Modal for Achievement Details */}
      {selectedAchievement !== null && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedAchievement(null)}
        >
          <motion.div
            className="bg-card rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FF6B35] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <ImageWithFallback
                src={achievements[selectedAchievement].image}
                alt={achievements[selectedAchievement].title}
                className="w-full h-full object-cover"
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>

              {/* Icon Badge */}
              <motion.div
                className="absolute bottom-4 right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-[#FF6B35]"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {(() => {
                  const IconComponent = achievements[selectedAchievement].icon;
                  return <IconComponent className="text-white" size={32} />;
                })()}
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-foreground text-3xl">
                  {achievements[selectedAchievement].title}
                </h2>
                <span className="text-muted-foreground px-4 py-2 bg-muted/50 rounded-full">
                  {achievements[selectedAchievement].year}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {achievements[selectedAchievement].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}