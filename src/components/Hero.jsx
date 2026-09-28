import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenResume }) {
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);

  const specialties = [
    'Machine Learning & Deep Learning',
    'Generative AI & LLM Applications',
    'Natural Language Processing (NLP)',
    'Python, Scikit-learn & TensorFlow',
    'REST APIs, Flask & Web Development',
    'Cloud Computing & Data Analytics',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpecialtyIndex((prev) => (prev + 1) % specialties.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleHireMeClick = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#ec4899', '#38bdf8'],
    });
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm shadow-emerald-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Greeting eyebrow */}
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm sm:text-base font-mono mb-3">
            <span>Hi there, I'm</span>
          </div>

          {/* Main Headline with Name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3 leading-[1.08]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              {personalInfo.name}
            </span>
          </h1>

          {/* Target Role & Engineering Title */}
          <div className="text-lg sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 mb-6 tracking-tight">
            {personalInfo.role}
          </div>

          {/* Dynamic Rotating Specialty */}
          <div className="h-9 mb-6 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-indigo-300 transition-all duration-300">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              <span>Specializing in:</span>
              <span className="font-semibold text-white tracking-wide">
                {specialties[currentSpecialtyIndex]}
              </span>
            </div>
          </div>

          {/* Bio tagline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleHireMeClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get in Touch</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-850 border border-slate-700/60 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>CV / Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 text-slate-400 mb-16">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>

          {/* Academic Highlights Ribbon (Inspired by top portfolios) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
            {(personalInfo.ribbon || personalInfo.stats).map((stat, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl glass-panel glass-panel-hover text-left relative overflow-hidden border-white/10"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors pointer-events-none" />
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200">
                    {stat.value}
                  </div>
                  {stat.highlight && (
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      {stat.highlight}
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-indigo-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
