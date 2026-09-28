import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import {
  ExternalLink,
  Zap,
  Layers,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & Machine Learning', 'AI & Cloud Computing', 'NLP & Conversational AI'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured AI & Engineering Projects
            </h2>
            <p className="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
              Hands-on implementations in machine learning, acoustic feature extraction, clinical data reduction, and Generative AI modules.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-6 md:mt-0 p-1.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between border-white/10 relative overflow-hidden transition-all duration-300"
            >
              {/* Image Preview Header */}
              {project.image && (
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-black/40 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f18] via-transparent to-black/30" />

                  {/* Top floating pill tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center font-mono text-xs font-bold shadow-lg">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-black/70 text-slate-200 border border-white/20 backdrop-blur-md">
                        {project.year || '2026'}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {project.metric}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/5 text-indigo-300 border border-white/10">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Features preview */}
                  <div className="space-y-1.5 mb-5">
                    {(project.features || project.highlights).slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-indigo-400 font-bold mt-0.5">›</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of card */}
                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:underline underline-offset-4"
                    >
                      <span>Deep Dive & Architecture</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Source Code"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 text-white text-xs font-medium shadow-sm transition-colors"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
