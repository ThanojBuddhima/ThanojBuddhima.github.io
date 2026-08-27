import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImageLight from 'figma:asset/557d0c31e4caec9ddb601385d11b3d8387342704.png';

const profileImageDark = '/profile-dark.png';

export function About() {
  const isDarkMode = typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false;

  const skills = [
    { name: 'UX', value: 85 },
    { name: 'Website Design', value: 90 },
    { name: 'App Design', value: 80 },
    { name: 'Graphic Design', value: 75 },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Profile Image with Blobs */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Abstract Background Blob (Orange) */}
            <div 
              className="absolute inset-0 bg-[#FF6B35]/80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] scale-110"
              style={{
                boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.1), -10px 10px 20px rgba(255,107,53,0.3)',
              }}
            />
            {/* Secondary subtle blob */}
            <div 
              className="absolute -inset-4 bg-[#FF6B35]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] scale-105"
            />
            
            {/* Profile Image */}
            <div className="absolute inset-2 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-background">
              <ImageWithFallback
                src={isDarkMode ? profileImageDark : profileImageLight}
                alt="Thanoj Buddhima"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Content & Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            <span className="text-[#FF6B35]">&gt;</span> About Me
          </h2>
          
          <div className="text-muted-foreground leading-relaxed mb-10 text-sm md:text-base">
            <p className="mb-4">
              I'm Thanoj Buddhima, an undergraduate at the Faculty of Information Technology, University of Moratuwa, passionate about creating efficient, scalable, and user-focused software solutions. I thrive on solving complex problems and continuously exploring new technologies to push my skills further.
            </p>
            <p>
              I've also won several hackathons and competitions, gaining hands-on experience in rapid problem-solving, teamwork, and real-world product development.
            </p>
          </div>

          {/* Skill Sliders */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-foreground">{skill.name}</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-[#FF6B35] rounded-full relative"
                  >
                    {/* The circle at the end of the progress bar */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-[#FF6B35] rounded-full translate-x-1/2" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}