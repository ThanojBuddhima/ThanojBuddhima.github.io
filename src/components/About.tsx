import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImageLight from 'figma:asset/557d0c31e4caec9ddb601385d11b3d8387342704.png';

const profileImageDark = '/profile-dark.png';

export function About() {
  const isDarkMode = typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false;

  return (
    <section id="about" className="py-24 bg-background border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          
          {/* Left: Profile Image */}
          <motion.div 
            className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shrink-0 shadow-lg border-2 border-border/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={isDarkMode ? profileImageDark : profileImageLight}
              alt="Thanoj Buddhima"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="mb-6">
              <span className="text-[#0A66C2] text-xs font-bold tracking-widest uppercase mb-2 block">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">
                Nice to meet you
              </h2>
              <p className="text-muted-foreground font-medium">
                FIT Undergraduate @ University of Moratuwa
              </p>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I'm Thanoj Buddhima, an undergraduate at the Faculty of Information Technology, University of Moratuwa, passionate about creating efficient, scalable, and user-focused software solutions. I thrive on solving complex problems and continuously exploring new technologies to push my skills further.
              </p>
              <p>
                I've also won several hackathons and competitions, gaining hands-on experience in rapid problem-solving, teamwork, and real-world product development.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}