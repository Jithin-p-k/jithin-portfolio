import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands, personalInfo, philosophyData } from '../data/portfolioData';
import {
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Activity,
  GitCommit,
  CheckCircle2,
  Server,
  Zap,
  Clock,
  Send,
  CornerDownLeft,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BentoSection() {
  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: "Welcome to Alex Rivera's interactive CLI (v2.4.0-prod)" },
    { type: 'system', text: "Type 'help' or click any suggested command chips below." },
    { type: 'input', text: 'help' },
    { type: 'output', lines: terminalCommands.help },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setTerminalHistory([]);
      return;
    }

    if (trimmed === 'hire') {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#10b981'],
      });
    }

    const commandResult = terminalCommands[trimmed];
    const newHistory = [
      ...terminalHistory,
      { type: 'input', text: cmd },
      commandResult
        ? { type: 'output', lines: commandResult }
        : {
            type: 'error',
            text: `Command not found: "${cmd}". Type 'help' to see valid commands.`,
          },
    ];
    setTerminalHistory(newHistory);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    executeCommand(inputVal);
    setInputVal('');
  };

    const quickCommands = ['help', 'about', 'skills', 'projects', 'education', 'certifications', 'hire', 'clear'];

  return (
    <section id="bento" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI & ML ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Inside My AI Engineering Workbench
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            An overview of how I develop predictive machine learning models, extract audio features, and build Generative AI modules.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Bento Card 1: Interactive Terminal */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl glass-panel p-5 flex flex-col justify-between border-indigo-500/20 shadow-xl shadow-black/40">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-xs font-mono text-slate-400 font-medium">
                  jithin@aiml-dev:~ (zsh)
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ONLINE</span>
              </div>
            </div>

            {/* Quick Command Chips */}
            <div className="flex flex-wrap items-center gap-1.5 mb-3 text-xs">
              <span className="text-[11px] font-mono text-slate-500">Quick run:</span>
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-300 text-slate-300 border border-white/10 font-mono text-[11px] transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Output Area */}
            <div className="bg-[#05060a] rounded-xl p-3.5 font-mono text-xs sm:text-sm text-slate-300 h-64 overflow-y-auto space-y-2 border border-black/50 shadow-inner">
              {terminalHistory.map((item, index) => (
                <div key={index}>
                  {item.type === 'system' && (
                    <div className="text-slate-500 italic">{item.text}</div>
                  )}
                  {item.type === 'input' && (
                    <div className="flex items-center gap-2 text-indigo-400 font-medium">
                      <span className="text-slate-500">❯</span>
                      <span>{item.text}</span>
                    </div>
                  )}
                  {item.type === 'output' && (
                    <div className="space-y-1 text-slate-300 pl-4 border-l border-indigo-500/20">
                      {item.lines.map((line, lIdx) => (
                        <div key={lIdx} className="leading-relaxed">
                          {line}
                        </div>
                      ))}
                    </div>
                  )}
                  {item.type === 'error' && (
                    <div className="text-rose-400 pl-4 border-l border-rose-500/40">
                      {item.text}
                    </div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Prompt Form */}
            <form onSubmit={handleTerminalSubmit} className="mt-3 flex items-center gap-2">
              <div className="relative flex-1 flex items-center">
                <span className="absolute left-3 text-indigo-400 font-mono text-sm">❯</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type a command (try 'projects' or 'education')..."
                  className="w-full bg-[#05060a] border border-white/10 rounded-lg pl-7 pr-3 py-2 text-xs sm:text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                aria-label="Send command"
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors flex items-center justify-center"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Bento Card 2: AI Pipeline Blueprint */}
          <div className="rounded-2xl glass-panel glass-panel-hover p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  ML Pipeline Flow
                </span>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  Feature Reduction
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Insomnia Diagnostic Pipeline
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Multi-dimensional behavioral & biometric sleep data analysis with dimensionality reduction and ensemble classifiers.
              </p>

              {/* Architecture Node Visualizer */}
              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Sleep Telemetry Data</span>
                  <span className="text-emerald-400">Preprocessed</span>
                </div>
                <div className="text-center text-slate-600 text-xs">↓ Normalization & Cleaning</div>
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between">
                  <span className="text-indigo-300 font-semibold">PCA Feature Reduction</span>
                  <span className="text-indigo-400">Salient Markers</span>
                </div>
                <div className="text-center text-slate-600 text-xs">↓ Ensemble Training</div>
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">Random Forest / SVM</span>
                  <span className="text-purple-400">Early Diagnosis</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Scikit-learn & Python</span>
              <span className="text-emerald-400 font-medium">Validated</span>
            </div>
          </div>

          {/* Bento Card 3: Live Engineering Focus & Activity */}
          <div className="rounded-2xl glass-panel glass-panel-hover p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  Current Internship
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Active
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Generative AI & Android
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Contributing at MindMatrix.io & SuprMentr on Generative AI modules, Android application features, and cloud computing capstones.
              </p>

              {/* Progress details */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">Gen AI Module Integration</span>
                    <span className="text-indigo-400 font-bold">92%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full w-[92%]" />
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                  <GitCommit className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <div className="text-[11px] font-mono text-slate-300">
                    <span className="text-indigo-300 font-semibold">feat(genai):</span> interactive product-based learning workflows
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                Active Training
              </span>
              <span className="text-indigo-400 font-mono text-[11px]">2026 Cohort</span>
            </div>
          </div>

          {/* Bento Card 4: Engineering Philosophy & Principles (Spans full width across 4 cols on lg) */}
          <div className="md:col-span-3 lg:col-span-4 rounded-2xl glass-panel p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">Engineering Core Principles</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {philosophyData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all hover:bg-white/[0.07]"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                    {idx === 0 && <Zap className="w-4 h-4" />}
                    {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 2 && <Layers className="w-4 h-4" />}
                    {idx === 3 && <Sparkles className="w-4 h-4" />}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
