import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  FileText,
  X
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified credentials in artificial intelligence, object-oriented Java programming, and military cadet qualifications.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl glass-card border-white/10 glass-card-hover flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mt-1 mb-4">
                  {cert.issuer}
                </p>

                {/* Skills Learned */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Key Competencies:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono text-purple-300 bg-purple-950/30 px-2 py-0.5 rounded border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => setPreviewCert(cert)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-purple-600/20 text-purple-300 border border-purple-500/30 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Certificate Card</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        {previewCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setPreviewCert(null)}
            />
            <div className="relative w-full max-w-lg rounded-3xl glass-card border-white/10 bg-slate-950/95 p-6 sm:p-8 z-10 shadow-2xl">
              <button
                onClick={() => setPreviewCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{previewCert.title}</h3>
                  <p className="text-xs text-cyan-400">{previewCert.issuer}</p>
                </div>
              </div>

              {/* Certificate Decorative Frame Placeholder */}
              <div className="my-6 p-6 rounded-2xl border-2 border-dashed border-purple-500/30 bg-purple-950/10 text-center space-y-2">
                <ShieldCheck className="w-10 h-10 text-purple-400 mx-auto" />
                <p className="text-sm font-bold text-white">Certificate of Completion / Merit</p>
                <p className="text-xs text-slate-400">
                  Awarded to <span className="text-purple-300 font-semibold">Shreya Shantaram Walke</span>
                </p>
                <p className="text-[11px] font-mono text-slate-500 mt-2">
                  Issued: {previewCert.date} • Verified Credential
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Verified Competency Modules:</p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {previewCert.skillsLearned.map((s, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Document ID: Ready for upload / PDF link
                </span>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
