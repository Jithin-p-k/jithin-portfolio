import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Sparkles, FileText, Menu, X, Command, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenResume, onOpenCommandMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#6366f1', '#a855f7', '#38bdf8', '#34d399'],
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Bento', href: '#bento' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-300">
                {personalInfo.name.split(' ')[0]}
                <span className="text-indigo-400">.</span>
                <span className="text-xs uppercase text-slate-400 font-mono font-medium ml-1">dev</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Command Menu button */}
            <button
              onClick={onOpenCommandMenu}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
              title="Open command palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span>K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-all hover:border-slate-600"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </button>

            {/* Hire Me / Connect Button */}
            <button
              onClick={triggerConfetti}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 rounded-xl hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCommandMenu}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 bg-slate-950/95 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col gap-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded-xl"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Full Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerConfetti();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/20"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Hire Me / Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
