import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" style={{ scrollMarginTop: '80px' }} className="min-h-screen py-12 md:py-32 bg-background flex items-center overflow-hidden">
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
            I'm a Software Developer and an undergraduate at the Faculty of Information Technology, University of Moratuwa, passionate about creating efficient, scalable, and user-focused software solutions. I thrive on solving complex problems and continuously exploring new technologies to push my skills further.
          </p>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-center max-w-2xl mx-auto">
            I've also won several hackathons and competitions, gaining hands-on experience in rapid problem-solving, teamwork, and real-world product development.
          </p>

          {/* Download CV Button - centered */}
          <div className="flex justify-center mt-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}