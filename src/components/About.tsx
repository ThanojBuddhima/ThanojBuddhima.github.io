import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" style={{ padding: '80px 0 40px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--background)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '12px', textAlign: 'center', color: 'var(--foreground)' }}>About Me</h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', marginBottom: '32px', lineHeight: '1.6', textAlign: 'center', maxWidth: '800px', margin: '0 auto 32px auto' }}>
            I'm a Software Developer and an undergraduate at the Faculty of Information Technology, University of Moratuwa, passionate about creating efficient, scalable, and user-focused software solutions. I thrive on solving complex problems and continuously exploring new technologies to push my skills further.
          </p>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', marginBottom: '32px', lineHeight: '1.6', textAlign: 'center', maxWidth: '800px', margin: '0 auto 32px auto' }}>
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
              className="px-8 py-3 bg-[#FF6B35] text-white rounded-md transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, backgroundColor: '#FF8C66' }}
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