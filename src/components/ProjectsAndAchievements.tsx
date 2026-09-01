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
    id: 'ai-challenge-champions',
    name: 'Champions - AI Challenge Sri Lanka',
    shortDescription: "IEEE Young Professionals Sri Lanka | Aug 2026",
    githubUrl: 'https://github.com/ThanojBuddhima/SuwaPath',
    images: ['/achievements/aichallenge.webp'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'innovatex-champions',
    name: 'Champions - InnovateX',
    shortDescription: "Zebra Technologies | Oct 2025",
    githubUrl: '',
    images: ['/achievements/innovatex.webp'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'octwave-champions',
    name: 'Champions - OctWave 2.0',
    shortDescription: "IEEE Student Branch, University of Moratuwa | Oct 2025",
    githubUrl: '',
    images: ['/achievements/octwave.webp'],
    type: 'achievement',
    teamName: 'MetaMind',
  },
  {
    id: 'bitcode-champions',
    name: 'Champions - BitCode v6.0',
    shortDescription: "Rajarata University of Sri Lanka | May 2026",
    githubUrl: '',
    images: ['/achievements/bitcode.webp'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'hackelite-runner-up',
    name: '1st Runner-up - HackElite 2.0',
    shortDescription: "IEEE WIE Student Branch, University of Moratuwa | Sep 2025",
    githubUrl: 'https://github.com/ThanojBuddhima/hacklite.git',
    images: ['/achievements/hackelite.webp'],
    type: 'achievement',
    teamName: 'MetaMind',
  },
  {
    id: 'algoarena-runners-up',
    name: '2nd Runner-up - AlgoArena',
    shortDescription: "Leo Club, University of Sri Jayewardenepura | Jan 2026",
    githubUrl: '',
    images: ['/achievements/algoarena.webp'],
    type: 'achievement',
    teamName: 'Gmora',
  }
];

export function ProjectsAndAchievements() {
  const [items] = useState<ProjectItem[]>(initialItems);

  return (
    <section id="projects-achievements" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            <span className="text-[#FF6B35]">&gt;</span> Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl">
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
              className="group flex flex-col bg-card rounded-none border border-border overflow-hidden hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/5 transition-all duration-300"
            >
              {/* Image Container */}
              {item.images.length > 0 && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#FF6B35]">
                    {item.teamName && `Team ${item.teamName}`}
                  </span>
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors mt-2"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#FF6B35] transition-colors pr-24">
                  {item.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 whitespace-pre-wrap">
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
