import { motion } from 'motion/react';
import { Smartphone, Palette, Monitor, Layers } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Layers,
      title: 'UI/UX',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
    {
      icon: Smartphone,
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-32 px-4 sm:px-6 lg:px-8 bg-background md:min-h-screen md:flex md:items-center">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus 
            netus in. Aliquet donec morbi convallis pretium
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-[#FF6B35] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px -10px rgba(255, 107, 53, 0.2)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6B35] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-[#FF6B35] group-hover:text-white transition-colors" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-foreground text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
