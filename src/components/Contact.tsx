import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:thanojbuddhima2003@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoUrl;
    setFormData({ name: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Centered Header */}
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            <span className="text-[#FF6B35]">&gt;</span> Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl">
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
                <div className="flex items-center justify-center text-[#FF6B35]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-foreground font-medium">+94 772434353</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center text-[#FF6B35]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-foreground font-medium lowercase">thanojbuddhima2003@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center text-[#FF6B35]">
                  <MapPin size={24} />
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
                    className="text-foreground hover:text-[#FF6B35] transition-all p-2"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
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
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-[#FF6B35] text-foreground transition-all placeholder:text-muted-foreground/60 text-sm"
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
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-none focus:outline-none focus:ring-1 focus:ring-[#FF6B35] text-foreground transition-all resize-none placeholder:text-muted-foreground/60 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#FF6B35] text-white rounded-none font-medium flex items-center justify-center gap-2 hover:bg-[#e55a2b] transition-colors"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}