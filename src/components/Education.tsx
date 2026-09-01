import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details: string;
}

const educationData: EducationItem[] = [
  {
    id: 'uom',
    institution: 'University of Moratuwa',
    period: '2023 - 2027 (Expected)',
    degree: 'B.Sc. (Hons) in Information Technology',
    details: 'Faculty of Information Technology',
  },
  {
    id: 'school',
    institution: 'Richmond College, Galle',
    period: '2022',
    degree: 'G.C.E. Advanced Level — Physical Science',
    details: 'Physics (A), Chemistry (B), Combined Maths (A)',
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-16"
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            <span className="text-[#FF6B35]">&gt;</span> Education
          </h2>
        </motion.div>

        <div className="space-y-4">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 p-6 bg-card border border-border rounded-none hover:border-[#FF6B35]/50 transition-colors shadow-sm"
            >
              <div className="shrink-0 text-[#FF6B35] pt-0.5">
                <GraduationCap size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{item.institution}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{item.period}</span>
                </div>
                <h4 className="text-foreground/90 font-medium mb-1">{item.degree}</h4>
                <p className="text-muted-foreground text-sm">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
