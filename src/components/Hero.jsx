import { motion } from 'framer-motion';
import { smoothScroll } from '../utils/smoothScroll';

const MagneticButton = ({ children, className, onClick, href, target, rel, download }) => {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={`${className} transition-transform hover:scale-105 active:scale-95`}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      download={download}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <div className="container-ultimate relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-grow max-w-3xl order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-8xl font-medium mb-4 tracking-[-0.04em] leading-[1.0] text-foreground">
               Kumar Mahesh <br />
              <span className="h-serif text-primary/90">- Koruprolu.</span>
            </h1>
            
            <div className="text-precision mb-10 text-primary/50 text-xs md:text-sm flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary/30" />
              Aspiring Machine Learning Engineer
            </div>
            
            <div className="mb-12 max-w-xl">
              <p className="text-lg md:text-xl text-muted leading-relaxed font-light">
                I am a student at RGUKT Srikakulam interested in Machine Learning and NLP. 
                I enjoy building projects and learning how to use data to solve problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-10 items-center">
              <MagneticButton 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll('#projects');
                }}
                className="btn-signature"
              >
                View Projects
              </MagneticButton>
              <div className="flex gap-8 items-center border-l border-border pl-8">
                <MagneticButton 
                  href="/Kumar_Mahesh_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="Kumar_Mahesh_Koruprolu_Resume.pdf"
                  className="text-xs font-bold tracking-[0.3em] uppercase text-foreground hover:text-primary transition-colors"
                >
                  Resume
                </MagneticButton>
                <MagneticButton 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll('#contact');
                  }}
                  className="text-xs font-bold tracking-[0.3em] uppercase text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  Contact
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Profile Image Slot - Refined & Balanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative z-10 w-64 md:w-80 lg:w-[380px] rounded-2xl overflow-hidden aspect-[4/5] glass-card border-white/20 shadow-huge group">
              <img 
                src="/profile_final.png" 
                alt="Mahesh Koruprolu" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                onError={(e) => { e.target.src = '/profile.png'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40" />
            </div>

            {/* Subtle Industrial Accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-primary/20 rounded-tr-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-primary/20 rounded-bl-3xl -z-10" />
            
            {/* Visual Label */}
            <div className="absolute -left-12 bottom-20 -rotate-90 origin-left hidden lg:block">
              <div className="text-[9px] font-black uppercase tracking-[0.6em] text-muted/20 whitespace-nowrap">
                
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Graphic - Refined */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[80%] bg-primary/10 rounded-full blur-[180px] -z-10 opacity-30" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-500/10 rounded-full blur-[150px] -z-10 opacity-30" />
    </section>
  );
};

export default Hero;
