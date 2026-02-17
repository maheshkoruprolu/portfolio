import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiPytorch, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiMysql, 
  SiStreamlit, 
  SiGit, 
  SiJupyter,
  SiJavascript,
  SiReact,
  SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ]
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Transformers', icon: SiPytorch, color: '#FFD21E' }, // Fallback icon
    ]
  },
  {
    title: 'Data Stack',
    skills: [
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
    ]
  }
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-ultimate">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="text-precision mb-6 text-primary/60 text-xs tracking-[0.5em] uppercase">Abilities</div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Technical <span className="h-serif text-primary italic">Stack.</span>
          </h2>
          <p className="text-muted max-w-sm font-light text-sm">
            I enjoy learning new tools and languages to build projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card text-center flex flex-col items-center"
            >
              <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-muted/60 mb-10 border-b border-primary/20 pb-2 w-full">
                {group.title}
              </h4>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-2 gap-8 w-full justify-items-center"
              >
                {group.skills.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-3 group/icon"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface border border-border group-hover/icon:border-primary/40 transition-all shadow-premium">
                      <skill.icon size={24} className="text-foreground md:text-muted group-hover/icon:text-primary transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold text-muted md:text-muted/60 group-hover/icon:text-foreground transition-colors uppercase tracking-widest">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
