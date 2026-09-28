import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Search,
  Command,
  FileText,
  Mail,
  Layers,
  Terminal,
  Cpu,
  ArrowRight,
  Award,
  X,
  Check,
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function CommandMenu({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered by parent or state
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const actions = [
    {
      id: 'projects',
      label: 'View Featured AI & ML Projects',
      sublabel: 'Insomnia Detection, Music Genre Classification & Multilingual Chatbot',
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      run: () => navigateTo('projects'),
    },
    {
      id: 'bento',
      label: 'Open AI Engineering Workbench & CLI',
      sublabel: 'Interactive terminal & ML pipeline architecture',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      run: () => navigateTo('bento'),
    },
    {
      id: 'skills',
      label: 'Explore Tech Stack & AI/ML Frameworks',
      sublabel: 'Python, Scikit-learn, TensorFlow, Flask, SQL',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      run: () => navigateTo('skills'),
    },
    {
      id: 'experience',
      label: 'Internships & Career Milestones',
      sublabel: 'SuprMentr, MindMatrix & EduBridge / Capgemini',
      icon: <ArrowRight className="w-4 h-4 text-emerald-400" />,
      run: () => navigateTo('experience'),
    },
    {
      id: 'achievements',
      label: 'Credentials, Awards & Certifications',
      sublabel: 'Microsoft, Kodr Gen AI, Nasscom, Infosys',
      icon: <Award className="w-4 h-4 text-amber-400" />,
      run: () => navigateTo('achievements'),
    },
    {
      id: 'resume',
      label: 'Inspect & Print Resume / CV',
      sublabel: 'Formatted printable profile',
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      run: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'contact',
      label: 'Copy Direct Email',
      sublabel: personalInfo.email,
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-rose-400" />,
      run: handleCopyEmail,
    },
    {
      id: 'github',
      label: 'Visit GitHub Profile',
      sublabel: 'Open external GitHub in new tab',
      icon: <Github className="w-4 h-4 text-slate-400" />,
      run: () => {
        onClose();
        window.open(personalInfo.socials.github, '_blank');
      },
    },
    {
      id: 'linkedin',
      label: 'Visit LinkedIn Profile',
      sublabel: 'Open external LinkedIn profile',
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      run: () => {
        onClose();
        window.open(personalInfo.socials.linkedin, '_blank');
      },
    },
  ];

  const filteredActions = actions.filter(
    (action) =>
      action.label.toLowerCase().includes(query.toLowerCase()) ||
      action.sublabel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-xl bg-[#0e101a] border border-white/15 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-white/5 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500 font-mono">
              No matching actions found for "{query}".
            </div>
          ) : (
            filteredActions.map((action) => (
              <button
                key={action.id}
                onClick={action.run}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {action.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {action.label}
                    </div>
                    <div className="text-xs text-slate-400">{action.sublabel}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-600 group-hover:text-slate-400">
                  ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-[#080a10] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigation Quick Menu</span>
          <span className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">ESC</kbd>{' '}
            to close
          </span>
        </div>
      </div>
    </div>
  );
}
