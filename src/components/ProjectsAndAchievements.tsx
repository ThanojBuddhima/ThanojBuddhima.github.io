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
    shortDescription: "Zebra Technologies | Oct 2025\n\nSecured 1st place by developing 'Project Sentinel', a real-time fraud detection system for self-checkouts. Engineered to process 7 concurrent data streams (Computer Vision, RFID, POS) to identify theft and discrepancies with sub-100ms latency.",
    githubUrl: '',
    images: ['/achievements/innovatex.jpg'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'octwave-champions',
    name: 'Champions - OctWave 2.0',
    shortDescription: "IEEE Student Branch, University of Moratuwa | Oct 2025\n\nAchieved 1st place in this Kaggle-based ML competition with a winning score of 0.58661. Designed a novel 6-channel ResNet50 architecture to jointly encode image pairs, outperforming standard baselines in predicting object alterations.",
    githubUrl: '',
    images: ['/achievements/octwave.jpg'],
    type: 'achievement',
    teamName: 'MetaMind',
  },
  {
    id: 'bitcode-champions',
    name: 'Champions - BitCode v6.0',
    shortDescription: "Rajarata University of Sri Lanka | May 2026\n\nEmerged as Champions in this competitive hackathon, demonstrating exceptional problem-solving and software development skills under tight deadlines.",
    githubUrl: '',
    images: ['/achievements/bitcode.jpg'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'hackelite-runner-up',
    name: '1st Runner-up - HackElite 2.0',
    shortDescription: "IEEE WIE Student Branch, University of Moratuwa | Sep 2025\n\nDeveloped a high-impact web platform designed to guide O/L students toward alternative educational paths and vocational training, empowering them to discover new routes to success.",
    githubUrl: 'https://github.com/KusalPabasara/hacklite',
    images: ['/achievements/hackelite.jpg'],
    type: 'achievement',
    teamName: 'MetaMind',
  },
  {
    id: 'algoarena-runners-up',
    name: '2nd Runner-up - AlgoArena',
    shortDescription: "Leo Club, University of Sri Jayewardenepura | Jan 2026\n\nSecured 3rd place by developing 'Leo Connect', a comprehensive full-stack mobile application providing end-to-end event management, member coordination, and activity tracking.",
    githubUrl: '',
    images: ['/achievements/algoarena.jpg'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'biofusion',
    name: '5th Place - BioFusion 2025',
    shortDescription: "IEEE EMBS Student Branch, University of Sri Jayewardenepura | Jan 2026\n\nAchieved 5th place in a specialized bio-engineering and technology competition, competing against top university teams.",
    githubUrl: '',
    images: ['/achievements/biofusion.jpg'],
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
