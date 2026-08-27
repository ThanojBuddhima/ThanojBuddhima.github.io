import { motion } from 'motion/react';
import { Code2, MonitorSmartphone, Server, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code2 size={24} />,
    skills: ['TypeScript', 'JavaScript', 'Dart', 'Swift', 'Python', 'Java']
  },
  {
    title: 'Frontend & Mobile',
    icon: <MonitorSmartphone size={24} />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'SwiftUI', 'HTML/CSS']
  },
  {
    title: 'Backend & Database',
    icon: <Server size={24} />,
    skills: ['NestJS', 'Node.js', 'PostgreSQL', 'SQLite', 'Prisma', 'REST API']
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench size={24} />,
    skills: ['Git', 'Docker', 'Nginx', 'Vite', 'Figma', 'Linux']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-secondary/30 rounded-none border border-border hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/5 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-foreground group-hover:text-[#FF6B35] group-hover:border-[#FF6B35]/50 transition-colors mb-6 shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background text-muted-foreground text-sm font-medium border border-border/50 rounded-none group-hover:border-[#FF6B35]/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
