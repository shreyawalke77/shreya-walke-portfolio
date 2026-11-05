import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Search, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Trophy, 
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Filter
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'AI/ML', 'Database', 'Hackathon'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Hackathon') {
          if (project.category !== 'Hackathon' && !project.badge?.toLowerCase().includes('hackathon')) {
            return false;
          }
        } else if (project.category !== selectedCategory) {
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = project.title.toLowerCase().includes(q);
        const matchSubtitle = project.subtitle.toLowerCase().includes(q);
        const matchDesc = project.shortDescription.toLowerCase().includes(q);
        const matchTech = project.technologies.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchSubtitle && !matchDesc && !matchTech) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>APPLIED ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Projects & Systems</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Real-world systems, computer vision models, relational database backends, and award-winning hackathon prototypes.
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
                {cat === 'Hackathon' ? 'Hackathon Projects' : cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-card border-white/10 glass-card-hover flex flex-col justify-between overflow-hidden transition-all duration-300"
            >
              {/* Card Header Top */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center space-x-1">
                      <Trophy className="w-3 h-3 text-amber-400" />
                      <span className="truncate max-w-[140px]">{project.badge}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-purple-400 mt-1 line-clamp-1">
                  {project.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mt-3 line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              {/* Card Footer Bottom */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.technologies.slice(0, 4).map(t => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-purple-300 hover:text-white flex items-center space-x-1 group/btn"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-colors"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
