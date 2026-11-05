import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 pt-16 pb-12 overflow-hidden">
      
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-purple-500/20">
                SW
              </div>
              <span className="text-xl font-extrabold text-white tracking-wider">
                SHREYA WALKE
              </span>
            </div>
            <p className="text-sm text-purple-300 font-medium">
              "{PERSONAL_INFO.tagline}"
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Third-Year B.Tech Computer Engineering student at SNJB's K.B.J. College of Engineering, Chandwad. Frontend developer and AI/ML enthusiast.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.slice(0, 8).map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-purple-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-4">
            <div className="flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-purple-300 hover:border-purple-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold glass-card text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 flex items-center space-x-2 transition-all hover:-translate-y-0.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="flex items-center space-x-1">
            <span>Designed & Built with precision by</span>
            <strong className="text-slate-300 font-semibold">Shreya Walke</strong>
          </p>

          <div className="flex items-center space-x-1 text-[11px] font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Fake Data • Grounded Engineering Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
