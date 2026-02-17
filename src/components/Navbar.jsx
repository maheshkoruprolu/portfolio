import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ArrowRight, Sun, Moon } from 'lucide-react';
import { cn } from '../utils/cn';
import { smoothScroll } from '../utils/smoothScroll';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Precise Section Tracking
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
      const viewportHeight = window.innerHeight;
      const triggerPoint = scrollY + (viewportHeight * 0.3); // Focus on the upper-middle of the screen

      // Check if we are at the very top (Hero range)
      if (scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // Check if we are at the very bottom
      const isAtBottom = window.innerHeight + scrollY >= document.body.offsetHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (triggerPoint >= offsetTop && triggerPoint < offsetTop + height) {
            setActiveSection(sectionId);
            break; // Found the active section
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kumar-mahesh-koruprolu/' },
    { icon: Github, href: 'https://github.com/maheshkoruprolu' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border" : "py-8 bg-transparent"
      )}>
        <div className="container-ultimate flex justify-between items-center">
          <motion.button 
            onClick={() => smoothScroll(0)}
            className="text-lg tracking-[0.4em] font-black text-foreground hover:text-primary transition-colors relative z-[110] bg-transparent border-none cursor-pointer"
          >
            MAHESH<span className="opacity-40"></span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12">
            {links.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(link.href);
                }}
                className={cn(
                  "text-[10px] uppercase font-bold tracking-widest transition-all py-2 relative group",
                  activeSection === link.href.replace('#', '') 
                    ? "text-primary scale-110" 
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-300",
                  activeSection === link.href.replace('#', '') ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4 relative z-[110]">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface border border-border text-foreground/80 hover:text-primary transition-all active:scale-95 shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden w-10 h-10 flex items-center justify-center bg-foreground/5 rounded-full border border-border text-foreground transition-all active:scale-90"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Menu Overlay - Outside nav to prevent backdrop-filter clipping */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] bg-background/95 backdrop-blur-2xl md:hidden overflow-hidden flex flex-col"
          >
            {/* Geometric Background Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            {/* Close Button in Overlay (Pinned to top-right) */}
            <div className={cn(
              "w-full container-ultimate flex justify-end items-center transition-all duration-500",
              scrolled ? "py-4" : "py-8"
            )}>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 flex items-center justify-center bg-foreground/10 rounded-full border border-border text-foreground transition-all active:scale-90"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center px-10 pt-20">
              <div className="space-y-4">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.5 }}
                  >
                    <a 
                      href={link.href} 
                      className="group flex items-center justify-between py-4 border-b border-border"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScroll(link.href);
                        setIsOpen(false);
                      }}
                    >
                      <span className={cn(
                        "text-3xl font-bold transition-all flex items-center gap-4",
                        activeSection === link.href.replace('#', '') 
                          ? "text-primary translate-x-4" 
                          : "text-foreground group-hover:text-primary"
                      )}>
                        <span className="text-[10px] text-muted font-mono tracking-tighter">0{i + 1}</span>
                        {link.name}
                      </span>
                      <ArrowRight size={20} className={cn(
                        "text-primary transition-all",
                        activeSection === link.href.replace('#', '') ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                      )} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="p-10 border-t border-white/5 bg-white/[0.02] flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-black text-muted/40 tracking-[0.3em] mb-1">Get in Touch</span>
                <span className="text-xs font-bold text-muted">maheshkoruprolu06@gmail.com</span>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all shadow-xl"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
