import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Download } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  shortDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string;
  downloadUrl?: string;
  downloadLabel?: string;
}

const projects: Project[] = [
  {
    id: 'expense-manager',
    name: 'Smart Offline Expense Manager',
    shortDescription: 'A cross-platform personal finance application built with Flutter for tracking income and expenses, managing budgets, organizing accounts and categories, and visualizing spending through analytics. The app uses an offline-first approach with local data storage and supports optional PIN and biometric authentication.',
    techStack: ['Flutter', 'Dart', 'SQLite (sqflite)', 'FL Chart', 'Local Auth', 'Shared Preferences'],
    githubUrl: 'https://github.com/ThanojBuddhima/expenseAPK',
    image: '/projects/smart_offline_expence_manager.avif',
    downloadUrl: 'https://github.com/ThanojBuddhima/expenseAPK/releases',
    downloadLabel: 'Download',
  },
  {
    id: 'piyoway',
    name: 'Piyoway – Tourist Guide Platform',
    shortDescription: 'A full-stack tourist guide platform designed to help travelers discover and explore destinations in Galle, Sri Lanka. The platform provides points of interest, local listings, user reviews, itinerary planning, and role-based administration, supported by a scalable monorepo architecture.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'Nginx', 'Cloudinary'],
    liveDemoUrl: 'https://piyoway.com/',
    image: '/projects/piyoway.avif',
  },
  {
    id: 'plangmora',
    name: 'PlanGmora – Project Management Tool',
    shortDescription: 'A full-stack project management platform inspired by Jira, designed for managing projects, teams, issues, and workflows. It includes Kanban boards, Gantt-style timelines, role-based access control, JWT authentication, team collaboration, comments and mentions, notifications, analytics, and real-time data synchronization.',
    techStack: ['React', 'TypeScript', 'Vite', 'NestJS', 'PostgreSQL', 'TypeORM', 'JWT', 'Recharts'],
    githubUrl: 'https://github.com/ThanojBuddhima/ProjectManagementTool',
    image: '/projects/plangmora.avif',
  },
  {
    id: 'applock-pro',
    name: 'AppLock Pro – Privacy-Focused macOS App Locker',
    shortDescription: 'A native macOS desktop application that protects selected apps with on-device facial recognition. AppLock Pro uses Apple\'s Neural Engine for fast Face ID authentication, freezes protected applications until verification, supports configurable authentication sessions and password fallback, and keeps biometric processing completely offline without storing or transmitting facial data.',
    techStack: ['Swift', 'SwiftUI', 'macOS', 'Vision', 'Core ML', 'Apple Neural Engine'],
    githubUrl: 'https://github.com/ThanojBuddhima/applockPro',
    image: '/projects/applock_pro.avif',
    downloadUrl: 'https://github.com/ThanojBuddhima/applockPro/releases',
    downloadLabel: 'Download for macOS',
  },
  {
    id: 'garbo',
    name: 'Garbo – Smart Waste Management Platform',
    shortDescription: 'A full-stack waste management platform built as a multi-client system, consisting of a Flutter mobile application, a web-based management dashboard, and a backend API. The platform connects users and administrators through a centralized system for managing waste-management operations, with dedicated mobile and web interfaces supported by a scalable backend architecture.',
    techStack: ['Flutter', 'Dart', 'Web Dashboard', 'Backend API', 'REST API'],
    githubUrl: 'https://github.com/CodeMIndsUoM/Garbo-flutter',
    image: '/projects/garbo.avif',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
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
            <span className="text-[#FF6B35]">&gt;</span> Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent full-stack, mobile, and desktop applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col bg-secondary/50 rounded-none border border-border overflow-hidden hover:border-[#FF6B35] hover:shadow-lg hover:shadow-[#FF6B35]/10 transition-all duration-300"
            >
              
              {project.image && (
                <div className="w-full aspect-video overflow-hidden border-b border-border/50">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-[#FF6B35] transition-colors leading-tight pr-4">
                  {project.name}
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-background text-foreground text-xs font-medium border border-border/50 rounded-none group-hover:border-[#FF6B35]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-end gap-6 pt-4 border-t border-border/50">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      <Download size={18} />
                      {project.downloadLabel || 'Download'}
                    </a>
                  )}
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="https://github.com/ThanojBuddhima?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border border-foreground text-foreground rounded-none font-medium hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
          >
            See All Projects
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
