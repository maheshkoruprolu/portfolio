import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '../utils/cn';
import { smoothScroll } from '../utils/smoothScroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    smoothScroll(0);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileActive={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-[90] w-14 h-14",
            "glass-card flex items-center justify-center",
            "text-foreground hover:text-primary transition-colors",
            "shadow-huge"
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
          <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
