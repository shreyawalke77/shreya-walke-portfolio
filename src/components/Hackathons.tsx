import React from 'react';
import { 
  Trophy, 
  Award, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  MapPin,
  Car
} from 'lucide-react';
import { HACKATHON_ACHIEVEMENTS } from '../data/portfolioData';

export const Hackathons: React.FC = () => {
  const hackathon = HACKATHON_ACHIEVEMENTS[0];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-amber-500/20 text-xs font-mono text-amber-300 uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>COMPETITIVE RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Hackathon <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">Accomplishments</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            National hackathon standings validating real-world prototype engineering, domain expertise, and executive pitch delivery.
          </p>
        </div>

        {/* Featured Hackathon Hero Showcase */}
        <div className="relative rounded-3xl glass-card border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Hackathon Narrative & Badges */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300">
                  {hackathon.event}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Team: {hackathon.team}</span>
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {hackathon.title}
                </h3>
                <p className="text-sm font-semibold text-amber-300 mt-1">
                  Grand Finale Top Contender • 100+ Engineering Teams Competing
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Represented SNJB's K.B.J. College of Engineering within <strong className="text-white">Team Ecoverse</strong>. Formulated and engineered AI-driven transportation solutions combining edge computer vision (YOLOv8 + OpenCV) and rural bus capacity optimization (SmartYatra).
              </p>

              {/* Ranks Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-white">Top 20 Overall</p>
                    <p className="text-xs text-amber-300/80">Out of 100+ Selected Teams</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-white">Top 3 Ranking</p>
                    <p className="text-xs text-cyan-300/80">Transportation Tech Domain</p>
                  </div>
                </div>
              </div>

              {/* Verified Hackathon Stages */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <p className="text-xs font-mono uppercase text-slate-400 font-bold">
                  Verified Evaluation Rounds Cleared:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Idea Screening Round Cleared</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Technical PPT Shortlisting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Working Prototype Submission</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Top 20 GD / Pitch & Grand Finale</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Visual Trophy & Event Photo Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              {/* Grand Trophy Visual Icon Card */}
              <div className="relative p-8 rounded-3xl glass-card border-amber-500/40 bg-slate-900/80 shadow-xl text-center w-full max-w-sm">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/30 mb-4 animate-float-slow">
                  <div className="w-full h-full rounded-[22px] bg-slate-950 flex items-center justify-center text-amber-400">
                    <Trophy className="w-10 h-10" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white">Ecoverse Innovation</h4>
                <p className="text-xs text-amber-400 font-mono mt-1">Smart Kopargaon 2026</p>
                <p className="text-xs text-slate-400 mt-2">
                  "Advancing intelligent road safety and sustainable rural transit logistics through code."
                </p>
              </div>

              {/* Photo Showcase Placeholder Card */}
              <div className="p-4 rounded-2xl glass-card border-white/10 w-full max-w-sm text-center">
                <p className="text-[11px] font-mono text-slate-400">
                  Event photos and prototype demonstrations from the Grand Finale
                </p>
                <div className="mt-2 py-3 px-4 rounded-xl bg-white/5 border border-dashed border-white/10 text-xs text-purple-300">
                  📷 Smart Kopargaon Finale 2026 Gallery Ready
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
