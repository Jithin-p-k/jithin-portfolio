import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Terminal, Code, Database, Cloud, Layout, CheckCircle, Sparkles } from 'lucide-react';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.skills
      : skillsData.skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-3.5 h-3.5" />;
      case 'backend':
        return <Terminal className="w-3.5 h-3.5" />;
      case 'database':
        return <Database className="w-3.5 h-3.5" />;
      case 'devops':
        return <Cloud className="w-3.5 h-3.5" />;
      default:
        return <Code className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tools, Runtimes & Infrastructure
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            An extensive toolchain chosen for high developer velocity, type-safety, and rock-solid production performance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl glass-panel hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-sm group-hover:scale-125 transition-transform`}
                />
                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {skill.years}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    className={`text-[11px] font-medium ${
                      skill.level === 'Expert'
                        ? 'text-emerald-400'
                        : skill.level === 'Advanced'
                        ? 'text-cyan-400'
                        : 'text-indigo-400'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
