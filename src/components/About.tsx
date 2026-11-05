import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  FileDown, 
  Lightbulb, 
  Target, 
  HeartHandshake,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'philosophy' | 'interests'>('bio');

  const interests = [
    { title: "Frontend Engineering", desc: "Creating sleek, interactive, high-performance web applications with React.js & modern styling." },
    { title: "AI & Computer Vision", desc: "Applying YOLOv8, OpenCV, and edge ML models for real-world automation and safety systems." },
    { title: "Database Architecture", desc: "Designing structured relational schemas, optimized SQL queries, and ACID-compliant records." },
    { title: "Civic & Rural Tech", desc: "Innovating mobility and logistics frameworks to benefit rural communities and public systems." }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Shreya Walke</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Third-Year Computer Engineering undergraduate blending clean frontend craftsmanship with applied AI and student leadership.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl glass-card border-white/10 space-y-5">
              <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-lg">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Shreya Walke thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Shreya Walke</h3>
                  <p className="text-xs text-purple-400 font-medium">B.Tech Computer Engineering</p>
                  <p className="text-[11px] text-slate-400">Class of 2028</p>
                </div>
              </div>

              {/* Quick Info Items */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Location</span>
                    <span className="text-slate-200 font-medium">Chandwad, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">College</span>
                    <span className="text-slate-200 font-medium">SNJB's K.B.J. College of Engineering</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Leadership</span>
                    <span className="text-slate-200 font-medium">Chief Minister (Career Sansad 2026–27)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/5 hover:bg-purple-600/20 text-purple-300 border border-purple-500/30 flex items-center justify-center space-x-2 transition-all duration-200"
                >
                  <FileDown className="w-4 h-4" />
                  <span>View Verified Resume</span>
                </button>
              </div>
            </div>

            {/* Quick Quote Card */}
            <div className="p-5 rounded-2xl glass-card border-white/5 bg-gradient-to-br from-purple-950/20 to-transparent">
              <p className="text-xs italic text-slate-300 leading-relaxed font-sans">
                "Turning innovative ideas into meaningful, practical solutions through clean code, teamwork, and persistent problem solving."
              </p>
              <p className="text-[11px] text-purple-400 font-bold mt-2 font-mono">— Shreya's Guiding Philosophy</p>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Narrative */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tab Selectors */}
            <div className="flex items-center space-x-2 p-1.5 rounded-2xl glass-card border-white/5 bg-slate-950/60 w-fit">
              <button
                onClick={() => setActiveTab('bio')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'bio'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Professional Introduction
              </button>
              <button
                onClick={() => setActiveTab('interests')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'interests'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Technical Domains
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Beyond Tech & Community
              </button>
            </div>

            {/* Tab 1: Bio */}
            {activeTab === 'bio' && (
              <div className="p-8 rounded-2xl glass-card border-white/10 space-y-6 animate-in fade-in duration-300">
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am a <strong className="text-white font-semibold">Third-Year B.Tech Computer Engineering student</strong> at{' '}
                    <span className="text-purple-300">SNJB's K.B.J. College of Engineering, Chandwad</span>, with a strong interest in software development, frontend engineering, and Artificial Intelligence.
                  </p>
                  <p>
                    I enjoy building practical, user-focused applications and exploring how technology can solve real-world problems.
                  </p>
                  <p>
                    Through <strong className="text-slate-100">internships, academic projects, hackathons, and technical initiatives</strong>, I have gained hands-on exposure to web development, database management, and AI/ML fundamentals.
                  </p>
                  <p>
                    Beyond technology, I actively participate in leadership, student development, and community initiatives.
                  </p>
                  <p className="text-purple-200 font-medium pt-2 border-t border-white/5">
                    "I believe in continuous learning, collaboration, problem-solving, and turning innovative ideas into meaningful solutions."
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <Lightbulb className="w-5 h-5 text-amber-400 mb-2" />
                    <h4 className="text-xs font-bold text-white uppercase">Applied Innovation</h4>
                    <p className="text-[11px] text-slate-400 mt-1">Transforming abstract algorithms into practical end-user applications.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <Target className="w-5 h-5 text-cyan-400 mb-2" />
                    <h4 className="text-xs font-bold text-white uppercase">Engineering Rigor</h4>
                    <p className="text-[11px] text-slate-400 mt-1">Grounding software in clean architecture, Git versioning, and database normalization.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <HeartHandshake className="w-5 h-5 text-purple-400 mb-2" />
                    <h4 className="text-xs font-bold text-white uppercase">Youth Leadership</h4>
                    <p className="text-[11px] text-slate-400 mt-1">Spearheading Career Sansad and empowering student initiatives.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Technical Domains */}
            {activeTab === 'interests' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
                {interests.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl glass-card border-white/10 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Beyond Tech */}
            {activeTab === 'philosophy' && (
              <div className="p-8 rounded-2xl glass-card border-white/10 space-y-5 animate-in fade-in duration-300">
                <h3 className="font-bold text-white text-base">Community Engagement & Holistic Development</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineering excellence flourishes when paired with strong character, discipline, and empathy. Throughout my academic journey, I have actively led and supported student and social initiatives:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Career Sansad:</strong> Guiding peers through career preparation, skill pathways, and placement readiness.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>NCC Sergeant:</strong> Drills, camp leadership, national defense values, and teamwork under pressure.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>UNGA80 Health & Dignity:</strong> Volunteered in grassroots health & dignity empowerment sessions for 25 young girls.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Public Speaking:</strong> Regular orator and debater, winning 1st Prize at SPPU QIP Group Discussion.</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
