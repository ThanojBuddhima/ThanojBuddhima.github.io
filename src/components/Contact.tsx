import { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled recipient
    window.location.href = `mailto:thanojbuddhima2003@gmail.com?subject=Contact from Portfolio&body=Hi Thanoj,%0D%0A%0D%0AMy email is: ${email}%0D%0A%0D%0A`;
    setEmail('');
  };

  return (
    <section id="contact" className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl text-center">Let's Build Something Amazing</h2>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            className="flex-1 px-6 py-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-foreground"
            whileFocus={{ scale: 1.01 }}
          />
          <motion.button
            type="submit"
            className="px-8 py-4 bg-[#FF6B35] text-white rounded-lg transition-all font-semibold whitespace-nowrap"
            whileHover={{ scale: 1.05, backgroundColor: '#FF8C66' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}