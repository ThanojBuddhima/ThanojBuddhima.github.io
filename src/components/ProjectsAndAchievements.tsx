import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github } from 'lucide-react';

// Define the type for a project/achievement item
export interface ProjectItem {
  id: string;
  name: string;
  shortDescription: string;
  githubUrl: string;
  images: string[];
  type: 'project' | 'achievement';
  teamName?: string;
}

// Sample data - User will add their own projects and achievements
const initialItems: ProjectItem[] = [
  {
    id: 'innovatex-champions',
    name: 'Champions - InnovateX',
    shortDescription: 'Won 1st place as Team in the hackathon organized by Zebra Technologies. Developed an innovative ML solution addressing real-world challenges.',
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
  {
    id: 'algoarena-runners-up',
    name: 'Second Runners-up - AlgoArena',
    shortDescription: 'Secured 3rd Place as Team Gmora by developing Leo Connect, a full-stack mobile application supporting club operations and member coordination.',
    githubUrl: 'https://github.com/ThanojBuddhima/ThanojBuddhima.github.io',
    images: ['/achievements/algoarena-runners-up.jpg'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'jpuraxtreme-6thplace',
    name: "6th place - J'PuraXtreme 2.0",
    shortDescription: 'Secured 6th place by delivering a complete solution in a national-level 24-hour hackathon, demonstrating endurance, teamwork, and focused problem-solving.',
    githubUrl: 'https://github.com/ThanojBuddhima/ThanojBuddhima.github.io',
    images: ['/achievements/jpuraxtreme.jpg'],
    type: 'achievement',
    teamName: 'TrippleBoot',
  },
  {
    id: 'biofusion-2025',
    name: '5th place - BioFusion 2025',
    shortDescription: 'Secured 5th place at BioFusion, a machine learning competition organized by the University of Sri Jayewardenepura, representing Team Gmora.',
    githubUrl: 'https://github.com/ThanojBuddhima/ThanojBuddhima.github.io',
    images: ['/achievements/biofusion.jpg'],
    type: 'achievement',
    teamName: 'Gmora',
  },
  {
    id: 'uoj-coders-finalists',
    name: 'Finalists - UOJ Coders v4.0',
    shortDescription: 'Selected as finalists by delivering a strong solution through effective teamwork, problem-solving, and continuous learning in a competitive hackathon environment.',
    githubUrl: 'https://github.com/ThanojBuddhima/ThanojBuddhima.github.io',
    images: ['/achievements/uoj-coders-finalists.jpg'],
    type: 'achievement',
    teamName: 'DualDudes',
  },
  
  
];

export function ProjectsAndAchievements() {
  const [items] = useState<ProjectItem[]>(initialItems);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const collapsedHeight = windowWidth < 768 ? '480px' : (windowWidth < 1024 ? '480px' : '420px');

  return (
    <section
      id="projects-achievements"
      style={{
        padding: '64px 0 120px 0',
        backgroundColor: 'var(--background)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        scrollMarginTop: '80px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          style={{ marginBottom: '40px', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '12px', color: 'var(--foreground)' }}>
            Projects & Achievements
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem' }}>
            Hackathon wins, projects, and competitions
          </p>
        </motion.div>

        {/* Cards Grid Container with expand/collapse logic */}
        <div style={{ position: 'relative' }}>
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: windowWidth < 768 ? '1fr' : (windowWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
              gap: '24px',
              overflow: 'hidden',
            }}
            animate={{
              height: isExpanded ? 'auto' : collapsedHeight,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {items.map((item: ProjectItem, index: number) => (
              <motion.div
                key={item.id}
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '310px',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group hover:border-[#FF6B35] transition-all duration-300"
              >
                {/* Card Image */}
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                  {item.images.length > 0 && (
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  {/* Type Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '4px 8px',
                      fontSize: '10px',
                      fontWeight: '500',
                      borderRadius: '6px',
                      backgroundColor: '#FF6B35',
                      color: 'white',
                    }}
                  >
                    {item.type === 'project' ? 'Project' : 'Achievement'}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: '16px' }}>
                  {/* Icons Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', minHeight: '18px' }}>
                    <div style={{ fontSize: '12px', color: '#FF6B35', fontWeight: '500' }}>
                      {item.teamName && `Team ${item.teamName}`}
                    </div>
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

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: 'var(--foreground)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span className="group-hover:text-[#FF6B35] transition-colors">{item.name}</span>
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--muted-foreground)',
                      marginBottom: '16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Shaded Transparent Overlay when collapsed */}
          {!isExpanded && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '150px',
                background: 'linear-gradient(to bottom, transparent, var(--background))',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            />
          )}
          {/* See More Button - Overlapping with the fade effect */}
          <div
            style={{
              position: 'absolute',
              bottom: isExpanded ? '-80px' : '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 20,
              textAlign: 'center',
            }}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                padding: '10px 24px',
                backgroundColor: '#FF6B35',
                border: '1px solid #FF6B35',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
              }}
              onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.backgroundColor = '#FF7A50';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.backgroundColor = '#FF6B35';
              }}
            >
              {isExpanded ? 'See Less ↑' : 'See More ↓'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
