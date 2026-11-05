import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Code2, 
  Cpu, 
  Database, 
  Terminal,
  Camera,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [photoSrc, setPhotoSrc] = useState(PERSONAL_INFO.avatarUrl);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Typewriter effect for titles
  useEffect(() => {
    const currentTitle = PERSONAL_INFO.titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full glass-card border-purple-500/20 bg-purple-950/20 text-xs font-medium text-purple-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Software & AI/ML Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Class of 2028</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase font-mono">
                ENGINEERING • INNOVATION • LEADERSHIP
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                  Shreya Walke
                </span>
                <span className="text-purple-500">.</span>
              </h1>
            </div>

            {/* Animated Title */}
            <div className="h-10 sm:h-12 flex items-center">
              <span className="text-lg sm:text-2xl font-mono font-semibold text-slate-300">
                &gt; {displayedText}
                <span className="inline-block w-2.5 h-5 ml-1 bg-purple-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              {PERSONAL_INFO.tagline}{' '}
              <span className="text-slate-300">
                Building meaningful digital experiences through technology, creativity, and innovation.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm glass-card hover:bg-slate-800/80 text-slate-200 hover:text-white border border-white/10 hover:border-purple-500/40 shadow-sm flex items-center justify-center space-x-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download My Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/5 w-full">
              <span className="text-xs font-mono uppercase text-slate-500">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/20 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <div className="relative">
                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-purple-300 hover:border-purple-500/40 hover:bg-purple-950/20 transition-all duration-200 flex items-center space-x-1.5"
                  title="Click to copy email address"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-mono hidden md:inline">{PERSONAL_INFO.email}</span>
                  {copiedEmail ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>
                {copiedEmail && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500 text-black text-[10px] font-bold rounded shadow">
                    Copied!
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual, Profile Frame & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 opacity-40 blur-xl group-hover:opacity-60 transition duration-500" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl glass-card border-white/10 p-3 shadow-2xl bg-slate-950/80 overflow-hidden">
                
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900">
                  <img
                    src={photoSrc}
                    alt="Shreya Walke - Professional Portrait"
                    className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback placeholder with initials if path fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  {/* Identification Pill at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-card border-white/10 bg-slate-900/90 backdrop-blur-md">
                    <p className="text-white font-bold text-sm tracking-wide">Shreya Walke</p>
                    <p className="text-xs text-purple-300 font-medium">B.Tech Computer Engineering</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">SNJB's K.B.J. College of Engineering</p>
                  </div>

                  {/* Upload photo trigger */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 rounded-lg bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 text-xs flex items-center space-x-1 shadow-lg"
                      title="Upload or replace photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-[10px]">Change</span>
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

              </div>

              {/* Floating Tech Badges around the frame */}
              <div className="absolute -top-4 -left-4 p-2.5 rounded-2xl glass-card border-purple-500/30 bg-slate-900/90 shadow-xl flex items-center space-x-2 animate-float-slow">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono leading-none">Frontend</p>
                  <p className="text-xs font-bold text-white leading-tight">React.js</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-3 p-2.5 rounded-2xl glass-card border-cyan-500/30 bg-slate-900/90 shadow-xl flex items-center space-x-2 animate-float-slow [animation-delay:2s]">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono leading-none">AI / Vision</p>
                  <p className="text-xs font-bold text-white leading-tight">YOLOv8 Nano</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-5 -translate-y-1/2 p-2.5 rounded-2xl glass-card border-indigo-500/30 bg-slate-900/90 shadow-xl flex items-center space-x-2 animate-float-slow [animation-delay:4s]">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono leading-none">Database</p>
                  <p className="text-xs font-bold text-white leading-tight">MySQL / SQL</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
