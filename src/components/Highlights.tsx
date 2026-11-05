import React, { useState, useEffect } from 'react';
import { Award, Briefcase, Trophy, Compass, Crown, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  numberTarget?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
  accent: string;
}

export const Highlights: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    // Smooth count up animation
    const targets = [9, 2, 20, 3, 1];
    const duration = 1600; // ms
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        targets.map((t) => Math.min(t, Math.round(t * Math.sin((progress * Math.PI) / 2))))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const stats: StatItem[] = [
    {
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      value: `${counts[0]}+`,
      label: "Technical Projects",
      detail: "Full-Stack, AI/ML & Relational DBMS",
      accent: "from-purple-500/20 to-purple-500/0"
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      value: `${counts[1]}`,
      label: "Internship Experiences",
      detail: "Athenura (Frontend) & Google AI-ML",
      accent: "from-cyan-500/20 to-cyan-500/0"
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      value: `Top ${counts[2]}`,
      label: "Hackathon Standing",
      detail: "Out of 100 teams (Smart Kopargaon)",
      accent: "from-amber-500/20 to-amber-500/0"
    },
    {
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      value: `Top ${counts[3]}`,
      label: "Domain Recognition",
      detail: "Transportation Tech Domain Award",
      accent: "from-emerald-500/20 to-emerald-500/0"
    },
    {
      icon: <Crown className="w-5 h-5 text-violet-400" />,
      value: "Chief Minister",
      label: "Career Sansad 2026–27",
      detail: "Student Governance & Coordination",
      accent: "from-violet-500/20 to-violet-500/0"
    }
  ];

  return (
    <section className="relative py-12 border-y border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification Note */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 flex-wrap gap-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>GROUNDED METRICS & VERIFIED ACHIEVEMENTS</span>
          </div>
          <span className="text-[11px] text-slate-500">
            Zero fabricated numbers • Validated engineering background
          </span>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative p-5 rounded-2xl glass-card glass-card-hover overflow-hidden flex flex-col justify-between ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              {/* Subtle accent gradient top glow */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.accent}`}
              />

              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono font-semibold text-slate-500">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
