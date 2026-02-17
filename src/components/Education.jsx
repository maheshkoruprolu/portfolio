import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, School, Building2 } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
      duration: "2023 – Present",
      details: "GPA: 9.27/10.00",
      icon: GraduationCap,
      description: "Focused on Computer Science fundamentals, Machine Learning, and Data Structures."
    },
    {
      degree: "Pre-University Course (MBiPC)",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
      duration: "2021 – 2023",
      details: "GPA: 9.40/10.00",
      icon: Building2,
      description: "Completed higher secondary education with a specialized focus on Mathematics, Biology, Physics, and Chemistry."
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Municipal High School, Pithapuram",
      duration: "2021",
      details: "GPA: 10/10",
      icon: School,
      description: "Foundation schooling with excellence in Science and Mathematics."
    }
  ];

  const certifications = [
    {
      title: "Database Management Systems",
      provider: "NPTEL",
      achievement: "Top 2% / Elite + Silver",
      icon: Award
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      achievement: "Top 2% / Elite + Silver",
      icon: Award
    },
    {
      title: "AI: Search Methods",
      provider: "NPTEL",
      achievement: "Elite + Silver Certification",
      icon: Award
    }
  ];

  return (
    <section id="education" className="section-padding bg-surface/5">
      <div className="container-ultimate">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Section Header */}
          <div className="lg:w-1/3">
            <div className="text-precision mb-6 text-primary/60 uppercase tracking-widest text-xs">Journey</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education <br />
              <span className="h-serif text-primary italic">& Milestones.</span>
            </h2>
            <p className="text-muted font-light leading-relaxed mb-12">
              A chronological overview of my academic progression and specialized technical certifications.
            </p>

            {/* Certifications Grid - Moved to Sidebar on large screens */}
            <div className="hidden lg:grid grid-cols-1 gap-4 mt-12">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted/40 mb-2">Specialized Training</div>
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <Award className="text-primary/60" size={16} />
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-0.5">{cert.title}</h4>
                    <p className="text-[9px] text-muted uppercase tracking-wider">{cert.provider} • {cert.achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Wrapper */}
          <div className="lg:w-2/3 relative pl-4 md:pl-10">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-10 top-2 bottom-2 w-[1px] bg-primary/20" />

            <div className="space-y-16">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-10 md:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-indigo z-10" />
                  
                  <div className="group">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-4 gap-2">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 group-hover:text-primary transition-colors">
                        {edu.duration}
                      </span>
                    </div>

                    <div className="bento-card p-8 group-hover:border-primary/30 transition-all duration-500">
                      <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                          <edu.icon className="text-muted group-hover:text-primary transition-colors" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.degree}</h3>
                          <p className="text-primary/80 font-medium mb-4 text-sm md:text-base">{edu.institution}</p>
                          <p className="text-muted font-light text-sm leading-relaxed mb-6 max-w-lg">
                            {edu.description}
                          </p>
                          <div className="inline-flex py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary">
                            {edu.details}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Certifications - Visible only on small screens */}
            <div className="lg:hidden mt-20 space-y-6">
               <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted/40 px-4">Certifications</div>
               <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="glass-card p-6 flex flex-col gap-4">
                      <Award className="text-primary" size={20} />
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-1">{cert.title}</h4>
                        <p className="text-[10px] text-muted uppercase tracking-wider mb-2">{cert.provider}</p>
                        <div className="text-[10px] font-black text-primary uppercase tracking-widest">
                          {cert.achievement}
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
