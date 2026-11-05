import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      setStatus('error');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      setStatus('error');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Please provide a subject for your message.');
      setStatus('error');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please enter a message with at least 10 characters.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Construct mailto as a reliable browser client fallback
    // In production, users can hook up Formspree, Web3Forms, or EmailJS
    try {
      // Simulate submission network handshake or forward to mail client
      setTimeout(() => {
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          `[Portfolio Contact] ${formData.subject}`
        )}&body=${encodeURIComponent(
          `Sender Name: ${formData.fullName}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        window.location.href = mailtoUrl;

        setStatus('success');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      }, 700);
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to trigger email client. Please email directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Have an Opportunity or an Interesting Idea?{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Let's Connect.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            I am always eager to discuss engineering internships, collaborative hackathons, AI projects, or student leadership initiatives.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-card border-white/10 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Direct Email</h3>
                  <p className="text-xs text-slate-400">Prompt responses for professional inquiries</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-200 truncate mr-2">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 text-xs font-semibold flex items-center space-x-1 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl glass-card border-white/10 glass-card-hover group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">LinkedIn</h4>
                  <p className="text-xs text-slate-400 mt-0.5">/in/shreya-walke</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl glass-card border-white/10 glass-card-hover group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Github className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">GitHub</h4>
                  <p className="text-xs text-slate-400 mt-0.5">@shreyawalke77</p>
                </div>
              </a>

            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-card border-white/10 flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Location</h4>
                <p className="text-xs text-slate-300">Chandwad, Nashik, Maharashtra, India</p>
                <p className="text-[11px] text-slate-500 font-mono">Available for Remote & Hybrid Positions</p>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border-white/10 relative overflow-hidden">
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to initiate direct communication.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center space-x-2 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your email client has been prepared with your message. If it didn't open automatically, you can also write directly to <strong>{PERSONAL_INFO.email}</strong>.
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs flex items-center space-x-2 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-colors"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. aditi@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Internship Opportunity / Hackathon Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-xs bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 transition-all duration-200 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'submitting' ? 'Preparing Transmission...' : 'Send Message'}
                  </span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
