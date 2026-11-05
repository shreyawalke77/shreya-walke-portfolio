import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Search, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming": <Code2 className="w-4 h-4 text-purple-400" />,
    "Frontend Development": <Layout className="w-4 h-4 text-cyan-400" />,
    "Backend & Systems": <Server className="w-4 h-4 text-indigo-400" />,
    "Databases & Storage": <Database className="w-4 h-4 text-emerald-400" />,
    "AI & Machine Learning": <Cpu className="w-4 h-4 text-pink-400" />,
    "Tools & Platforms": <Wrench className="w-4 h-4 text-amber-400" />
  };

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.filter(cat => {
      if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
        return false;
      }
      return true;
    }).map(cat => {
      const filteredSkills = cat.skills.filter(s => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.level.toLowerCase().includes(q) ||
          s.tags?.some(t => t.toLowerCase().includes(q))
        );
      });
      return {
        ...cat,
        skills: filteredSkills
      };
    }).filter(cat => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Interactive <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Skill Dashboard</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified technical toolsets spanning frontend architecture, computer vision models, relational DBMS, and developer platforms.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 p-1 rounded-2xl glass-card border-white/5 bg-slate-900/60 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech (e.g. React, YOLO)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40"
            />
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center rounded-2xl glass-card border-white/5">
              <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs text-purple-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div 
                key={category.title}
                className="p-6 sm:p-8 rounded-3xl glass-card border-white/10 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-purple-400" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 hidden sm:block">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-300 px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/20">
                    {category.skills.length} competencies
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 hover:border-purple-500/40 hover:bg-slate-900 transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="flex items-center space-x-1 text-[10px] text-cyan-400 font-mono bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-500/30">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>Core</span>
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed mb-3">
                          {skill.level}
                        </p>
                      </div>

                      {/* Tag Pills */}
                      {skill.tags && skill.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                          {skill.tags.map(t => (
                            <span 
                              key={t}
                              className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Verification Note (No fake percentages) */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-slate-500">
            * Skills are structured by applied project experience and academic certification, avoiding misleading percentage bars.
          </p>
        </div>

      </div>
    </section>
  );
};
