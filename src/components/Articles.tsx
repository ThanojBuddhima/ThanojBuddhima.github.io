import { motion } from 'motion/react';
import { Newspaper, ExternalLink } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  platform: string;
  date?: string;
  link: string;
  description?: string;
}

const articlesData: Article[] = [
  {
    id: 'human-vs-ml',
    title: "Human Learning vs. Machine Learning: What's the Difference?",
    platform: 'Medium',
    link: 'https://medium.com/@thanojbuddhima2003/human-learning-vs-machine-learning-whats-the-difference-546d141478dc',
    description: 'An exploration of the fundamental differences and similarities between how humans acquire knowledge and how machine learning algorithms are trained.',
  }
];

export function Articles() {
  return (
    <section id="articles" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Publications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Articles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articlesData.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card border border-border rounded-none hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/5 transition-all duration-300 flex flex-col h-full block"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                  <Newspaper size={24} />
                </div>
                <div className="flex-1 min-w-0 pr-8 relative">
                  <h3 className="text-lg font-bold text-foreground leading-snug mb-1 group-hover:text-[#FF6B35] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#FF6B35] font-medium text-sm">{article.platform}</p>
                  
                  <div className="absolute top-0 right-0 text-muted-foreground group-hover:text-[#FF6B35] transition-colors p-1">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              
              {article.description && (
                <p className="text-muted-foreground text-sm leading-relaxed mt-2 line-clamp-3">
                  {article.description}
                </p>
              )}
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
