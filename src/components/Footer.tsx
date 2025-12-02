import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold">
            <span className="text-[#FF6B35]">thanoj</span>
            <span className="text-foreground">buddhima</span>
          </span>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.a
            href="mailto:thanoj@example.com"
            className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/thanoj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href="https://github.com/thanoj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={18} />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-colors border border-border"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={18} />
          </motion.a>
        </motion.div>

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