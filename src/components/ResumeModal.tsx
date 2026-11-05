import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  EDUCATION_DATA, 
  HACKATHON_ACHIEVEMENTS,
  LEADERSHIP_ROLES,
  SKILL_CATEGORIES
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `
SHREYA SHANTARAM WALKE
Chandwad, Maharashtra, India | Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.bio.replace(/\n+/g, ' ')}

EDUCATION:
- B.Tech in Computer Engineering | SNJB's K.B.J. College of Engineering, Chandwad (2024-2028)
- Higher Secondary Certificate (12th Science) | R.G.B. College, Dahiwad (2024)
- Secondary School Certificate (10th) | S.N.J.B. School, Chandwad (2022)

EXPERIENCE:
- Frontend Developer Intern | Athenura (August 2026 - January 2027)
  * Developed responsive web interfaces using HTML5, modern CSS3, and JavaScript.
  * Translated UI/UX designs into maintainable code.
- Google AI-ML Virtual Intern | AICTE EduSkills (October 2026 - December 2026)
  * 8-week intensive program in Deep Neural Networks, Object Detection, and TensorFlow Lite.

KEY PROJECTS:
- Smart Traffic Surveillance System (React, Python, Flask, YOLOv8 Nano, OpenCV, ByteTrack, MySQL)
- SmartYatra - Smart Bus Capacity & Rural Logistics Platform (Top 3 Transportation Domain)
- PDF_QA_Chatbot (Python, Streamlit, Ollama, Llama 3)
- Smart Study Generator Agent (IBM watsonx Agent #13)
- Blood Donation Management System (MySQL, DBMS, Relational Modeling)

HACKATHON ACHIEVEMENTS:
- Smart Kopargaon Hackathon 2026: Top 20 Overall (100 teams), Top 3 in Transportation Domain

LEADERSHIP & POSITIONS OF RESPONSIBILITY:
- Chief Minister, Career Sansad 2026-27 (Career Katta)
- Ambassador, GirlScript Summer of Code (GSSoC) 2026
- NCC 'A' Certificate Holder & Sergeant
- 1st Prize, SPPU QIP Group Discussion (₹3,000 Cash Prize)
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl glass-card border-white/10 bg-slate-950 p-6 sm:p-10 z-10 max-h-[92vh] overflow-y-auto shadow-2xl">
        
        {/* Top Header Actions */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 sticky top-0 bg-slate-950/90 backdrop-blur-md z-20">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Curriculum Vitae / Resume
            </h2>
            <p className="text-xs text-purple-400 font-mono">
              Verified Candidate Profile • Shreya Walke
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center space-x-1.5 transition-colors shadow-md shadow-purple-600/30"
              title="Print or Save as PDF using your browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center space-x-1.5 transition-colors"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div id="printable-resume" className="space-y-8 text-slate-200">
          
          {/* Resume Header */}
          <div className="text-center space-y-2 pb-6 border-b border-white/10">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              SHREYA SHANTARAM WALKE
            </h1>
            <p className="text-sm font-semibold text-purple-400">
              Frontend Developer | Computer Engineering Student | AI/ML Enthusiast
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 pt-2 font-mono">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Chandwad, Maharashtra, India</span>
              </span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-white underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">
                GitHub: @shreyawalke77
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
              Third-Year B.Tech Computer Engineering student at SNJB's K.B.J. College of Engineering with practical hands-on experience in frontend web development (React.js, HTML5, CSS3, JavaScript), relational database architecture (MySQL, SQL), and Computer Vision pipelines (YOLOv8, OpenCV, ByteTrack). Recognized in national hackathons (Top 20 Overall, Top 3 Transportation Domain at Smart Kopargaon 2026) and student governance (Chief Minister, Career Sansad).
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                    <p className="text-xs text-slate-400">{edu.institution} • {edu.location}</p>
                    <p className="text-[11px] text-purple-300 font-mono mt-1">{edu.scorePlaceholder}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 mt-2 sm:mt-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider mb-3">
              INTERNSHIP EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                      <h3 className="font-bold text-white text-sm">{exp.role}</h3>
                      <p className="text-xs text-cyan-400 font-medium">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 pt-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2">
                        <span className="text-purple-400">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider mb-3">
              FEATURED ENGINEERING PROJECTS
            </h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 5).map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-sm">{p.title}</h3>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-500/20">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{p.shortDescription}</p>
                  <p className="text-[11px] text-slate-400 font-mono pt-1">
                    <strong className="text-slate-300">Stack:</strong> {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
                HACKATHON HONORS
              </h2>
              <p className="text-xs font-bold text-white">Smart Kopargaon Hackathon 2026 (Team Ecoverse)</p>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• Top 20 Overall out of 100+ Engineering Teams</li>
                <li>• Top 3 in Transportation Tech Domain</li>
                <li>• Grand Finale Live Pitch & Prototype Evaluation</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider">
                LEADERSHIP & RECOGNITION
              </h2>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• <strong>Chief Minister:</strong> Career Sansad 2026–27 (Career Katta)</li>
                <li>• <strong>Selected Ambassador:</strong> GirlScript Summer of Code (GSSoC)</li>
                <li>• <strong>1st Prize:</strong> SPPU QIP Group Discussion (₹3,000 Cash Prize)</li>
                <li>• <strong>NCC Sergeant:</strong> 'A' Certificate Holder</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
