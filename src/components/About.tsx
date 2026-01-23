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


          {/* Skills Section */}
          <div className="mt-12 mb-12">
            <h3 className="text-foreground text-2xl mb-6 text-center">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                'React', 'TypeScript', 'Node.js', 'Vite', 'Tailwind CSS', 
                'Framer Motion', 'UI & UX Design', 'Figma', 'Problem Solving',
                'SQL', 'Git', 'Software Development'
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35' }}
                  className="px-4 py-2 bg-secondary border border-border text-muted-foreground rounded-full text-sm font-medium transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Download CV Button - centered */}
          <div className="flex justify-center">
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