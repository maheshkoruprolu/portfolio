import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Loan Approval Prediction',
    subtitle: 'Machine Learning',
    desc: 'An ML project to predict loan approval using Logistic Regression and Random Forest.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Scikit-learn', 'Pandas'],
    link: 'https://github.com/maheshkoruprolu/Loan-Approval-Prediction'
  },
  {
    title: 'Garbage Classification',
    subtitle: 'Deep Learning',
    desc: 'Developed a garbage classification system using the EfficientNet architecture.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
    tags: ['PyTorch', 'Vision'],
    link: 'https://github.com/maheshkoruprolu/Garbage_Classification'
  },
  {
    title: 'Sentiment Analysis',
    subtitle: 'NLP Project',
    desc: 'Working on fine-tuning models for sentiment analysis on text datasets.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
    tags: ['BERT', 'NLP'],
    link: 'https://github.com/maheshkoruprolu'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-surface/5 overflow-hidden">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div className="container-ultimate">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <div className="text-precision mb-6">My Work</div>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-none">
              Featured <span className="h-serif text-primary">Projects.</span>
            </h2>
          </div>
          <div className="flex gap-4 mb-4 items-center">
             <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                Slide to view more
             </div>
             <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-primary/20" />
                ))}
             </div>
             <ArrowRight size={12} className="text-primary/40 animate-pulse" />
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center"
              >
                <div className="group/card relative bg-surface/10 border border-border rounded-2xl overflow-hidden p-6 hover:border-primary/20 transition-all duration-500">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl mb-8 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-3">{project.subtitle}</h4>
                      <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight group-hover/card:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted leading-relaxed font-light text-base line-clamp-3">
                        {project.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-bold text-muted border border-border px-2.5 py-1 rounded-full uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted hover:text-foreground transition-all bg-foreground/5 p-2 rounded-full hover:bg-primary/20 hover:text-primary"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Subtle Side Gradients */}
          <div className="absolute top-0 left-0 bottom-12 w-32 bg-gradient-to-r from-background/30 to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 bottom-12 w-32 bg-gradient-to-l from-background/30 to-transparent pointer-events-none hidden md:block" />
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/maheshkoruprolu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xs font-bold tracking-widest text-muted hover:text-primary transition-all group">
            FULL PROJECT ARCHIVE <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
