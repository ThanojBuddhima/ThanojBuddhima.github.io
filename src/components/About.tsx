import { motion, AnimatePresence } from 'motion/react';

export function About() {
  const skills = [
    { name: 'Web Development', percentage: 90 },
    { name: 'App Development', percentage: 80 },
    { name: 'UI Design', percentage: 90 },
  ];

  return (
    <section id="about" className="min-h-screen py-12 md:py-32 bg-background flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl mb-4 text-center">About Me</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-center max-w-2xl mx-auto">
            Currently pursuing my degree at the Faculty of Information Technology, University of Moratuwa, I am a Software Developer dedicated to building efficient, scalable solutions. I love solving complex problems and am constantly learning new technologies to turn innovative ideas into reality.
          </p>

          {/* Skills Progress Bars */}
          <div className="space-y-6 mb-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground">{skill.name}</span>
                </div>
                <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#FF6B35] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CV Button - appears in About section */}
          <motion.button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Thanoj_Buddhima_CV.pdf';
              link.download = 'Thanoj_Buddhima_CV.pdf';
              link.click();
            }}
            className="px-8 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF7A50] transition-colors shadow-lg"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}