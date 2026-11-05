import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Code2,
  Cpu
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Experience & Internships</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Structured hands-on industry roles in frontend web engineering and applied artificial intelligence.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-purple-500 shadow-md shadow-purple-500/40 flex items-center justify-center text-purple-400">
                      {exp.id.includes('frontend') ? (
                        <Code2 className="w-4 h-4" />
                      ) : (
                        <Cpu className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for other column in desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Experience Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="p-6 sm:p-7 rounded-3xl glass-card border-white/10 glass-card-hover group transition-all duration-300">
                      
                      {/* Top Badges */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300">
                          {exp.type}
                        </span>
                        <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{exp.status}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                        {exp.company}
                      </p>

                      {/* Period & Location Meta */}
                      <div className="flex items-center space-x-4 text-xs text-slate-400 mt-2 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Brief Summary */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Expandable Key Responsibilities */}
                      {isExpanded && (
                        <div className="space-y-3 pt-3 border-t border-white/5 animate-in fade-in duration-200">
                          <p className="text-[11px] font-mono uppercase text-slate-400">
                            Key Responsibilities & Deliverables:
                          </p>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="text-xs text-slate-300 flex items-start space-x-2">
                                <span className="text-purple-400 mt-0.5">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                        {exp.technologies.map(tech => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Toggle Expand Button */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="mt-4 w-full py-1.5 text-[11px] font-mono text-purple-400 hover:text-purple-300 flex items-center justify-center space-x-1 transition-colors"
                      >
                        <span>{isExpanded ? "Collapse Details" : "Expand Responsibilities"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
