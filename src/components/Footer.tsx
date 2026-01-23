import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--background)', paddingTop: '32px', paddingBottom: '64px', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground">
            © {currentYear} <span className="text-[#FF6B35]">Thanoj Buddhima</span> All Rights Reserved, Inc.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}