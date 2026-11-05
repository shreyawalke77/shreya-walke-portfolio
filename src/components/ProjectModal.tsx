import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  UserCheck, 
  AlertCircle,
  Trophy
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl glass-card border-white/10 bg-slate-950/95 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3 pr-8">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300">
            {project.category}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
            Status: {project.status}
          </span>
          {project.badge && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 flex items-center space-x-1">
              <Trophy className="w-3 h-3 text-amber-400" />
              <span>{project.badge}</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          {project.title}
        </h2>
        <p className="text-sm font-semibold text-purple-400 mt-1 mb-6">
          {project.subtitle}
        </p>

        {/* Metrics Grid if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <p className="text-[10px] font-mono uppercase text-slate-400">{m.label}</p>
                <p className="text-sm font-bold text-white mt-0.5">{m.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Full Overview */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2 flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="leading-relaxed bg-slate-900/50 p-4 rounded-2xl border border-white/5">
              {project.fullDescription}
            </p>
          </div>

          {/* Distinct Contribution Section (Important for honesty & recruiter evaluation) */}
          <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30">
            <h3 className="text-xs font-mono font-bold uppercase text-purple-300 tracking-wider mb-2 flex items-center space-x-2">
              <UserCheck className="w-4 h-4 text-purple-400" />
              <span>My Direct Engineering Contribution</span>
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-3 flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Features & Capabilities</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <li key={fIdx} className="text-xs text-slate-300 flex items-start space-x-2 bg-slate-900/30 p-2.5 rounded-xl border border-white/5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(t => (
                <span key={t} className="text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-500/20 px-3 py-1 rounded-xl">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hackathon Note if applicable */}
          {project.hackathonNote && (
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200 flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{project.hackathonNote}</span>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center space-x-2 transition-all shadow-md shadow-purple-600/30"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            ) : (
              <span className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-white/5 border border-white/5 flex items-center space-x-2">
                <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                <span>Repository: Internal / Available on Request</span>
              </span>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            ) : (
              <span className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-white/5 border border-white/5">
                Live Deployment: Coming Soon / Evaluation Prototype
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
