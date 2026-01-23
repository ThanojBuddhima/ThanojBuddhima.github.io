import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:thanojbuddhima2003@gmail.com?subject=Contact from ${formData.name}&body=From: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = mailtoUrl;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" style={{ padding: '80px 0 40px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--background)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        {/* Centered Header - Matches About perfectly */}
        <motion.div
          style={{ marginBottom: '40px', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '12px', color: 'var(--foreground)' }}>Get In Touch</h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-foreground font-medium">+94 772434353</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-foreground font-medium lowercase">thanojbuddhima2003@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-foreground font-medium">Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-8 lg:my-0">
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Github, href: "https://github.com/ThanojBuddhima" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/thanojbuddhima" },
                  { icon: Mail, href: "mailto:thanojbuddhima2003@gmail.com" },
                  { icon: Facebook, href: "https://www.facebook.com/share/1D5cha3Avy/" },
                  { icon: Instagram, href: "https://www.instagram.com/thanoj_b_20/" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-[#FF6B35] hover:text-white transition-all border border-border"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Mobile Spacer */}
            <div className="h-[80px] lg:hidden"></div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6B35] text-foreground transition-all placeholder:text-muted-foreground/60 text-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6B35] text-foreground transition-all placeholder:text-muted-foreground/60 text-sm"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6B35] text-foreground transition-all resize-none placeholder:text-muted-foreground/60 text-sm"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-[#FF6B35] text-white rounded-md font-medium flex items-center justify-center gap-2 transition-all"
                whileHover={{ scale: 1.05, backgroundColor: '#FF8C66' }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}