import React, { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  Users, 
  Compass, 
  ShieldCheck, 
  Mic2, 
  HeartHandshake, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { LEADERSHIP_ROLES, OTHER_ACHIEVEMENTS } from '../data/portfolioData';
import { LeadershipRole } from '../types';

export const Leadership: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Governance', 'Ambassador', 'Community', 'Extracurricular'];

  const filteredRoles = LEADERSHIP_ROLES.filter(role => {
    if (selectedFilter === 'All') return true;
    return role.category === selectedFilter;
  });

  const getRoleIcon = (cat: string) => {
    switch (cat) {
      case 'Governance':
        return <Crown className="w-5 h-5 text-amber-400" />;
      case 'Ambassador':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Community':
        return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      case 'Extracurricular':
        return <Mic2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Users className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="leadership" className="py-24 relative bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <Crown className="w-3.5 h-3.5 text-purple-400" />
            <span>RESPONSIBILITY & ADVOCACY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Leadership & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Student Initiatives</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Demonstrated institutional governance, technical mentorship, national cadet discipline, and social impact drives.
          </p>
        </div>

        {/* Dedicated Recognition Card: SPPU QIP 1st Prize */}
        <div className="mb-14">
          <div className="relative p-6 sm:p-8 rounded-3xl glass-card border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-slate-900 to-purple-950/20 shadow-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold">
                      {OTHER_ACHIEVEMENTS[0].badge}
                    </span>
                    <span className="text-xs text-amber-400 font-mono font-bold">
                      {OTHER_ACHIEVEMENTS[0].prize}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {OTHER_ACHIEVEMENTS[0].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                    {OTHER_ACHIEVEMENTS[0].description}
                  </p>
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-white/10 sm:pl-6 shrink-0">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Organization</span>
                <span className="text-xs font-semibold text-white">Savitribai Phule Pune University</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-1.5 p-1 rounded-2xl glass-card border-white/5 bg-slate-900/60 overflow-x-auto max-w-full mb-10 w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                selectedFilter === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-card border-white/10 glass-card-hover flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getRoleIcon(item.category)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Role Title & Org */}
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.role}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mt-0.5 mb-2">
                  {item.organization}
                </p>

                {item.period && (
                  <p className="text-[11px] font-mono text-slate-500 mb-3">
                    {item.period}
                  </p>
                )}

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Category: {item.category}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
