import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled recipient and message
    window.location.href = `mailto:thanojbuddhima2003@gmail.com?subject=Contact from Portfolio&body=Hi Thanoj,%0D%0A%0D%0AMessage: ${message}%0D%0A%0D%0AFrom: ${email}`;
    setEmail('');
    setMessage('');
  };

  const socials = [
    { icon: Mail, href: 'mailto:thanojbuddhima2003@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/thanojbuddhima', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ThanojBuddhima', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1D5cha3Avy/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/thanoj_b_20/', label: 'Instagram' },
  ];

  return (
    <section id="contact" style={{ scrollMarginTop: '80px' }} className="min-h-screen py-12 md:py-32 bg-background flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl text-center">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground text-center mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out to me!
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="px-6 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-foreground transition-all"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              rows={5}
              className="px-6 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-foreground transition-all resize-none"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF7A50] transition-all font-semibold shadow-lg shadow-[#FF6B35]/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full text-foreground hover:bg-[#FF6B35] hover:text-white transition-all border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}