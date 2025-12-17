import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import portfolioImage from 'figma:asset/6b6dd82e2386514bf300044112deaefb5dff187e.png';
import portfolioDetailImage from 'figma:asset/d493cdaede7daf07b3599df847f04c8bc6b66e62.png';
import { useState } from 'react';
import { Code, ChevronLeft, ChevronRight } from 'lucide-react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Thanoj's Portfolio",
      category: 'Web Development',
      image: portfolioImage,
      images: [portfolioImage, portfolioDetailImage],
      description: 'A modern and professional portfolio website showcasing my work as a software developer. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, dark mode support, and a fully responsive design that works seamlessly across all devices.',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-12 md:py-32 bg-background flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-4xl md:text-5xl text-center">My Projects</h2>
        </motion.div>

        {/* Projects Display - Centered Single Card */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FF6B35] bg-card h-[380px] md:h-[430px] flex flex-col w-[320px] sm:w-[360px] md:w-[480px] cursor-pointer max-w-[calc(100vw-2rem)]"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(255, 107, 53, 0.25), 0 0 0 1px rgba(255, 107, 53, 0.1)',
                  }}
                >
                  {/* Image Section */}
                  <div className="relative h-[240px] md:h-[280px] overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Icon Badge */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-[#FF6B35]"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Code className="text-white" size={28} />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 md:p-6 bg-card flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-foreground text-base md:text-lg">
                        {project.title}
                      </h3>
                      <span className="text-muted-foreground text-xs md:text-sm px-3 py-1 bg-muted/50 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex justify-end mt-4">
                      <motion.button
                        onClick={() => setSelectedProject(index)}
                        className="px-6 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF6B35]/90 transition-colors w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        See More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject !== null && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-card rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FF6B35] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <ImageWithFallback
                src={projects[selectedProject].images[currentImageIndex]}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              {projects[selectedProject].images.length > 1 && (
                <>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-[#FF6B35] transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/70 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-[#FF6B35] transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </>
              )}

              {/* Image Counter */}
              {projects[selectedProject].images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {projects[selectedProject].images.length}
                </div>
              )}

              {/* Close Button */}
              <motion.button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentImageIndex(0);
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-foreground text-3xl mb-2">
                  {projects[selectedProject].title}
                </h2>
                <span className="text-[#FF6B35] px-4 py-1.5 bg-[#FF6B35]/10 rounded-full inline-block">
                  {projects[selectedProject].category}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {projects[selectedProject].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}