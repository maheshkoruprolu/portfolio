import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  React.useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiff: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-selection transition-colors duration-500 relative overflow-x-hidden">
      {/* Dynamic 3D Background */}
      <NeuralNetworkBackground />
      
      <div className="bg-noise fixed inset-0 z-50 overflow-hidden pointer-events-none" />
      
      {/* Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Mouse Trail */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/20 pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary/40 pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', damping: 35, stiffness: 400, mass: 0.1 }}
      />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
