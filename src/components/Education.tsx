import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Formal <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Education</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Undergraduate Computer Engineering curriculum complemented by strong secondary science and mathematics foundations.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl glass-card border-white/10 glass-card-hover group transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {item.institution}
                  </p>
                </div>

                <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start text-xs text-slate-400 shrink-0 gap-1">
                  <div className="flex items-center space-x-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Editable Academic Score Placeholder Banner */}
              <div className="mt-4 p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2 text-xs">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-200 font-mono font-medium">{item.scorePlaceholder}</span>
                </div>
                <span className="text-[10px] font-mono text-purple-300/70 bg-purple-900/30 px-2 py-0.5 rounded">
                  Configurable in portfolioData.ts
                </span>
              </div>

              {/* Curriculum Description */}
              <p className="text-xs text-slate-300 leading-relaxed mt-4">
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                  <p className="text-[11px] font-mono uppercase text-slate-400">
                    Key Academic Highlights:
                  </p>
                  <ul className="space-y-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-300 flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
