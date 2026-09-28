import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070b] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-base font-extrabold text-white tracking-wider">
              {personalInfo.name}
              <span className="text-indigo-400">.</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-xs text-slate-400">
              Distributed Systems & Full-Stack Web Architecture
            </span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
