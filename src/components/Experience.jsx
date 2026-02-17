import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Pinaca Technologies Private Limited',
      role: 'Data Curation Intern',
      period: 'Aug 2025 – Present',
      desc: [
        'Prepared and structured unstructured legal judgments for classification tasks.',
        'Designed annotation format and validated dataset consistency.',
        'Identified and corrected labeling and formatting inconsistencies.',
        'Performed web scraping from multiple public sources.',
        'Ensured data usability for downstream ML experiments.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-surface/5 border-t border-border">
      <div className="container-ultimate">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          
          <div className="lg:w-1/3">
            <div className="text-precision mb-6">Experience</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Work <br />
              <span className="h-serif text-primary">History.</span>
            </h2>
          </div>

          <div className="lg:w-2/3 w-full space-y-24">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-border"
              >
                {/* Dot */}
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-indigo" />
                
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                    <div className="text-primary/80 font-medium tracking-tight">{exp.company}</div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted/60 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.desc.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-muted font-light leading-relaxed">
                      <span className="text-primary/40">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
