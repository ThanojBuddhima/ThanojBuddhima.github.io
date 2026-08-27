import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link: string;
}

const certificationsData: Certification[] = [
  {
    id: 'intro-dl',
    name: 'Intro to Deep Learning',
    issuer: 'Kaggle',
    date: 'Apr 2026',
    link: 'https://www.kaggle.com/learn/certification/thanojbuddhima/intro-to-deep-learning',
  },
  {
    id: 'ai-fluency',
    name: 'Certificate of completion: AI Fluency for educators',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'cjzmcggamfh3',
    link: 'https://verify.skilljar.com/c/cjzmcggamfh3',
  },
  {
    id: 'supervised-ml',
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    date: 'Mar 2026',
    credentialId: '4DIEAHDWUCWR',
    link: 'https://www.coursera.org/account/accomplishments/verify/4DIEAHDWUCWR',
  },
  {
    id: 'pandas',
    name: 'Pandas',
    issuer: 'Kaggle',
    date: 'Mar 2026',
    link: 'https://www.kaggle.com/learn/certification/thanojbuddhima/pandas',
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Licenses & Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card border border-border rounded-none hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                  <Award size={24} />
                </div>
                <div className="flex-1 min-w-0 pr-8 relative">
                  <h3 className="text-lg font-bold text-foreground leading-snug mb-1 group-hover:text-[#FF6B35] transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-foreground/90 font-medium text-sm">{cert.issuer}</p>
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-0 right-0 text-muted-foreground hover:text-[#FF6B35] transition-colors p-1"
                    title="View Credential"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <p>Issued {cert.date}</p>
                {cert.credentialId && (
                  <p>Credential ID {cert.credentialId}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
