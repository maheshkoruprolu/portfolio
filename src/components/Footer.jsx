import { ArrowUp } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border relative">
      <div className="container-ultimate">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-precision mb-4">Mahesh. Portfolio</div>
            <div className="text-[10px] font-bold text-muted/40 uppercase tracking-[0.2em]">
              Crafting Digital Experiences
            </div>
          </div>

          <div className="flex gap-16 text-[10px] font-bold tracking-[0.3em] uppercase text-muted">
            <a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('#about'); }} className="hover:text-primary transition-colors">About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScroll('#projects'); }} className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScroll('#contact'); }} className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="text-[10px] font-black tracking-widest text-muted/40 text-center md:text-right">
             © {new Date().getFullYear()} / MAHESH PORTFOLIO
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
