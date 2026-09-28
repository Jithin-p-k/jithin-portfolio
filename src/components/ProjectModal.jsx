import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Activity, Server, Zap, ArrowLeft } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#0d0f18] border border-white/15 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Preview Banner if available */}
        {project.image && (
          <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f18] via-transparent to-black/50" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors backdrop-blur-md"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Modal Top Bar */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                {project.metric}
              </span>
              {project.year && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10">
                  {project.year}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
            <p className="text-sm text-slate-400 mt-1">{project.subtitle}</p>
          </div>

          {!project.image && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2 font-semibold">
              Overview & Architecture
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features (Numbered List like Sinchana's portfolio) */}
          {project.features && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3 font-semibold">
                Key Features
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Pipeline Flow */}
          {project.architecture && (
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-indigo-400 font-semibold mb-2">
                <Server className="w-3.5 h-3.5" />
                <span>Data & Model Architecture Pipeline</span>
              </div>
              <div className="p-3 bg-[#07090e] rounded-lg border border-white/5 text-slate-300 leading-relaxed break-words">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2 font-semibold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Links */}
        <div className="p-6 border-t border-white/10 bg-[#090b12] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
}
