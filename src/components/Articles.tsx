import { motion } from 'motion/react';
import { Newspaper, ExternalLink } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  platform: string;
  date?: string;
  link: string;
  description?: string;
  image?: string;
}

const articlesData: Article[] = [
  {
    id: 'human-vs-ml',
    title: "Human Learning vs. Machine Learning: What's the Difference?",
    platform: 'Medium',
    link: 'https://medium.com/@thanojbuddhima2003/human-learning-vs-machine-learning-whats-the-difference-546d141478dc',
    description: 'An exploration of the fundamental differences and similarities between how humans acquire knowledge and how machine learning algorithms are trained.',
    image: '/articles/human_learning_vs_machine_learning.avif',
  }
];

export function Articles() {
  return (
    <section id="articles" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-16"
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Publications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            <span className="text-[#FF6B35]">&gt;</span> Articles
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
              className="group bg-card border border-border rounded-none hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/5 transition-all duration-300 flex flex-col h-full block overflow-hidden"
            >
              {article.image && (
                <div className="w-full aspect-video border-b border-border/50 overflow-hidden bg-muted">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 text-[#FF6B35] transition-colors pt-0.5">
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
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
