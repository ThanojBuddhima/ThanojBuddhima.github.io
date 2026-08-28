import { motion } from 'motion/react';
import { BriefcaseBusiness } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  companyLink?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 'gmora',
    role: 'Co-Founder',
    company: 'Gmora',
    companyLink: 'https://gmora.dev',
    period: 'Feb 2026 - Present',
    location: 'Colombo, Western Province, Sri Lanka',
    description: 'Tech Co-founder | Engineering & IT collaborative building award-winning solutions and winners in competitive hackathons.',
  },

  {
    id: 'math-society',
    role: 'Member',
    company: 'Mathematics Society - University of Moratuwa',
    period: 'Jun 2023 - Oct 2024',
  },
  {
    id: 'sasnaka-sansada',
    role: 'Member',
    company: 'Sasnaka Sansada',
    companyLink: 'https://sasnaka.org/',
    period: '2022 - 2023',
    description: 'Volunteer teacher (Ganitha Saviya)',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-16"
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            <span className="text-[#FF6B35]">&gt;</span> Experience
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 p-6 bg-card border border-border rounded-none hover:border-[#FF6B35]/50 transition-colors shadow-sm"
            >
              <div className="shrink-0 text-[#FF6B35] pt-0.5">
                <BriefcaseBusiness size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{item.period}</span>
                </div>
                <h4 className="text-foreground/90 font-medium mb-1">
                  {item.companyLink ? (
                    <a href={item.companyLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35] transition-colors underline decoration-border underline-offset-4 hover:decoration-[#FF6B35]">
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </h4>
                {item.location && (
                  <p className="text-muted-foreground text-xs mb-2">{item.location}</p>
                )}
                {item.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
