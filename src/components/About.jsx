import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Star, CheckCircle2 } from 'lucide-react';

const About = () => {
  const principles = [
    "Define the problem precisely",
    "Analyze the data before modeling",
    "Establish meaningful baselines",
    "Improve through controlled experimentation",
    "Justify every design choice with evidence"
  ];

  return (
    <section id="about" className="section-padding bg-surface/5">
      <div className="container-ultimate">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story - Bento Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bento-card flex flex-col justify-between p-10 md:p-12"
          >
            <div>
              <div className="text-precision mb-6 text-primary font-bold">Introduction</div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Learning and building <br />
                <span className="h-serif text-primary italic">with Machine Learning.</span>
              </h2>
              <div className="space-y-6 text-muted leading-relaxed font-light text-lg mb-12">
                <p>
                  I am a 3rd-year B.Tech student who loves working with data and text. 
                  My focus is on understanding how ML models work and applying them to real-world tasks.
                </p>
                
                <div className="grid gap-4 mt-8">
                  <h4 className="text-sm font-bold text-muted/50 uppercase tracking-[0.2em] mb-2">My Approach</h4>
                  {principles.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-muted">
                      <CheckCircle2 size={14} className="text-primary/60" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-12 items-center">
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-muted/40 tracking-widest mb-1">Status</span>
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Undergraduate @ RGUKT</span>
               </div>
            </div>
          </motion.div>

          {/* High-Impact Stats Column */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-8">
            
            {/* GPA Card - High Impact */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card group flex flex-col justify-between p-10 bg-white/[0.01]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-precision mb-4 text-primary/40">Academic Merit</div>
                  <h3 className="text-6xl md:text-7xl font-black text-foreground group-hover:text-primary transition-colors duration-500">9.27</h3>
                </div>
                <GraduationCap className="text-muted/20 group-hover:text-primary transition-all duration-500" size={48} />
              </div>
              <div>
                <div className="text-xs font-bold text-muted/40 uppercase tracking-[0.2em] mb-2">Current CGPA</div>
                <p className="text-sm text-muted leading-relaxed font-light">
                  Consistently applying rigor to Computer Science fundamentals and data-driven problem solving at RGUKT Srikakulam.
                </p>
              </div>
            </motion.div>

            {/* Achievements Card - High Density */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card group flex flex-col justify-between p-10 bg-white/[0.02]"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-precision mb-2 text-primary/40">Recognition</div>
                  <h3 className="text-2xl font-bold text-foreground leading-tight">Elite Honors & <br /> Certifications</h3>
                </div>
                <Award className="text-muted/20 group-hover:text-primary transition-all duration-500" size={40} />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Star size={14} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Top 2%</div>
                    <div className="text-[10px] text-muted uppercase tracking-widest leading-none mt-1">NPTEL DBMS & Cloud Computing</div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase font-black text-muted/40 tracking-widest">Active Focus</span>
                    <span className="text-[10px] uppercase font-black text-primary tracking-widest">Deep Learning</span>
                  </div>
                  <div className="h-1 w-full bg-foreground/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
