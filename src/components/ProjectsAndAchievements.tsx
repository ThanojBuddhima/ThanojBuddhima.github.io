import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

export interface ProjectItem {
  id: string;
  name: string;
  shortDescription: string;
  githubUrl: string;
  images: string[];
  type: 'project' | 'achievement';
  teamName?: string;
}

const initialItems: ProjectItem[] = [
  {
    id: 'innovatex-champions',
    name: 'Champions - InnovateX',
    shortDescription: 'Won 1st place in the hackathon organized by Zebra Technologies. Developed an innovative ML solution addressing real-world challenges.',
    githubUrl: 'https://github.com/ThanojBuddhima/ThanojBuddhima.github.io',
    images: ['/achievements/innovatex-champions.jpg'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'octwave-champions',
    name: 'Champions - OctWave 2.0',
    shortDescription: 'Secured 1st place by developing a high-performing machine learning solution that outperformed standard baseline models in a Kaggle-based competition.',
    githubUrl: 'https://github.com/ThanojBuddhima/ThanojBuddhima.github.io',
    images: ['/achievements/octwave-champions.jpg'],
    type: 'achievement',
    teamName: 'MetaMind',
  },
  {
    id: 'marga-lk-runners-up',
    name: 'First Runners-up - Hackelite 2.0',
    shortDescription: 'Developed Marga.lk, a comprehensive transportation web application for IEEE WIE University of Moratuwa.',
    githubUrl: 'https://github.com/ThanojBuddhima/ThanojBuddhima.github.io',
    images: ['/achievements/marga-lk-runners-up.jpg'],
    type: 'achievement',
    teamName: 'MetaMind',
  },
];

export function ProjectsAndAchievements() {
  const [items] = useState<ProjectItem[]>(initialItems);

  return (
    <section id="projects-achievements" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Projects & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of hackathon wins, projects, and competitions I've participated in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                {item.images.length > 0 && (
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-md rounded-full text-xs font-semibold text-foreground">
                  {item.type === 'project' ? 'Project' : 'Achievement'}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#FF6B35]">
                    {item.teamName && `Team ${item.teamName}`}
                  </span>
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
