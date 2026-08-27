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
    icon: <Code2 size={20} />,
    skills: ['TypeScript', 'JavaScript', 'Dart', 'Swift', 'Python', 'Java']
  },
  {
    title: 'Frontend & Mobile',
    icon: <MonitorSmartphone size={20} />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'SwiftUI', 'HTML/CSS']
  },
  {
    title: 'Backend & Database',
    icon: <Server size={20} />,
    skills: ['NestJS', 'Node.js', 'PostgreSQL', 'SQLite', 'Prisma', 'REST API']
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench size={20} />,
    skills: ['Git', 'Docker', 'Nginx', 'Vite', 'Figma', 'Linux']
  }
];

const getBorderClasses = (index: number) => {
  if (index === 0) return 'border-b border-border md:border-r lg:border-b-0';
  if (index === 1) return 'border-b border-border lg:border-r lg:border-b-0';
  if (index === 2) return 'border-b border-border md:border-r md:border-b-0 lg:border-r';
  return '';
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="w-full px-6 md:px-12">
        
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
            <span className="text-[#FF6B35]">&gt;</span> Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-border">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-6 py-12 flex flex-col items-center text-center group bg-background hover:bg-secondary/20 transition-colors ${getBorderClasses(index)}`}
            >
              <div className="flex items-center justify-center gap-2 mb-6 text-foreground group-hover:text-[#FF6B35] transition-colors">
                {category.icon}
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/20 text-muted-foreground text-sm font-medium border border-border rounded-none group-hover:border-[#FF6B35]/30 transition-colors"
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
